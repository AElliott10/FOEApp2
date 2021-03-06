import React, { Component } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import { SimpleBottomNavigation } from "../Components/Header_Footer/BottomNav";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import andrew from "../Components/kidCalendar/img/andrew.jpg";
import khalil from "../Components/kidCalendar/img/khalil.jpg";
import manoli from "../Components/kidCalendar/img/manoli.jpg";

class ElfProfile extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <div >
          <Grid container >
            <Grid item lg>
              <Typography align="center">
                <h1>ELF PROFILE PAGE</h1>
                
                <h2>Khalil Winkles</h2>
                <img src={khalil} height="200" alt="khalil"/>
                <p> Loves Harry Potter, video games and anything Paul Graham.</p>
                <br/>
                <h2>Andrew Tinker</h2>
                <img src={andrew} height="200" alt="andrew"/>
                <andrewImage/>
                <p> Loves video games and databases.</p>
                <br/>
                <h2>Manoli Sprinkles</h2>
                <img src={manoli} height="200" alt="manoli"/>
                <p> Loves video games and React.</p>
                <br/>
                


              </Typography>
            </Grid>
          </Grid>
        </div>
        <SimpleBottomNavigation position='fixed' color="004940" className={{top:"auto", bottom: 0}}/>
      </div>
    );
  }
}

export default ElfProfile;
