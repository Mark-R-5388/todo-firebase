const Form = ({ handleSubmit }) => {
  return (
    <form className="grey lighten-5" onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" name="todo" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
