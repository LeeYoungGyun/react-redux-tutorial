import { connect } from "react-redux";
import { chageInput, insert, toggle, remove } from "../modules/todos";
import Todos from "../components/Todos";

const TodosContainer = ({ input, todos, chageInput, insert, toggle, remove }) => {
  return (
    <Todos
      input={input}
      todos={todos}
      chageInput={chageInput}
      insert={insert}
      toggle={toggle}
      remove={remove}
    />
  );
};

export default connect(
   // 비구조화 할당을 통해 todos를
   // 분리하여 state.todos.input 대신 todos.input을 사용
   ({ todos }) => ({
      input: todos.input,
      todos: todos.todos
   }),
   {
      chageInput,
      insert,
      toggle,
      remove
   }
)(TodosContainer);