import React, {Component} from 'react'
import './styles/cardimage.css'

class Card extends Component {

  sendEmail = event => {
    event.preventDefault();

    let email = this.props.email
    let name = this.props.firstName + " " + this.props.lastName;
    let body = "Hello, " + name + "%0DI saw you on Flock, and we have some common interests!%0D%0D" 

    document.location = "mailto:"+email+"?subject=Hello from your Flockmate!&body=" + body;
  }

  render() {
    return(
      <div className="card">
        <div className="card-image">
          <img src={this.props.bg} alt="background-1" className="cardImg" />
        </div>
        <div className="card-content">
          <p>{this.props.firstName + " " + this.props.lastName}</p>
          <p>{this.props.email}</p>
          <ul>
            {this.props.reading? <li>Reading</li> : null}
            {this.props.movies? <li>Movies</li> : null}
            {this.props.sports? <li>Sports</li> : null}
            {this.props.music? <li>Music</li> : null}
            {this.props.gaming? <li>Gaming</li> : null}
          </ul>
        </div>
        <div className="card-action">
          <button onClick={this.sendEmail}className="waves-effect waves-light btn-small">Email</button>
        </div>
      </div>
    )
  }
}

export default Card;