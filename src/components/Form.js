import { useState } from 'react';
import './styles/Form.css';
import FormGen from './FormGen';

const Form = (props)=>{

  const [inputGen, setInputGen] = useState(props.state.gen.values);

  const onSubmit =(e)=>{
    e.preventDefault();
    let temp = {...props.state};
    temp.gen.values = inputGen;
    temp.onForm = false;
    props.updateState(temp);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormGen state={props.state.gen} setInput={setInputGen}></FormGen>
 
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
