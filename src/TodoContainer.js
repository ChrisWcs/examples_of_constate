import createContainer from 'constate';
import useTodos from './useTodos';

const TodoContainer = createContainer(useTodos);
export default TodoContainer;