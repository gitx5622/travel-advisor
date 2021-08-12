import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box} from "@material-ui/core";
import {Autocomplete} from "@react-google-maps/api";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from "./styles";

const Header = ({onLoad, onPlaceChanged}) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h4" className={classes.title}>
                Travel Advisor
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.explore}>
                        Explore new places
                    </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput}}/>
                        </div>
                    </Autocomplete>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;