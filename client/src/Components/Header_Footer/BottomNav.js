import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Tabs, Tab }from '@material-ui/core';
//import Tab from '@material-ui/core/Tab';
import HouseIcon from '@material-ui/icons/House';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RedeemIcon from '@material-ui/icons/Redeem';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    position: 'fixed',
    bottom: '0',
    right: '0',
    left: '0',
    anchorpadding: '12px',
    indicatorColor: "#b71c1c",
    textColor:"secondary#004940",
    
  },

});

export function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={0}
        onChange={handleChange}
        variant="fullWidth"
        //indicatorColor="secondary"
        //textColor="secondary"
        aria-label="icon label tabs example"
        centered
    
      >
        <Link to='/' className={classes.link}>
          <Tab icon={<HouseIcon />} label="HOME" /> 
        </Link>

        <Link to='/LogIn' className={classes.link}>
          <Tab icon={<LaptopIcon />} label="LOG IN" />
        </Link>
        
        <Link to='/AccountForm' className={classes.link}> 
          <Tab icon={<ListAltIcon/> } label="REGISTER" /> 
        </Link>

        <Link to='/ElfProfile'className={classes.link}> 
          <Tab icon={<FaceIcon />} label="ELVES PROFILE" /> 
        </Link>

        <Link to='/MagicalNotes'className={classes.link}> 
          <Tab icon={<RedeemIcon />} label="MAGICAL NOTES" /> 
        </Link>

        <Link to='/FamilyProfile'className={classes.link}> 
          <Tab icon={<ChildFriendlyIcon />} label="FAMILY PROFILE" /> 
        </Link>

      </Tabs>

    </Paper>
  );
}
export default SimpleBottomNavigation;



//Look up fixed bottom in CSS and use CSS

