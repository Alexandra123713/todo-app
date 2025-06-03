import { useState } from 'react';
import styles from '../Todos/TodoForm.module.css';
import { Button } from '../UI/Button';

export const TodoForm = ({ addTodo }) => {
	const [text, setText] = useState('');

	const onSubmitHandler = (event) => {
		event.preventDefault();
		if (text) addTodo(text);
		setText('');
	};

	const textValue = (event) => {
		setText(event.target.value);
	};

	return (
		<form
			className={styles.form}
			onSubmit={onSubmitHandler}>
			<input
				className={styles.input}
				value={text}
				type='text'
				placeholder='Enter new todo'
				onChange={textValue}
			/>
			<Button
				type='submit'
				title='Submit'>
				Submit
			</Button>
		</form>
	);
};
