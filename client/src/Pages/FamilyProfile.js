import React, { Component } from "react";
import { MainHeader } from "../Components/Header_Footer/MainHeader";
import API from "../Utilities/API";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

/*const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));*/

class FamilyProfile extends Component {
  

  state = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    child_1_first_name: "",
    child_2_first_name: "",
    child_3_first_name: "",
    elf_1: "",
    elf_2: "",
    start_festival: "",
    learn_about: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //if all the required fields are complete
    if (this.state.email && this.state.password && this.state.first_name && this.state.last_name && this.state.child_1_first_name && this.state.elf_1 && this.state.elf_2 && this.state.start_festival && this.state.learn_about) {
      API.saveAccounts({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        child_1_first_name: this.state.child_1_first_name,
        child_2_first_name: this.state.child_2_first_name,
        child_3_first_name: this.state.child_3_first_name,
        elf_1: this.state.elf_1,
        elf_2: this.state.elf_2,
        start_festival: new Date(this.state.start_festival),
        learn_about: this.state.learn_about
      })
        .catch(err => console.log(err.response));
    }
  };

  render() {

    return (
      <Container>
        <div className="AccountForm">
          <MainHeader />
          <Typography component="h1" variant="h5">Please complete the form.</Typography>
          <form>
            <TextField
              value={this.state.email}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={this.state.password}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
            <TextField
              value={this.state.first_name}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first_name"
              label="first_name"
              name="first_name"
              autoComplete="first_name"
              autoFocus
            />
            <TextField
              value={this.state.last_name}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last_name"
              label="last_name"
              name="last_name"
              autoComplete="last_name"
              autoFocus
            />
            <Typography component="h1" variant="h5">
              Please provide your children(s) name(s) for their elf notes.
        </Typography>
            <TextField
              value={this.state.child_1_first_name}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="child_1_first_name"
              label="First Child's Name"
              name="child_1_first_name"
              autoComplete="child_1_first_name"
              autoFocus
            />
            <TextField
              value={this.state.child_2_first_name}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="child_2_first_name"
              label="Second Child's Name"
              name="child_2_first_name"
              autoComplete="child_2_first_name"
              autoFocus
            />
            <TextField
              value={this.state.child_3_first_name}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="child_3_first_name"
              label="Third Child's Name"
              name="child_3_first_name"
              autoComplete="child_3_first_name"
              autoFocus
            />
            <Typography component="h1" variant="h5">
              Please provide an Elf's name.
        </Typography>
            <TextField
              value={this.state.elf_1}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="elf_1"
              label="First Elf Name"
              name="elf_1"
              autoComplete="elf_1"
              autoFocus
            />
            <TextField
              value={this.state.elf_2}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="elf_2"
              label="Second Elf Name"
              name="elf_2"
              autoComplete="elf_2"
              autoFocus
            />
            <Typography component="h1" variant="h5">
              Choose the start date for your Festival of Elves.
        </Typography>
            <TextField
              value={this.state.start_festival}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="start_festival"
              label="Start Date Format MM/DD/YYYY"
              name="start_festival"
              autoComplete="start_festival"
              autoFocus
            />
            
            <TextField
              value={this.state.learn_about}
              onChange={this.handleInputChange} variant="outlined"
              margin="normal"
              required
              fullWidth
              id="learn_about"
              label="How did you hear about the Festival of Elves?"
              name="learn_about"
              autoComplete="learn_about"
              autoFocus
            />
            <Button
              type="submit"
              onClick={this.handleFormSubmit}
              fullWidth
              variant="contained"
              color="primary"
            >Log In</Button>

          </form>

        </div>
      </Container>
    );
  }
}

export default FamilyProfile;
