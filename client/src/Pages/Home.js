import React, { Component } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import { SimpleBottomNavigation } from "../Components/Header_Footer/BottomNav";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';


class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <div >
          <Grid container >
            <Grid item lg>
              <Typography align="center" >
                <h1 color= "#004940">Welcome to The Festival of Elves!</h1>
                <h1>
                  We are so excited to share with you a old tradition by elves for many centuries....
<br/>
                  We are so excited to share with you a old tradition by elves for many centuries....
                  <br/>
                  We are so excited to share with you a old tradition by elves for many centuries....



                </h1>
              </Typography>
            </Grid>
          </Grid>
        </div>
      
        <SimpleBottomNavigation position='fixed' color="004940" className={{top:"auto", bottom: 0}}/>
    
      </div>
    );
  }
}

export default Home;


//<img src={logo} className="App-logo" alt="logo" />