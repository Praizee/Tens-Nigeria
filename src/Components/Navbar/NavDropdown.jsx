import { Dropdown } from 'flowbite-react';
import { RxHamburgerMenu } from "react-icons/rx";
import { NavbarData } from './NavbarData';


const NavDropdown = () => {
    return (
        <div>
            <Dropdown
                className="right-0 bg-white mt-2 bg-opacity-90 backdrop-blur-md w-[20rem]"
                label="" dismissOnClick={true} renderTrigger={() =>
                    <button className="btn bg-transparent border-none text-black rounded-none hover:bg-transparent" title="Menu">
                        <RxHamburgerMenu className='w-5 h-5' />
                    </button>
                }>

                {/* {NavbarData.map((item, index) => (
                    <Dropdown.Item key={index}
                        className="text-white bg-black">
                        <a href={item.bookmark}
                            className="text-base py-2 font-bold">
                            {item.title}
                        </a>
                    </Dropdown.Item>
                ))} */}

                {NavbarData.map((item, index) => (
                    <div key={index}
                        className='p-4 border border-white/30 w-full'>
                        <a
                            className="text-base py-2 text-black font-bold">
                            {item.title}
                        </a>
                    </div>
                ))}
                <div className="flex justify-between font-bold">
                    <button className="p-2 px-4">
                        Sign In
                    </button>
                    <button className="p-2 px-4">
                        Sign Up
                    </button>
                </div>

            </Dropdown>
        </div>
    )
}

export default NavDropdown