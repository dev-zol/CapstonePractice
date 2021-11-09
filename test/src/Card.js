import './cardStyle.css';
import {makeStyles} from "@material-ui/core/styles";
// import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardContent';
import  Grid  from "@material-ui/core/Grid";
import {dummydata} from "./dummydata";


const Card = ({ name, email, hobbies}) => {
  // <div className="card-container">
  //       {dummydata.map((person) => {
  //         return <Card {...person} />;
  //      })}
  //     </div>

  return (
    <div className="card">
      <h3>{name}</h3>
      <h6>{email}</h6>
      <h4>{hobbies}</h4>

      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem" }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3">
          Message</button>
    </div>
  );

};



export default Card;