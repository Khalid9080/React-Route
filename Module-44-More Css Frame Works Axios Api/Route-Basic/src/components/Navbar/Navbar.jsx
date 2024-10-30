import Link from "../Links/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);// initial state false
  const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Contact', path: '/contact' },
    { id: 5, name: 'Profile', path: '/profile' }
  ];

  return (
    <nav className=" bg-slate-700 text-white">
      {/* !open - toggle korbe, click korle open, then click korle close hobe */}
        <div onClick={() => setOpen(!open)} className="text-2xl mr-20 md:hidden">
          {
            open === true ? <IoMdClose /> : < HiOutlineMenuAlt1 />
          }

        </div>

        {/* <ul className={`md:flex absolute ${open ? '' : 'hidden'}`}> */}
        <ul className={`md:flex duration-700 absolute md:static ${open ? 'top-16' : '-top-96'}`}>
          {

            routes.map(route =>
              <Link key={route.id} route={route}></Link>
            )
          }
       
      </ul>
    </nav>
  );
};

Link

export default Navbar;
