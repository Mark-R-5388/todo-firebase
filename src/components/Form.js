const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" name="todo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
