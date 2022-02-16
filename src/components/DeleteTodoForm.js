const DeleteTodoForm = ({ id, setId, handleDelete }) => {
	return (
		<form className='grey lighten-5' onSubmit={handleDelete}>
			<label>
				Delete:
				<input
					type='text'
					name='id'
					value={id}
					onChange={(e) => setId(e.target.value)}
				/>
			</label>
			<input type='submit' value='Submit' />
		</form>
	);
};

export default DeleteTodoForm;
