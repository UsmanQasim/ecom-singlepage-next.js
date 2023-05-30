function Navbar() {
    return (
        <div className="w-full h-28 bg-gradient-flower p-4 flex justify-between align-middle">
            <div className="lg:block hidden xl:block"></div>
            <h2 className="font-sans text-thirdcolor text-2xl font-extrabold tracking-widest flex justify-center items-center">Brand Name</h2>
            <div className="flex justify-between items-center">
                <button className="bg-white hover:bg-secondary hover:shadow-[0px_0px_10px_2px_#ffff] hover:text-white border border-secondary p-2 w-20 h-20 rounded-full text-fourthcolor font-semibold flex justify-center items-center flex-col shadow-[0px_0px_10px_2px_#CB80FF]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.7} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
