import styles from './Button.module.scss';

interface ButtonProps {
  handleSubmit?: () => void;
}

const Button = ({ handleSubmit }: ButtonProps) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Button;
