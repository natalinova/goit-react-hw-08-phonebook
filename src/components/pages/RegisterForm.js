import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations  from '../../redux/auth/authOperations';
import { Button, InputField, PageTotal, FormTotal } from '../../styled/CommonStyled'

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

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

      <FormTotal onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
         Name 
          <InputField type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Mail
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          password
          <InputField
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <Button type="submit">Register</Button>
      </FormTotal>
      </PageTotal>
    </>
   
  );
}