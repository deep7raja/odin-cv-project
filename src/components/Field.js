const Field = (props)=> {
    return  (
        <div className='form-field'>
            <label htmlFor={props.inputName}>{props.labelName} : </label>
            <input type={props.type}
                id={props.inputName}
                name={props.inputName}
                onChange={props.inputChangeHandler}
                value={props.inputValue}></input>
        </div>
    );
}

export default Field;