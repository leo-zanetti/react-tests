import { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  id?: string;
  title?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const Input = ({ id, title, value, setValue }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue && setValue(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <label>{title}</label>
      <input
        data-testid={id}
        type={id === 'username' ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
