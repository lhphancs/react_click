import React from 'react';

const AUTHORS = 'Lee Phan';

const About = function(){
    return(
        <div class="jumbotron">
            <h1 class="display-4">About</h1>
            <p class="lead">Created using React</p>
            <hr class="my-4" />
            <p>Created by: {AUTHORS}</p>
        </div>
    )
}

export default About;