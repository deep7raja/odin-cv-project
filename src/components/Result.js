import './styles/Result.css'

const Result = (props)=>{
    let rowsGen = [];
    for(let value in props.state.gen.values){
        rowsGen.push(
            <div className='result-label'>
                {props.state.gen.label[value]} : 
            </div>
        ,
            <div>
                {props.state.gen.values[value]}
            </div>
        );
    }

    let rowEdu = [];
    props.state.edu.values.forEach((ee) => {
        let row = [];
        for(let value in ee){
            row.push(
                <div className='result-label'>
                    {props.state.edu.label[value]} : 
                </div>
            ,
                <div>
                    {ee[value]}
                </div>
            )
        }
        rowEdu.push(
            <fieldset className='result-fieldset'>
                <legend>Educational Experience</legend>
                {row}
            </fieldset>
                
            
        )
    });


    return (
        <div className='result-container'>
            <fieldset className='result-fieldset'>
                <legend>General Information</legend>
                {rowsGen}
            </fieldset>
            {rowEdu}
            <div className='result-buttons'>
                <button onClick={props.onEditClicked}>Edit Details</button>
                <button>Submit Form</button>
            </div>
        </div>
    );
}

export default Result;