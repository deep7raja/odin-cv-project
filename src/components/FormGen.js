import { useState } from "react";
import Field from "./Field"

const FormGen = (props)=>{
    const [input, setInput] = useState(props.state.values);
    const label = props.state.label;

    const onInputChangeHandler =(e)=>{
    let temp = {...input};
    temp[e.target.name] = e.target.value;
    setInput(temp);
    props.setInput(temp);
    }

    return(
        <fieldset>
        <legend>General Information</legend>  
        <Field type='text' labelName={label.name} inputName='name'
          inputChangeHandler={onInputChangeHandler} 
          inputValue={input.name}
        />
        <Field type='text' labelName={label.email} inputName='email'
          inputChangeHandler={onInputChangeHandler}
          inputValue={input.email}
        />
        <Field type='number' labelName={label.phno} inputName='phno'
          inputChangeHandler={onInputChangeHandler}
          inputValue={input.phno}
        />
      </fieldset>
    )
}

export default FormGen;