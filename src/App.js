import './App.css';
import Field from './components/Field';
import react from 'react';

class App extends react.Component{
  constructor(props){
    super(props);

    this.state = {
      normal: {
        name: '',
        email: ''
      },
      input: {
        name: '',
        email: ''
      }
    };

    this.onInputChangeHandler = this.onInputChangeHandler.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChangeHandler(e){
    let temp = JSON.parse(JSON.stringify(this.state));
    temp.input[e.target.name] = e.target.value;
    this.setState(temp);
  }

  onSubmit(e){
    e.preventDefault();
    let temp = JSON.parse(JSON.stringify(this.state));
    for(let value in this.state.input){
      console.log(value);
      temp.normal[value] = this.state.input[value];
      temp.input[value] = '';
    }
    this.setState(temp, ()=>console.log(this.state));
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <Field labelName="Name" inputName='name' inputChangeHandler={this.onInputChangeHandler}
            inputValue={this.state.input.name}
          />
          <Field labelName="Email" inputName='email' inputChangeHandler={this.onInputChangeHandler}
            inputValue={this.state.input.email}
          />
   
          <button type='submit'>Submit</button>
        </form>
      </div>
     );
  }
}

export default App;
