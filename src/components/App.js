import react from 'react';
import Form from './Form'
import Result from './Result';

class App extends react.Component{
    constructor(props){
        super(props);

        this.state = {
            onForm: true,
            normal: {
              name: '',
              email: '',
              phno: 91
            },
            input: {
              name: '',
              email: '',
              phno: 91
            },
            label:{
                name: 'Name',
                email: 'Email',
                phno: 'Phone No.'
            }
        };

        this.updateState = this.updateState.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
    }

    updateState(a_state){
        this.setState(a_state);
    }

    onEditClicked(){
        let temp = JSON.parse(JSON.stringify(this.state));
        for(let value in this.state.input){
          temp.normal[value] = this.state.input[value];
          temp.input[value] = this.state.normal[value];
        }
        temp.onForm = true;
        this.setState(temp);
    }

    render(){
        if(this.state.onForm){
            return <Form state={this.state} updateState={this.updateState}/>
        }
        else{
            return <Result state={this.state} onEditClicked={this.onEditClicked}/>
        }
    }

   
}

export default App;