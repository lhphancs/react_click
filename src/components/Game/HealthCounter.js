import React from 'react';
import { connect } from 'react-redux';
import store from '../../store/store'
import './HealthCounter.css';

const HIGH_HEALTH = 7;
const MEDIUM_HEALTH = 4;

const mapStateToProps = (state) =>{
    return { health: state.health };
};

function HealthCounter(props){
    if(props.health.amt === 0){
        store.dispatch( {type: "SET_GAME_STATUS_LOSS"} );
    }

    return(
        <div>
            <p id="health-counter" className={"border border-secondary p-3 mt-5 " + (
                props.health.amt >= HIGH_HEALTH ? "text-success"
                : props.health.amt >= MEDIUM_HEALTH ? "text-warning"
                : "text-danger"
                )
            }>
                Health: {props.health.amt}
            </p>
        </div>
    )
}

export default connect(mapStateToProps)(HealthCounter);