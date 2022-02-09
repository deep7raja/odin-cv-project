import react from 'react';


class Result extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        let rows = [];
        for(let value in this.props.state.normal){
            rows.push(
                <div>
                    <div>
                    {value}
                    </div>
                    <div>
                    {this.props.state.normal[value]}
                    </div>
                </div>
            )
        }
        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Result;