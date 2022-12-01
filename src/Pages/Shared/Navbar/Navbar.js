import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../contexts/AuthProvider';
import icon from '../../../assets/mobileicon-removebg-preview.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><button onClick={handleLogOut}>Sign Out</button></li>
            </>
            :
            <li><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>


    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Link to='/'><img src={icon} alt='mobile icon' /></Link>
                    </div>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">SHM</Link>
            </div>

            <div className="navbar-end ">
                <div className="navbar-center hidden lg:flex pr-8">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/blog'><PrimaryButton>Blog</PrimaryButton></Link>
            </div>
        </div>
    );
};

export default Navbar;