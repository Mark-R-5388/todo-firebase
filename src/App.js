import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

import {
	getFirestore,
	collection,
	onSnapshot,
	addDoc,
	deleteDoc,
	doc,
	setDoc,
	getDocs,
} from 'firebase/firestore';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';

import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import DeleteTodoForm from './components/DeleteTodoForm.js';
import SignUpForm from './components/SignUpForm.js';

const firebaseConfig = {
	apiKey: 'AIzaSyBiaIet0K8_l9s_I7ahcUSxsXm05gILhTY',
	authDomain: 'todo-app-d57b7.firebaseapp.com',
	projectId: 'todo-app-d57b7',
	storageBucket: 'todo-app-d57b7.appspot.com',
	messagingSenderId: '716392771518',
	appId: '1:716392771518:web:0e98f00cc566c1322753ef',
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

const collectionRef = collection(db, 'todos');

const handleDelete = (e) => {
	e.preventDefault();
	const docRef = doc(db, 'todos', e.target.id.value);
	deleteDoc(docRef).then(() => (e.target.id.value = ''));
};

const handleSignUp = (e) => {
	e.preventDefault();
	const email = e.target.email.value;
	const password = e.target.password.value;
	createUserWithEmailAndPassword(auth, email, password)
		.then((cred) => {
			console.log('user created', cred.user);
			e.target.email.value = '';
			e.target.password.value = '';
		})
		.catch((err) => console.log(err.message));
};

const App = () => {
	const [todo, setTodo] = useState('');
	const [todoList, setTodoList] = useState([]);
	const [id, setId] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');
	const [emailLogin, setEmailLogin] = useState('');

	console.log(todoList);

	useEffect(() => {
		getTodos();
	}, []);

	const getTodos = async () => {
		const querySnapshot = await getDocs(collection(db, 'todos'));
		querySnapshot.forEach((doc) => {
			console.log(doc.id, '=>', doc.data().todo);
			return setTodoList([...todoList, { id: doc.id, todo: doc.data().todo }]);
		});
	};

	onSnapshot(collectionRef, (snapshot) => {
		snapshot.docs.forEach((doc) => {
			return [...todoList, { ...doc.data(), id: doc.id }];
		});
		// let todos = [];
		// snapshot.docs.forEach((doc) => {
		// 	todos.push({ ...doc.data(), id: doc.id, completed: false });
		// });
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		addDoc(collectionRef, {
			todo: e.target.todo.value,
		}).then(() => {
			e.target.todo.value = '';
		});
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				console.log('user logged in', cred.user);
			})
			.catch((err) => console.log(err.message));
	};

	const handleLogOut = () => {
		signOut(auth)
			.then(() => {
				console.log('the user signed out');
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className='app'>
			<Header
				emailLogin={emailLogin}
				setEmailLogin={setEmailLogin}
				passwordLogin={passwordLogin}
				setPasswordLogin={setPasswordLogin}
				handleLogin={handleLogin}
				handleLogOut={handleLogOut}
			/>
			<div className='container form-list-container'>
				<div className='forms-container'>
					<AddTodoForm
						todo={todo}
						setTodo={setTodo}
						todoList={todoList}
						handleSubmit={handleSubmit}
					/>
					<DeleteTodoForm id={id} setId={setId} handleDelete={handleDelete} />
					<SignUpForm
						password={password}
						setPassword={setPassword}
						email={email}
						setEmail={setEmail}
						handleSignUp={handleSignUp}
					/>
				</div>

				<TodoList setTodoList={setTodoList} todoList={todoList} />
			</div>
		</div>
	);
};

export default App;
