import react from 'react'

class Field extends react.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='form-field'>
                <label htmlFor={this.props.inputName}>{this.props.labelName} : </label>
                <input type={this.props.type}
                    id={this.props.inputName}
                    name={this.props.inputName}
                    onChange={this.props.inputChangeHandler}
                    value={this.props.inputValue}></input>
            </div>
        );
    }
}

export default Field;