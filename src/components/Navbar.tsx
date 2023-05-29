function Navbar() {
    return (
        <div className="w-full h-28 bg-primary p-4 flex justify-between align-middle">
            <div className="lg:block hidden xl:block"></div>
            <h2 className="font-sans text-thirdcolor text-2xl font-extrabold tracking-widest flex justify-center items-center">Brand Name</h2>
            <div className="flex justify-between items-center">
                <button className="bg-white border border-secondary p-2 w-16 h-16 rounded-full text-fourthcolor font-semibold">Cart</button>
            </div>
        </div>
    );
}

export default Navbar;
