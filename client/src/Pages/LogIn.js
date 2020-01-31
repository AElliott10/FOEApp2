import React, { Component } from "react";
import { MainHeader } from "../Components/MainBackground";
import { Link } from "react-router-dom";
import API from "../Utilities/API";
import { Input, FormBtn } from "../Components/Form";
import { Row } from "../Components/Grid";


class LogIn extends Component {
  state = {
    email: "",
    password: ""
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
    if (this.state.email && this.state.password) {
      API.verifyAccess({
        email: this.state.email,
        password: this.state.password
      })
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div className="LogIn">
        <MainHeader>
          <h2>Register for Festival of the Elves</h2>
        </MainHeader>
        <p>
          Please provide your account information.
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
          />          <FormBtn
            //disabled={!(this.state.author && this.state.title)}
            onClick={this.handleFormSubmit}
          >
            Submit AccountForm
            </FormBtn>
        </form>
        <Row>
          <Link to="/">← Back to Home</Link>
        </Row>

      </div>
    );
  }
}

export default LogIn;
