const Form = ({
  handleSubmit,
  handleDelete,
  handleSignUp,
  handleLogin,
  password,
  setPassword,
  passwordLogin,
  setPasswordLogin,
  email,
  setEmail,
  emailLogin,
  setEmailLogin,
  todo,
  setTodo,
  id,
  setId,
  handleLogOut,
}) => {
  return (
    <>
      <form className="grey lighten-5" onSubmit={handleSubmit}>
        <label>
          Todo:
          <input
            type="text"
            name="todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form className="grey lighten-5" onSubmit={handleDelete}>
        <label>
          Delete:
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form className="grey lighten-5" onSubmit={handleSignUp}>
        <label>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <form className="grey lighten-5" onSubmit={handleLogin}>
        <label>
          login email
          <input
            type="email"
            name="email"
            value={emailLogin}
            onChange={(e) => setEmailLogin(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={passwordLogin}
            onChange={(e) => setPasswordLogin(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <button onClick={handleLogOut}>Logout</button>
    </>
  );
};

export default Form;
