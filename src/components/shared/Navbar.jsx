import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateNavItems = () => {
    const items = [
      { to: "/", label: "Home" },
      { to: "/brands", label: "Brands" },
      { to: "/about-dev", label: "About Dev" },
    ];

    if (user) {
      items.push({ to: "/my-profile", label: "My Profile" },);
    }

    return items.map((item) => (
      <li key={item.to} className="text-base font-medium">
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? "underline" : undefined)}
        >
          {item.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <div
      className={`sticky top-0 transition-all duration-300 z-50 ${
        isScrolled ? "backdrop-blur-md bg-opacity-80" : ""
      }`}
    >
      <div className="navbar max-w-[1440px] mx-auto px-2">
        <div className="navbar-start">
          <NavLink className="text-xl p-2 pl-0" to="/">
            <span className="text-2xl font-bold">Discount PRO</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu-horizontal gap-8">{generateNavItems()}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="h-8 w-8 rounded-full mr-2 hidden md:inline"
              />

              <button
                className="btn rounded-none bg-[#1B263B] text-white border-none"
                onClick={signOutUser}
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="hidden md:flex space-x-4">
              <NavLink
                className="btn rounded-none bg-[#E0E1DD] text-black border-none"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
          <button
            className="md:hidden text-2xl px-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4">
            {generateNavItems()}
            {user ? (
              <>
                <span className="mr-4">{user.displayName}</span>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span className="mr-4">{user?.email}</span>
                <button
                  className="btn rounded-none bg-[#1B263B] text-white border-none"
                  onClick={signOutUser}
                >
                  Log Out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-4">
                <NavLink
                  className="btn rounded-none text-black border-none"
                  style={{ backgroundColor: "#778DA9" }}
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn rounded-none bg-[#1B263B] text-white hover:bg-[#060f1b] border-none"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
