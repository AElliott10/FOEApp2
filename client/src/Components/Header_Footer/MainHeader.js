import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { makeStyles,} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 200,
    
  },

  Appbar: {

  },

  toolbar: {
    background: '#ffffff',
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: "#004940",
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
}));

export function MainHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >

        <Toolbar className={classes.toolbar} >

          <Typography className={classes.title} variant="h1" align="center" noWrap>
            The Festival of Elves
          </Typography>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainHeader;


