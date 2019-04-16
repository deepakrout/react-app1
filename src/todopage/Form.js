import React, { Component } from 'react';
import Todo from './Todo'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form className="form">
                <input type="text" className="form__input" 
                placeholder="Add todo" onChange={() => console.log('Value here is changing')} value={this.props.todoValue}/>
                <button className="form__button" type="submit" onClick={() => console.log('trying to submit')}>╋</button>
                <Todo />
            </form>
         );
    }
}
 
export default Form;