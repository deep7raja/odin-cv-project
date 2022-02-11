import Field from './Field';
import { useState } from 'react';
import './styles/Form.css';

const Form = (props)=>{

  const [input, setInput] = useState(props.state.input);

  const onInputChangeHandler =(e)=>{
    let temp = {...input};
    temp[e.target.name] = e.target.value;
    setInput(temp);
  }

  const onSubmit =(e)=>{
    e.preventDefault();
    let temp = {...props.state}
    for(let value in input){
      temp.normal[value] = input[value];
      temp.input[value] = '';
    }
    temp.onForm = false;
    setInput(temp.input);
    props.updateState(temp);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>General Information</legend>  
          <Field type='text' labelName={props.state.label.name} inputName='name'
            inputChangeHandler={onInputChangeHandler} 
            inputValue={input.name}
          />
          <Field type='text' labelName={props.state.label.email} inputName='email'
            inputChangeHandler={onInputChangeHandler}
            inputValue={input.email}
          />
          <Field type='number' labelName={props.state.label.phno} inputName='phno'
            inputChangeHandler={onInputChangeHandler}
            inputValue={input.phno}
          />
        </fieldset>
 
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
