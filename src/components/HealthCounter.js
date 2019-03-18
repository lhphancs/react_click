import React from 'react';
import { connect } from 'react-redux';
import store from '../store/store'

const mapStateToProps = (state) =>{
    return { health: state.health };
};

function HealthCounter(props){
    if(props.health.amt === 0){
        store.dispatch(
            {
                type: "SET_LEVEL", 
                level: -1
            }
        )
    }

    return(
        <div>
            <p className="border border-secondary p-3 mt-5">Health: {props.health.amt}</p>
        </div>
    )
}

export default connect(mapStateToProps)(HealthCounter);