import React from 'react';
import Star from './Star';
import store from '../store';
import {onSend} from '../reducers/action-creators'
import axios from 'axios'

export default class extends React.Component {
    constructor() {
        super();
        this.state = store.getState();

        this.setName = this.setName.bind(this);
        this.setLocation = this.setLocation.bind(this);
        this.onSend = this.onSend.bind(this);
    }
    setName(evt) {
        this.setState({name: evt.target.value})
    }
    setLocation(evt) {
        this.setState({location: evt.target.value})
    }
    onSend(state) {
     axios.post('/api/stars', state)
      .then(res => this.setState({stars: this.state.stars.concat(state)}))
      .catch(err => console.error(err))
    }

    render() {
        return (
            <form id ="star-form" onSubmit={() => this.onSend(this.state)}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" id="recipient-field" onChange={this.setName}/>
                </div>
                <br />
                <div className="form-group">
                    <label>Location:</label>
                    <input type="text" id="subject-field" onChange={this.setLocation}/>
                </div>
                <br />
                <button type="submit">Create Star!</button>
            </form>
        );
    }

}


