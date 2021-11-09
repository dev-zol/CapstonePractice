import {dummydata} from "./dummydata";

const CardData = () => {

};

	return(

 <div className="card-container">
        {dummydata.map((person) => {
          return <Card {...person} />;
       })}
  </div>
  );

 }

 export default CardData;