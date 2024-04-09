
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {

 const {user, logOut} = useContext(AuthContext)


    const links = <div className="flex gap-3">
       <li><NavLink to={'/news'}>News</NavLink></li>
       <li><NavLink to={'/destination'}>Destination</NavLink></li>
       <li><NavLink to={'/blog'}>Blog</NavLink></li>
       <li><NavLink to={'/contact'}>Contact</NavLink></li>
      <li><NavLink to={'/checkup'}>Checkup</NavLink></li>
      
    </div>
    return (
        <div className="navbar bg-base-100 mx-auto p-5 px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {
            links
        }
      </ul>
    </div>
    <NavLink to={'/'}><img className="w-16" src="/src/assets/images/logo.png" alt="" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">

    <div className="flex justify-center items-center relative border-2 border-gray-200 ">
        <div className="absolute mr-48 font-semibold"><CiSearch /></div>
        <div><input className="px-5" type="text" placeholder="   Search your destination" /></div>
    </div>
    <ul className="menu menu-horizontal px-1 font-semibold">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <div className="flex items-center gap-1">{user.email} <NavLink onClick={logOut} className="btn bg-[#F9A51A]">LogOut</NavLink></div> : <NavLink to={'/login'} className="btn bg-[#F9A51A]">Login</NavLink>
    }
    
    
  </div>
</div>
    );
};

export default Navbar;