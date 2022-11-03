import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';
import HomeView from './auth/HomeView';
import PhoneBook from './PhoneBook'

const UserRoutes = () => {
    return (
          < Suspense fallback={<p>...Load page</p>}>
        <Routes>
      
       
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        {/* <Route path="/contacts" component={PhoneBook} /> */}


    </Routes>
         </Suspense>
    )
}
export default UserRoutes