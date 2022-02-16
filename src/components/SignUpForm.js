const SignUpForm = ({
	email,
	setEmail,
	password,
	setPassword,
	handleSignUp,
}) => {
	return (
		<form className='grey lighten-5' onSubmit={handleSignUp}>
			<label>
				email
				<input
					type='email'
					name='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</label>
			<label>
				Password
				<input
					type='password'
					name='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<input type='submit' value='Submit' />
		</form>
	);
};

export default SignUpForm;
