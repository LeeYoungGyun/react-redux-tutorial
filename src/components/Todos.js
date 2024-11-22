const TodoItem = ({ todo, onToggle, onRemove }) => {
   return (
      <div>
         <input type="checkbox" />
         <span>예제테스트</span>
         <button>삭제</button>
      </div>
   );
};

const Todos = (
   input, // 인풋에 입력되는 텍스트
   todos, // 할 일 목록이 들어 있는 객체
   onChangeInput, // 인풋에 텍스트를 입력하는 이벤트 핸들러
   onInsert, // 새로운 todo를 등록하는 이벤트 핸들러
   onToggle, // todo를 체크하는 이벤트 핸들러
   onRemove // todo를 삭제하는 이벤트 핸들러
) => {
   const onSubmit = (e) => {
      e.preventDefault();
   };
   return (
      <div>
         <form onSubmit={onSubmit}>
            <input />
            <button type="submit">등록</button>
         </form>
         <div>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
         </div>
      </div>
   );
};

export default Todos;