import React from 'react';
import { Credentails } from '../../constants/Constant';

import './login.css';

interface IState {
    email: string;
    password: string;
    error: boolean;
}

export class Login extends React.Component<any, IState> {

    state = {
        email: '',
        password: '',
        error: false,
    };

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="login-container">
                        <h2>Login</h2>
                        <div className="login-input">
                            Email: <input onChange={this.updateEmail}
                                className="login-input-element" type="text" value={this.state.email} />
                            Password:  <input onChange={this.updatePassword}
                                className="login-input-element" type="text" value={this.state.password} />
                            <input onClick={this.submit}
                                className="login-input-element" type="button" value="Submit" />
                        </div>
                    </div>
                    {
                        this.state.error && <span className="error-text">Email or password is incorrect</span>
                    }
                </header>
            </div>
        );
    }

    private updateEmail = (event: any) => {
        event.persist();
        this.setState({
            email: event.target.value,
        })
    }

    private updatePassword = (event: any) => {
        event.persist();
        this.setState({
            password: event.target.value,
        })
    }

    private submit = () => {
        const { email, password } = this.state;
        if (email === Credentails.email && password === Credentails.password) {
            this.setState({ error: false })
            localStorage.setItem('login', 'true');
            this.props.history.push('/home');
        } else {
            this.setState({
                error: true,
            });
        }
    }
}

export default Login;
