import Field from './Field';
import react from 'react';
import './styles/Form.css';

class Form extends react.Component{
  constructor(props){
    super(props);

    this.state = this.props.state;

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChangeHandler(e){
    let temp = JSON.parse(JSON.stringify(this.state));
    temp.input[e.target.name] = e.target.value;
    this.setState(temp);
    // this.props.updateState(temp);
  }

  onSubmit(e){
    e.preventDefault();
    let temp = JSON.parse(JSON.stringify(this.state));
    for(let value in this.state.input){
      console.log(value);
      temp.normal[value] = this.state.input[value];
      temp.input[value] = '';
    }
    temp.onForm = false;
    this.setState(temp, ()=>console.log(this.state));
    this.props.updateState(temp);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <legend>General Information</legend>  
            <Field type='text' labelName={this.state.label.name} inputName='name'
              inputChangeHandler={this.onInputChangeHandler} 
              inputValue={this.state.input.name}
            />
            <Field type='text' labelName={this.state.label.email} inputName='email'
              inputChangeHandler={this.onInputChangeHandler}
              inputValue={this.state.input.email}
            />
            <Field type='number' labelName={this.state.label.phno} inputName='phno'
              inputChangeHandler={this.onInputChangeHandler}
              inputValue={this.state.input.phno}
            />
          </fieldset>
   
          <button type='submit'>Submit</button>
        </form>
      </div>
     );
  }
}

export default Form;
