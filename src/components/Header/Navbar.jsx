import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { DarkContext } from "../Provider/DarkMode";

const Navbar = () => {
    const { user, logOut } = useContext(Authcontext);
    const {theme, toggleTheme} = useContext(DarkContext)


    // handle Dark Mode
    const hanldeDarkMode = () => {
        ("dark")
    }

    // Navigate
    const navigate = useNavigate()

    // handle Log Out
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        navigate('/')
                        Swal.fire({
                            title: "Log Out!",
                            text: "You are has been Logout.",
                            icon: "success"
                        });
                    }).catch(error => {
                        alert(error.message)
                    })
            }
        });

    }
    const navLink = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allequipments'>All Product</NavLink></li>
        {
            user?.email ? <li><NavLink to='/addProduct' >Add Product</NavLink></li> : <></>
        }
        {
            user?.email ? <li><NavLink to={`/myproduct/${user?.email}`}>My Product</NavLink></li> : <></>
        }


    </>
    return (
        <div className="navbar bg-base-100 dark:bg-gray-900">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={10} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* Mobile Menu */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2 z-10">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">GameVault</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Desktop Menu */}
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ?
                        <div className="dropdown dropdown-end flex md:flex-row flex-col-reverse items-center gap-x-3">
                            <div className="flex items-center">
                                <div>
                                    <button onClick={toggleTheme}>{theme}</button>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-link">Logout</button>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 rounded-full">
                                    <img
                                        alt={user?.displayName}
                                        src={user?.photoURL} />
                                </div>
                            </div>

                        </div>
                        :
                        <div>
                            <Link to={'/login'}>Login</Link>
                            /
                            <Link to={'/signup'}>SignUp</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;