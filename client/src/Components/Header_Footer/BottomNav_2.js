import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HouseIcon from '@material-ui/icons/House';
import RedeemIcon from '@material-ui/icons/Redeem';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export function SimpleBottomNavigation_2() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Link to='/' className={classes.link}>
          <Tab icon={<HouseIcon />} label="HOME" /> 
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
export default SimpleBottomNavigation_2;



//Look up fixed bottom in CSS and use CSS

