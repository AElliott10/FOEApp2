import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HouseIcon from '@material-ui/icons/House';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HouseIcon />} />
            <BottomNavigationAction label="Log In" icon={<LaptopIcon />} />
            <BottomNavigationAction label="Register" icon={<ListAltIcon />} />
            <BottomNavigationAction label="Elves Notes" icon={<FaceIcon />} />

        </BottomNavigation>
    );
}
export default SimpleBottomNavigation;
