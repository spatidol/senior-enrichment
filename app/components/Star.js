import React, { Component } from 'react';
import store from '../store';
import { Link } from 'react-router';
import NewStar from './NewStar';

export default class Star extends Component {
  componentDidMount () {
   this.props.onLoadStars();
  }
  render() {

    return (
      <div>
        {
          this.props.stars.map(star => {
            return (
              <ul key={star.id} className="list-unstyled">
                <li>
                  <Link to={"/stars/" + star.id}> { star.name }</Link>
                </li>
              </ul>

            )
          })
        }
        <NewStar />
      </div>
    )
  }
}

