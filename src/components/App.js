import react from 'react';
import Form from './Form'


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
            }
        };

        this.updateState = this.updateState.bind(this);
    }

    updateState(a_state){
        this.setState(a_state);
    }

    render(){
        if(this.state.onForm){
            return <Form state={this.state} updateState={this.updateState}/>
        }
        else{
            return <div>Hello there</div>
        }
    }

   
}

export default App;