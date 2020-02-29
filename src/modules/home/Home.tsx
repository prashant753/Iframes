import React, { Component } from 'react';

import './Home.css';

interface IState {
    url1: string;
    url2: string;
}

class Home extends Component<any, IState> {

    state = {
        url1: '',
        url2: '',
    }
    render() {
        return (
            <div>
                <div className="items-div">
                    <span className="user-name">Name</span>
                    Textbox 1: <input onChange={this.updateUrl1} style={{ marginRight: "360px" }} type="text" className="input-field" />
                    Textbox 2: <input onChange={this.updateUrl2} type="text" className="input-field" />
                    <input onClick={this.logout} className="logout" type="button" value="Logout" />
                </div>
                <div className="frame-container">
                    <div className="frame-one">
                        <h3 className="heading">Frame 1</h3>
                        <hr className="divider" />
                        <iframe className="i-frame" src={this.state.url1} title="frame1" />
                    </div>
                    <div className="frame-two">
                        <h3 className="heading">Frame 1</h3>
                        <hr className="divider" />
                        <iframe className="i-frame" src={this.state.url2} title="frame2" />
                    </div>
                </div>
            </div>
        );
    }

    private updateUrl1 = (event: any) => {
        event.persist();
        this.setState({
            url1: event.target.value,
        });
    }

    private updateUrl2 = (event: any) => {
        event.persist();
        this.setState({
            url2: event.target.value,
        });
    }

    private logout = () => {
        localStorage.removeItem('login');
        this.props.history.push('/login');
    }
}

export default Home;