const DeleteButton = ({ deleteItem }) => {
  return (
    <button
      className="delete-button waves-effect waves-light btn-small deep-orange lighten-2"
      onClick={deleteItem}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
