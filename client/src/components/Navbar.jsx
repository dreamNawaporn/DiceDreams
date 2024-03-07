

const Navbar = () => {
    const navItem = (
        <>
            <li><a>Home </a></li>
            <li><a>Show participation history </a></li>
            <li><a>Notifications </a></li>
            <li><a>Website Rules </a></li>
            <button className="btn btn-ghost btn-circle lg:flex mr-3 items-center justify-center hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
            <p>Number of people</p>
            <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
            
            <li tabIndex={0}>
                <details>
                    <summary>Category</summary>
                    <ul className="p-2">
                        <li><a>All</a></li>
                        <li><a>Clothing</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Gadgets</a></li>
                        <li><a>Swag</a></li>
                    </ul>
                </details>
            </li>

            <li tabIndex={0}>
                <details>
                    <summary>Service</summary>
                    <ul className="p-2">
                        <li><a>Order Online</a></li>
                        <li><a>Order Tracking</a></li>

                    </ul>
                </details>
            </li>
            <li><a>Promotion</a></li>
        </>
    )
    return (
        <header className='max-w-screen-2x1 container mx-auto fixed top-0 left-0 right-0 translate-all duration-300 ease-in-out'>
            <div className='navbar xl:px-24'>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">

                            <div className="flex-none">
                                <button className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </button>
                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navItem}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">
                            <img src="/logoDice.png" alt="" className='h-12 pr-1 mx-auto' />
                            <span className='text-red'>Test </span> DiceDreams
                        </a>
                    </div>

                    <div className="navbar-end">
                        <button className="btn btn-ghost btn-circle lg:flex mr-3 items-center justify-center hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>

                        <a className="btn btn-outline text-black flex items-center gap-2 ">
                            register  </a>
                        <a className="btn  bg-red  text-white flex items-center gap-2 ">
                            log in  </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar