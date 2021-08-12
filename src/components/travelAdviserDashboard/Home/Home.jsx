import React, {useEffect, useState} from 'react';
import { CssBaseline, Grid } from "@material-ui/core";
import Header from "../Header/Header";
import List from "../List/List";
import Map from "../Map/Map";
import {getPlacesData} from "../../../api";

const Home = () => {
    const [ places, setPlaces]  = useState([]);
    const [ coordinates, setCoordinates]  = useState({});
    const [ bounds, setBounds]  = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [autocomplete, setAutocomplete] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);
        setFilteredPlaces(filtered);
    }, [places, rating]);

    useEffect(() => {
        setIsLoading(true)
        if (bounds) {
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data);
                    setIsLoading(false);
                })
        }
    },[coordinates, bounds, type])

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoordinates({ lat, lng });
    };
    return (
        <>
            <CssBaseline/>
            <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />
            <Grid container spacing={3} style={{width: "100%"}}>
                <Grid item xs={12} md={4}>
                    <List
                        places={filteredPlaces.length ? filteredPlaces : places}
                        childClicked={childClicked}
                        isLoading={isLoading}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                <Map
                    setCoordinates={setCoordinates}
                    setBounds={setBounds}
                    coordinates={coordinates}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    setChildClicked={setChildClicked}
                />
                </Grid>
            </Grid>
        </>
    );
};

export default Home;