import React from 'react'

const SearchBar = () => {
    return (
        <div className='w-full h-[100%] flex justify-center items-center'>
            <form className='w-[100%] md:w-[45%] p-1'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>

                    <input type="search" id="default-search" className="shadow-[0px_0px_4px_0px_#CB80FF] block w-full p-4 pl-10 text-sm text-primary border border-gray-300 rounded-lg dark:bg-[white] dark:border-white dark:placeholder-gray-400 focus:outline-none dark:text-primary" placeholder="Search Products" />

                    <button type="submit" className="text-white hover:text-primary absolute right-2.5 bottom-2.5 hover:border bg-primary font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary hover:border-primary dark:hover:bg-white">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar