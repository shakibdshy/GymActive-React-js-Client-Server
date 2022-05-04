/* This example requires Tailwind CSS v2.0+ */
import { Fragment, React } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../logo.png";
import { Link, NavLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
    toast.info("Sign out successfully");
    console.log(signOut(auth));
  };

  const userNavigation = [
    { name: "Manage Items", href: "#" },
    { name: "Add Item", href: "#" },
    { name: "My items", href: "#" },
    { name: "Logout", onClick: handelSignOut },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className='min-h-full'>
        <Disclosure as='nav' className='shadow-md bg-white'>
          {({ open }) => (
            <>
              <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-28'>
                  <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                      <img className='h-8 w-8' src={logo} alt='logo' />
                    </div>
                    <div className='hidden md:block'>
                      <div className='ml-10 flex items-baseline space-x-4'>
                        <NavLink
                          to='/'
                          className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300'>
                          Home
                        </NavLink>
                        {user && (
                          <NavLink
                            to='/inventory'
                            className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300'>
                            Inventory
                          </NavLink>
                        )}
                        <NavLink
                          to='/testimonial'
                          className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300'>
                          Testimonial
                        </NavLink>
                        <NavLink
                          to='/blog'
                          className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300'>
                          Blog
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div className='hidden md:block'>
                    <div className='ml-4 flex items-center md:ml-6'>
                      {/* Profile dropdown */}
                      <Menu as='div' className='ml-3 relative'>
                        <div>
                          {user ? (
                            <Menu.Button className='max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                              <span className='sr-only'>Open user menu</span>
                              <img
                                className='h-8 w-8 rounded-full'
                                src={user?.photoURL}
                                alt=''
                              />
                            </Menu.Button>
                          ) : (
                            <Link to='/signin' className='button button-red'>
                              Sign In
                            </Link>
                          )}
                        </div>
                        {user && (
                          <Transition
                            as={Fragment}
                            enter='transition ease-out duration-100'
                            enterFrom='transform opacity-0 scale-95'
                            enterTo='transform opacity-100 scale-100'
                            leave='transition ease-in duration-75'
                            leaveFrom='transform opacity-100 scale-100'
                            leaveTo='transform opacity-0 scale-95'>
                            <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                              <Link
                                to='/manage'
                                className='block px-4 py-2 text-sm text-gray-700'>
                                Manage Items
                              </Link>
                              <Link
                                to='/add'
                                className='block px-4 py-2 text-sm text-gray-700'>
                                Add Item
                              </Link>
                              <Link
                                to='/myitems'
                                className='block px-4 py-2 text-sm text-gray-700'>
                                My items
                              </Link>
                              <Link
                                to='/'
                                onClick={handelSignOut}
                                className='block px-4 py-2 text-sm text-gray-700'>
                                Logout
                              </Link>
                            </Menu.Items>
                          </Transition>
                        )}
                      </Menu>
                    </div>
                  </div>
                  <div className='-mr-2 flex md:hidden'>
                    {/* Mobile menu button */}
                    <Disclosure.Button className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      <span className='sr-only'>Open main menu</span>
                      {open ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                      ) : (
                        <MenuIcon
                          className='block h-6 w-6'
                          aria-hidden='true'
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className='md:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                  <Disclosure.Button
                    as='a'
                    href='/'
                    className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300 block'>
                    Home
                  </Disclosure.Button>
                  {user && (
                    <Disclosure.Button
                      as='a'
                      href='/inventory'
                      className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300 block'>
                      Inventory
                    </Disclosure.Button>
                  )}
                  <Disclosure.Button
                    as='a'
                    href='/testimonial'
                    className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300 block'>
                    Testimonial
                  </Disclosure.Button>
                  <Disclosure.Button
                    as='a'
                    href='/blog'
                    className='px-3 py-2 rounded-md text-lg font-bold hover:bg-red-500 hover:text-white transition-all ease-in duration-300 block'>
                    Blog
                  </Disclosure.Button>
                </div>
                <div className='pt-4 pb-3 border-t border-gray-700'>
                  {user ? (
                    <>
                      <div className='flex items-center px-5'>
                        <div className='flex-shrink-0'>
                          <img
                            className='h-10 w-10 rounded-full'
                            src={user?.photoURL}
                            alt=''
                          />
                        </div>
                        <div className='ml-3'>
                          <div className='text-base font-medium leading-none text-gray-400'>
                            {user?.displayName}
                          </div>
                          <div className='text-sm font-medium leading-none text-gray-400'>
                            {user?.email}
                          </div>
                        </div>
                        <button
                          type='button'
                          className='ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                          <span className='sr-only'>View notifications</span>
                          <BellIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                      <div className='mt-3 px-2 space-y-1'>
                        <Disclosure.Button
                          as='a'
                          href='/manage'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Mange Items
                        </Disclosure.Button>
                        <Disclosure.Button
                          as='a'
                          href='/add'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Add Item
                        </Disclosure.Button>
                        <Disclosure.Button
                          as='a'
                          href='/myitem'
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          My Items
                        </Disclosure.Button>
                        <Disclosure.Button
                          as='a'
                          href='/'
                          onClick={handelSignOut}
                          className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                          Logout
                        </Disclosure.Button>
                      </div>
                    </>
                  ) : (
                    <Link to='/signin' className='button button-red'>
                      Sign In
                    </Link>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
