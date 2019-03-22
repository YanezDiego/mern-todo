import React, {Component} from 'React'
import axios from 'axios';

class Input extends Component{
    state = {
        action: ""
    };

    addToDo = () => {
        const task = {action: this.state.action};

        if(task.action && task.action.length > 0){
            axios.post('/api/todos', task)
            .then(res => {
                if(res.data){
                    this.props.getTodos();
                    this.setState({action: ""})
                }
            })
            .catch(err => console.log(err))
        } else {
            console.log('input required')
        }
    };

    handleCahnge = (e) => {
        this.setState({action: e.target.value})
    };

    render(){
        return(
            <div>
                <input type="text" onChange={this.handleCahnge} value={this.state.action} />
                <button onClick={this.addToDo}>Add Todo</button>
            </div>
        )
    }



}

export default Input