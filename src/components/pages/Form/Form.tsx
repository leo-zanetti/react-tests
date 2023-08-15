import { useState } from 'react';
import styles from './Form.module.scss';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';

const Form = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    setError(false);
    setMessage('');
    if (username && password) {
      window.alert(`Username: ${username} Password: ${password}`);
    } else {
      setError(true);
      setMessage('Fields cannot be blank.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1>React Testing</h1>
      <Input
        id='username'
        title='Username'
        value={username}
        setValue={setUsername}
      />
      <Input
        id='password'
        title='Password'
        value={password}
        setValue={setPassword}
      />
      {error && <ErrorMessage message={message} />}
      <Button handleSubmit={handleSubmit} />
    </div>
  );
};

export default Form;
