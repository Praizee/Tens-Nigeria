import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NavDropdown from "./NavDropdown";


const Navbar = () => {

    return (
        <div className="">
            <div className="navbar bg-gray-100 border-b z-50 fixed top-0 text-black py-4 laptop:px-12 tablet:px-8 px-4">
                {/* border-b border-[#D1D5DB]/40 */}
                <div className="navbar-start">
                    <a className="laptop:text-4xl text-2xl font-black">TEN NIGERIA</a>
                </div>
                <div className="navbar-end hidden laptop:flex">
                    {NavbarData.map((item, index) => (
                        <ul key={index}
                            className="px-3">
                            <li>
                                <a
                                    className="text-base cursor-pointer">
                                    {item.title}
                                </a>
                            </li>
                        </ul>
                    ))}

                    <div className="space-x-4 ml-10 hidden laptop:block">
                        <button className="px-6 py-2 bg-transparent border rounded-lg border-[#FDE047] bg-transparent hover:bg-[#FDE047]">
                            Sign In
                        </button>
                        <button className="px-6 py-2 bg-[#FDE047] border rounded-lg hover:bg-transparent hover:border-[#FDE047] focus:border-none">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="navbar-end laptop:hidden">
                    <NavDropdown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
