const Header = ({
	handleLogin,
	emailLogin,
	setEmailLogin,
	passwordLogin,
	setPasswordLogin,
	handleLogOut,
}) => {
	return (
		<header className='deep-orange z-depth-2'>
			<div className='container valign-wrapper'>
				<h2 className='logo'>Logo</h2>
				<form className='grey lighten-5' onSubmit={handleLogin}>
					<label>
						login email
						<input
							type='email'
							name='email'
							value={emailLogin}
							onChange={(e) => setEmailLogin(e.target.value)}
						/>
					</label>
					<label>
						Password
						<input
							type='password'
							name='password'
							value={passwordLogin}
							onChange={(e) => setPasswordLogin(e.target.value)}
						/>
					</label>
					<input type='submit' value='Submit' />
				</form>

				<button onClick={handleLogOut}>Logout</button>
			</div>
		</header>
	);
};

export default Header;
