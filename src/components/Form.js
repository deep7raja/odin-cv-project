import { useState } from 'react';
import './styles/Form.css';
import FormGen from './FormGen';
import FormEdu from './FormEdu';

const Form = (props)=>{

  const [inputGen, setInputGen] = useState(props.state.gen.values);
  const [inputEdu, setInputEdu] = useState(props.state.edu.values);  //IDK but this is changing from array to object
  const onSubmit =(e)=>{
    e.preventDefault();
    let temp = {...props.state};
    temp.gen.values = inputGen;
    temp.edu.values = inputEdu;
    temp.onForm = false;
    props.updateState(temp);
  }

  const updateInputEdu = (value, index)=>{
    let temp = JSON.parse(JSON.stringify(inputEdu))
    temp[index] = value;
    setInputEdu(temp);
  }

  const addEducation = () =>{
    console.log('Add Education called')
    let temp = JSON.parse(JSON.stringify(inputEdu));
    temp.push({
      name: 'aa',
      title: 'bb',
      date: ''
    });
    console.log(temp);
    setInputEdu(temp);
  }


  let eduRows = [];
  inputEdu.forEach((value, index)=>{
    eduRows.push( 
      <FormEdu 
        values={value} 
        labels={props.state.edu.label} 
        index={index}
        updateInput={updateInputEdu}
      ></FormEdu>
    )
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormGen state={props.state.gen} setInput={setInputGen}></FormGen>
        {eduRows}
        <button type='button' onClick={addEducation}>Add Education</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Form;
