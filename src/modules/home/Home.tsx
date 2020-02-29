import React, { Component } from 'react';

import './Home.css';

class Home extends Component<any, any> {
    render() {
        return (
            <div>
                <div className="items-div">
                    <span className="user-name">Name</span>
                   Textbox 1: <input style={{marginRight: "360px"}} type="text" className="input-field" />
                   Textbox 2: <input type="text" className="input-field"/>
                    <input onClick={this.logout} className="logout" type="button" value="Logout" />
                </div>
            </div>
        );
    }

    private logout = () => {
        localStorage.removeItem('login');
        this.props.history.push('/login');
    }
}

export default Home;