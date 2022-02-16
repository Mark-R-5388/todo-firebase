import DeleteButton from './DeleteButton';

const TodoList = ({ todoList, setTodoList }) => {
	console.log(todoList);
	return (
		<main className='todo-list-main-container'>
			{todoList && (
				<ul>
					{todoList.map((todo) => (
						<li key={todo.id}>
							{todo.todo} <span className='date'>{todo.date}</span>
							<DeleteButton
								todoList={todoList}
								setTodoList={setTodoList}
								todo={todo}
							/>
						</li>
					))}
				</ul>
			)}
			{todoList.length === 0 && (
				<p className='empty-list'>Add Something Todo Today</p>
			)}
		</main>
	);
};

export default TodoList;
