import react from 'react';
import Form from './Form'


class App extends react.Component{
    constructor(props){
        super(props);

        this.state = {
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
    }

    render(){
        return(
            <Form state={this.state}/>
        );
    }

   
}

export default App;