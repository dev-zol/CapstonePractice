import './App.css';
import './cardStyle.css';
const Card = ({ name, email, cardStyle }) => {
  return (
    // <div className="card">
    <div className={`card ${cardStyle}`}>
      <h2>{name}</h2>
      <h4>{email}</h4>

      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
          marginTop: "1rem" }}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3">
          Message </button>
    </div>
  );
};

export default Card;