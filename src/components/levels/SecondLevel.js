import React from 'react';
import getRndInteger from '../../utils';

class SecondLevel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            leftMargin: 0
        }
        this.boxContainerRef = React.createRef();
        this.maxWidthPosition = 0 - 200;
    }

    setRandomLeftMargin(min, max){
        this.setState({
            leftMargin: getRndInteger(min, max)
        });
    }

    componentDidMount(){
        this.setRandomLeftMargin(0, 0);
    }

    componentDidUpdate(){
        setTimeout( () =>{
            // Needed in case it tries to set value after page dissapears
            try{
                this.setRandomLeftMargin(0, this.boxContainerRef.current.clientWidth - 200);
            }
            catch(err){
                ;
            }
        }, 200);
    }

    render(){
        return (
            <div ref={this.boxContainerRef}>
                <button className="btn btn-outline-primary btn-to-click m-2" onClick={this.props.onLevelPassed}
                style={{ position: 'relative', left: this.state.leftMargin }}>
                
                </button>
            </div>
        );
    }
}
export default SecondLevel;