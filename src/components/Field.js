import react from 'react'

class Field extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <label htmlFor='idInput'>{this.props.labelName} : </label>
                <input type='text'
                    id='idInput'
                    name={this.props.inputName}
                    onChange={this.props.inputChangeHandler}
                    value={this.props.inputValue}></input>
            </div>
        );
    }
}

export default Field;