import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import GoogleMapReact from 'google-map-react';
import Rating from '@material-ui/lab/Rating';
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import useStyles from "./mapStyles";

const Map = ({coordinates, setCoordinates, setBounds, places, setChildClicked}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width: 600px)');
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAPS_TRAVEL_ADVISOR_KEY}`}}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50,  50, 0]}
            options={''}
            onChange={(e) => {
                setCoordinates({ lat:  e.center.lat, lng: e.center.lng });
                setBounds({ sw:  e.marginBounds.sw, ne:  e.marginBounds.ne });
            }}
            onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map(( place, i ) => (
                    <div
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                     key={i}
                    >
                        {!isMobile
                            ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
                            : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                    alt=""
                                    />
                                    <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                                </Paper>
                            )}
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;