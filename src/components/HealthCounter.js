import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    return { health: state.health };
};

function HealthCounter(props){
    return(
        <div>
            <p className="border border-secondary p-3 mt-5">Health: {props.health.amt}</p>
        </div>
    )
}

export default connect(mapStateToProps)(HealthCounter);