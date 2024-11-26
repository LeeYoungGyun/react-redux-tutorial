const TodoItem = ({ todo, onToggle, onRemove }) => {
   return (
      <div>
         <input
            type="checkbox"
            onClick={() => onToggle(todo.id)}
            checked={todo.done}
            readOnly={true}
         />
         <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.text}
         </span>
         <button onClick={() => onRemove(todo.id)}>삭제</button>
      </div>
   );
};

const Todos = ({
   input, // 인풋에 입력되는 텍스트
   todos, // 할 일 목록이 들어 있는 객체
   onChangeInput, // 인풋에 텍스트를 입력하는 이벤트 핸들러
   onInsert, // 새로운 todo를 등록하는 이벤트 핸들러
   onToggle, // todo를 체크하는 이벤트 핸들러
   onRemove // todo를 삭제하는 이벤트 핸들러
}) => {
   const onSubmit = (e) => {
      e.preventDefault();
      onInsert(input);
      onChangeInput(''); // 등록 후 인풋 초기화
   };
   const onChange = e => onChangeInput(e.target.value);
   return (
      <div>
         <form onSubmit={onSubmit}>
            <input value={input} onChange={onChange} />
            <button type="submit">등록</button>
         </form>
         <div>
            {todos.map(todo => (
               <TodoItem
                  todo={todo}
                  key={todo.id}
                  onToggle={onToggle}
                  onRemove={onRemove}
               />
            ))}
         </div>
      </div>
   );
};

export default Todos;