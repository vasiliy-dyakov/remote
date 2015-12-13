import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import addTodo from '../../actions/addTodo';

@connect(state => ({
    todos: state.todos
}))
export default class extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        todos: PropTypes.object.isRequired
    };

    text = '';

    onChange(event) {
        this.text = event.target.value;
    }

    addTodo() {
        bindActionCreators(addTodo, this.props.dispatch)(this.text);
    }

    render() {
        var { todos } = this.props;

        return <div className='todos'>
            {todos.ids.map(id => <div key={id}>
                <input type='checkbox'/>
                {todos.byId[id].text}
            </div>)}
            <input type='text' onChange={this.onChange.bind(this)}/>
            <button onClick={this.addTodo.bind(this)}>Добавить</button>
        </div>;
    }
}
