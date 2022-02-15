import { useState } from "react";
import Field from "./Field"

const FormEdu = (props)=>{
    const [input, setInput] = useState(props.values);
    const label = props.labels;

    const onInputChangeHandler =(e)=>{
        let temp = {...input};
        temp[e.target.name] = e.target.value;
        setInput(temp);
        props.updateInput(temp, props.index);
    }

    return(
        <fieldset>
        <legend>Educational Experience</legend>  
        <Field type='text' labelName={label.name} inputName='name'
          inputChangeHandler={onInputChangeHandler} 
          inputValue={input.name}
        />
        <Field type='text' labelName={label.title} inputName='title'
          inputChangeHandler={onInputChangeHandler}
          inputValue={input.title}
        />
        <Field type='date' labelName={label.date} inputName='date'
          inputChangeHandler={onInputChangeHandler}
          inputValue={input.date}
        />
      </fieldset>
    )
}

export default FormEdu;