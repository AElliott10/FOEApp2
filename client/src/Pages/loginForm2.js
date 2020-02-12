/*import React from 'react';
import { connect } from 'react-redux';
import Login from '../ClientRoutes/apiAuthenticate';
import ValidateInput from '../Components/Authorization/validationLogin';
import TextFieldGroup from '../Components/Authorization/textFieldGroup';
     
class LoginForm extends React.Component {
    //CREATE STATE HERE!!!!
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }


    isValid() {
        const { errors, isValid } = ValidateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    //DEFINE FUNCTIONS
    onSubmit(e) {
        e.preventDefault();
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.push('/'),
                (err) => this.setState({ errors: err.data.errors, isLoading: false })
            );
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;
        return (
            <form>
                <h1> Login</h1>

                <TextFieldGroup
                    field="identifier"
                    label="Email Address"
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type="password"
                />

                <div className="form-group"><button className="btn btn-primary btn-lg" disable={isLoading}>Login</button></div>

            </form>

        );
    }
}
LoginForm.propTypes = {
    Login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default connect(null, { Login })(LoginForm);
*/