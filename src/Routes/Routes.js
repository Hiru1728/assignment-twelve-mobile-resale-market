import Blog from "../Pages/Blog/Blog";
import SubCategoryProducts from "../Pages/Home/SubCategoryProduct/SubCategoryProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Pages/Home/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <SubCategoryProducts></SubCategoryProducts>,
                loader: ({ params }) => fetch(` https://assignment-twelve-mobile-resale-market-server.vercel.app/category/${params.id}`)
            }
        ]
    }
])

export default router;