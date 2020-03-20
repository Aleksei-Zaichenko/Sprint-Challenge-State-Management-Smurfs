import React from "react";
import { connect } from "react-redux";

const DisplaySmurfsList = props => {
    return (
      <div className="smurfsList">
        {props.error ? (
          <div className="error">{props.error}</div>
        ) : (
          props.smurfs.map(smurf => (
              <div key={smurf.id} className="smurf">
                  <h3>Name: {smurf.name}</h3>
                  <h3>Age: {smurf.age}</h3>
                  <h4>Height: {smurf.height}</h4>
              </div>
          ))
        )}
      </div>
    );
  };
  
  const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      error: state.error
    };
  };

  export default connect(
    mapStateToProps,
    {}
  )(DisplaySmurfsList);