import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import {Button, InputField, PageTotal, FormTotal} from '../../styled/CommonStyled'

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    
     <PageTotal >
      <h1>Login's page</h1>

      <FormTotal onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit">Login</Button>
      </FormTotal>
    </PageTotal >
  );
}