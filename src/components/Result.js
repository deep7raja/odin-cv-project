import react from 'react';
import './styles/Result.css'


class Result extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        let rows = [];
        for(let value in this.props.state.normal){
            rows.push(
                <div className='result-label'>
                    {this.props.state.label[value]} : 
                </div>
            )
            rows.push(
                <div>
                    {this.props.state.normal[value]}
                </div>
            )
        }
        return (
            <div className='result-container'>
                {rows}
                <div className='result-buttons'>
                    <button onClick={this.props.onEditClicked}>Edit Details</button>
                    <button>Submit Form</button>
                </div>
            </div>
        );
    }
}

export default Result;