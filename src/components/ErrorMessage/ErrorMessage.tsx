import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className={styles.errorMessageContainer} data-testid='error-message'>
      {message}
    </div>
  );
};

export default ErrorMessage;
