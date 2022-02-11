import { useState } from 'react';
import Form from './Form'
import Result from './Result';

const App = (props) =>{
    const [state, setState] = useState({
        onForm: true,
        gen: {
            values: {
                name: '',
                email: '',
                phno: 91
            },
            label: {
                name: 'Name',
                email: 'Email',
                phno: 'Phone No.'
            }
        }
    })

    const updateState = (a_state)=>{
        setState(a_state);
    }

    const onEditClicked = ()=>{
        let temp = {...state};
        temp.onForm = true;
        setState(temp);
    }

    if(state.onForm){
        return <Form state={state} updateState={updateState}/>
    }
    else{
        return <Result state={state} onEditClicked={onEditClicked}/>
    }
}

export default App;