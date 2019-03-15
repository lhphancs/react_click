import React from 'react';
import store from '../store/store'
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return state.health;
};

function HealthCounter(){
    return(
        <div>
            <p className="border border-secondary p-3 mt-5">Health: {store.getState().health}</p>
        </div>
    )
}

export default connect(mapStateToProps)(HealthCounter);