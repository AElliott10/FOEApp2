import React, { Component } from "react";
import { MainHeader } from "../Components/MainBackground";
import { Link } from "react-router-dom";
import API from "../Utilities/API";
import { Input, FormBtn } from "../Components/Form";
import { Row } from "../Components/Grid";


class Profile extends Component {
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
    end_festival: "",
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
        start_festival: this.state.start_festival,
        end_festival: this.state.end_festival,
        learn_about: this.state.learn_about
      })
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div className="Profile">
        <MainHeader>
          <h2>Register for Festival of the Elves</h2>
        </MainHeader>
        <p>
          EDIT PROFILE
        </p>
        <form>
          <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            placeholder="Email (required)"
          />
          <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            placeholder="Password"
          />
          <Input
            value={this.state.first_name}
            onChange={this.handleInputChange}
            name="first_name"
            placeholder="First Name"
          />
          <Input
            value={this.state.last_name}
            onChange={this.handleInputChange}
            name="last_name"
            placeholder="Last Name"
          />
          <p>
            Please provide your children(s) name(s) for their elf notes.
        </p>
          <Input
            value={this.state.child_1_first_name}
            onChange={this.handleInputChange}
            name="child_1_first_name"
            placeholder="First Child's Name"
          />
          <Input
            value={this.state.child_2_first_name}
            onChange={this.handleInputChange}
            name="child_2_first_name"
            placeholder="Second Child's Name"
          />
          <Input
            value={this.state.child_3_first_name}
            onChange={this.handleInputChange}
            name="child_3_first_name"
            placeholder="Third Child's Name"
          />
          <p>
            Please provide an Elf's name.
        </p>
          <Input
            value={this.state.elf_1}
            onChange={this.handleInputChange}
            name="elf_1"
            placeholder="First Elf Name"
          />
          <Input
            value={this.state.elf_2}
            onChange={this.handleInputChange}
            name="elf_2"
            placeholder="Second Elf Name"
          />
          <p>
            Review your dates for the Festival of the Elves.
        </p>
          <Input
            value={this.state.start_festival}
            onChange={this.handleInputChange}
            name="start_festival"
            placeholder="Start Date for Festival"
          />
          <Input
            value={this.state.end_festival}
            onChange={this.handleInputChange}
            name="end_festival"
            placeholder="Last Day of the Festival"
          />
          <Input
            value={this.state.learn_about}
            onChange={this.handleInputChange}
            name="learn_about"
            placeholder="How did you hear about the Festival of Elves?"
          />
          <FormBtn
            //disabled={!(this.state.author && this.state.title)}
            onClick={this.handleFormSubmit}
          >
            Submit Edits
            </FormBtn>
        </form>
        <Row>
          <Link to="/">← Back to Home</Link>
        </Row>

      </div>
    );
  }
}

export default Profile;

//<img src={logo} className="App-logo" alt="logo" />