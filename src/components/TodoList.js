const TodoList = ({ todoList }) => {
  console.log(todoList);
  return (
    <main className="todo-list-main-container">
      {todoList.map((todo) => (
        <p key={todo.todo}>
          {todo.todo} {todo.date}
        </p>
      ))}
    </main>
  );
};

export default TodoList;
