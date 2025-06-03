import styles from './Button.module.css';

export const Button = ({ children, disabled = false, onClick }) => {
	return (
		<button
			className={styles.button}
			disabled={disabled}
			onClick={onClick}>
			{children}
		</button>
	);
};
