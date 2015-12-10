import { connect } from 'react-redux';
import TodoApp from '../TodoApp';
import { addTodo , removeTodo , toggleTodo , receiveTodos , saveTodos} from '../../actions/todo-actions';

function mapStateToProps(state) {
    return {
         todos: state.todo.get('todos'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        receiveTodos: () => dispatch(receiveTodos()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);
