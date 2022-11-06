import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
// import authSelectors from '../../redux/auth/authSelectors'
// import HomeView from './HomeView';
import {Button, InputField, PageTotal, FormTotal} from '../../styled/CommonStyled'
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

export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const replace = useSelector(authSelectors.getReplace);
  // const error = useSelector(authSelectors.getError)
  // console.log(replace);
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

      <FormTotal onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Email
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
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

    //  ------ Тут я пробувала розписати тернарний оператор щоб при логауті був перехід на домашню сторінку---
    // <> 
    //   {(replace === true) ? <HomeView /> : (
    //     <div >
    //   <h1>Login's page</h1>

    //   <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
    //     <label style={styles.label}>
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <label style={styles.label}>
    //       Password
    //       <input
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <button type="submit">Login</button>
    //   </form>
    // </div >
    //   )}
    // </>
    
    
  );
}