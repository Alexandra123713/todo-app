import styles from './Button.module.css';

export const Button = ({ children, disabled = false }) => {
	return (
		<button
			className={styles.button}
			disabled={disabled}>
			{children}
		</button>
	);
};
