import React, {Component} from 'react'
import './styles/cardimage.css'

class Card extends Component {

  render() {
    return(
      <div className="card">
        <div className="card-image">
          <img src={this.props.bg} alt="background-1" className="cardImg" />
        </div>
        <div className="card-content">
          <p>Tyler Kamei</p>
          <ul>
            <li>Movies</li>
            <li>Reading</li>
          </ul>
        </div>
        <div className="card-action">
          <a href="#">Chat</a>
        </div>
      </div>
    )
  }
}

export default Card;