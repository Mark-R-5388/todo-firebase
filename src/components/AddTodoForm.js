const AddTodoForm = ({ todo, setTodo, handleSubmit }) => {
	return (
		<form className='grey lighten-5' onSubmit={handleSubmit}>
			<label>
				Todo:
				<input
					type='text'
					name='todo'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
			</label>
			<input type='submit' value='Submit' />
		</form>
	);
};

export default AddTodoForm;
