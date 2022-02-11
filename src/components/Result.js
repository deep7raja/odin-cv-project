import './styles/Result.css'

const Result = (props)=>{
    let rows = [];
    for(let value in props.state.gen.values){
        rows.push(
            <div className='result-label'>
                {props.state.gen.label[value]} : 
            </div>
        ,
            <div>
                {props.state.gen.values[value]}
            </div>
        );
    }
    return (
        <div className='result-container'>
            {rows}
            <div className='result-buttons'>
                <button onClick={props.onEditClicked}>Edit Details</button>
                <button>Submit Form</button>
            </div>
        </div>
    );
}

export default Result;