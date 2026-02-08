import { useClerk, useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router";
import { navItems } from "../assets/assets";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${sidebar ? "translate-x-0" : "max-sm:-translate-x-full"} transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        {/* user image and name */}
        <img
          src={user?.imageUrl}
          alt="user image"
          className="w-13 rounded-full mx-auto"
        />
        <h1 className="mt-1 text-center">{user?.fullName}</h1>

        {/* nav items */}
        <div className="">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 flex items-center gap-3 rounded ${isActive ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white" : ""}`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : ""}`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
