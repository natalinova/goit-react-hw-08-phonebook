import { lazy, Suspense } from "react";
import { Routes, Route} from "react-router-dom";
import PublicRoute from "./PublicRoute";
const HomeView = lazy(() => import('./pages/HomeView'));
const RegisterForm = lazy(() => import('./pages/RegisterForm'));
const LoginForm = lazy(() => import('./pages/LoginForm'));
const PhoneBook = lazy(() => import('./phonebook/PhoneBook'));
const PrivateRoute = lazy(() => import('./PrivateRoute'))


const UserRoutes = () => {
    return (
          < Suspense fallback={<p>...Load page</p>}>
            <Routes>
                <Route element={<PublicRoute/>}>
                    <Route path="" element={<HomeView />} />
                    {/* <Route index element={ <Navigate to=""/>} /> */}
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/login" element={<LoginForm/>} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/contacts" element={<PhoneBook/>}/>
                </Route>
                
    </Routes>
         </Suspense>
    )
}
export default UserRoutes