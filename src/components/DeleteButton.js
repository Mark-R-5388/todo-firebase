const DeleteButton = ({ id, todo, todoList, setTodoList }) => {
  const deleteItem = (todo) => {
    const filteredList = todoList.filter((todoItem) => {
      return todoItem.id !== todo.id;
    });
    setTodoList(filteredList);
  };

  return (
    <button
      className="delete-button waves-effect waves-light btn-small deep-orange lighten-2"
      onClick={() => deleteItem(todo)}
      id={id}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
