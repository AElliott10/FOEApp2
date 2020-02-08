import React, { Component } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import { SimpleBottomNavigation } from "../Components/Header_Footer/BottomNav";
import { Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';


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
                <body1>XXXXXXXX</body1>
              </Typography>
            </Grid>
          </Grid>
        </div>
        <SimpleBottomNavigation />
      </div>
    );
  }
}

export default ElfProfile;
