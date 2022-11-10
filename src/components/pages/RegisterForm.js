import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations  from '../../redux/auth/authOperations';
import { Button, InputField, PageTotal, FormTotal, Label } from '../../styled/CommonStyled'

export default function RegisterForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
       <PageTotal>
      <h1>Registration's page</h1>

      <FormTotal onSubmit={handleSubmit} autoComplete="off">
        <Label >
         Name 
          <InputField type="text" name="name" value={name} onChange={handleChange} />
        </Label>

        <Label >
          Mail
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label >
          Password
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Register</Button>
      </FormTotal>
      </PageTotal>
    </>
   
  );
}