import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from "../pages/Home";
import SearchPage from '../pages/SearchPage';
import Register from '../pages/Register';
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword';
import OtpVerification from '../pages/otpVerification';
import ResetPassword from '../pages/ResetPassword';
import UserAccountMobile from '../pages/UserAccountMobile';
import Dashboard from '../layouts/Dashboard'
import Profile from '../pages/Profile'
import Myorders from '../pages/Myorders';
import Address from '../pages/Address'
import Category from '../pages/Category';
import SubCategory from '../pages/SubCategory';
import UploadProduct from '../pages/UploadProduct';
import ProductAdmin from '../pages/ProductAdmin';
import AdminPermision from "../layouts/AdminPermision";
import ProductListPage from "../pages/ProductListPage";
import ProductDisplayPage from '../pages/ProductDisplayPage';
import CartMobile from "../pages/CartMobile";
import CheckoutPage from '../pages/CheckoutPage';
import Success from "../pages/Success";
import Cancel from "../pages/Cancel";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "search",
                element: <SearchPage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPassword/>
            },
            {
                path: "verification-otp",
                element: <OtpVerification/>
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
            {
                path: "user",
                element: <UserAccountMobile/>
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: "profile",
                        element: <Profile/>
                    },
                    {
                        path: "myorders",
                        element: <Myorders/>
                    },
                    {
                        path: "address",
                        element: <Address/>
                    },
                    {
                        path: "product",
                        element: <AdminPermision><ProductAdmin/></AdminPermision>
                    },
                    {
                        path: "sub-category",
                        element: <AdminPermision><SubCategory /></AdminPermision>
                    },
                    {
                        path: "category",
                        element: <AdminPermision><Category /></AdminPermision>
                    },
                    {
                        path: "upload-product",
                        element: <AdminPermision><UploadProduct /></AdminPermision>
                    }
                ]
                
            },
            {
                path: ":category",
                children: [
                    {
                        path: ":subCategory",
                        element: <ProductListPage/>
                    }
                ]
            },
            {
                path: "product/:product",
                element: <ProductDisplayPage />
            },
            {
                path: 'cart',
                element: <CartMobile />
            },
            {
                path: "checkout",
                element: <CheckoutPage/>
            },
            {
                path: "success",
                element: <Success />
            },
            {
                path: 'cancel',
                element: <Cancel />
            }

        ]
    }
])

export default router