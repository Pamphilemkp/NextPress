'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchResult from '@/components/SearchResult';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const currentRoute = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchElement, setSearchElement] = useState('');
  const [resultOfSearch, setResultOfSearch] = useState([]);
  // for setting the search items
  const [SearchStore, setSearchStore] = useState([]);


  // looping through the though the base api and consuming all the end points
  const fetchApi = async () => {
    const combinedData = [];
    const pageNumberStore = [1, 2, 3];
    try {
      for (const postsId of pageNumberStore) {
        const response = await fetch(
          `https://retrocket.github.io/retrocketeer-api/posts/${postsId}.json`
        );
        const postsData = await response.json();
        
        const { data } = postsData;
        combinedData.push(...data);

      }

      setSearchStore(combinedData);

    } catch (error) {
      console.error(`Error fetching data for author ${postsId}:`, error);
    }
  };



 // handeling the mobile menu search box
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // handeling the search result according to the input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchElement(value);
    
  if (value.trim() === '') {
    setResultOfSearch([]);
  } else {
    const search = SearchStore
      ? SearchStore.filter(item =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      : [];
    setResultOfSearch(search);
  }

  }


  

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <nav className="bg-white dark:bg-gray-800 shadow py-4">
        <div className="px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0" href="/">
                <Image src="https://www.tailwind-kit.com/icons/rocket.svg" alt="Rocket(Retrocket) Logo" width={32} height={32} />
              </a>
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                <Link className={currentRoute === "/" ? "text-gray-900 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              :
              " text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              } href="/">
                Home
              </Link>
              <Link className={currentRoute === "/Authors" ? "text-gray-900 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              :
              " text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              } href="/Authors">
                Authors
              </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex -mr-2 md:block">
                <form className="EX-FORM flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                  <div className="relative">
                    <input
                      type="text"
                      id="form-subscribe-Search"
                      className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Author name or post title ..."
                      value={searchElement}
                      onChange={handleSearch}
                    />
                  </div>
                  <button
                    className="px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                    type="submit"
                    
                  >
                    Search
                  </button>
                </form>
              </div>
              <div className="flex items-center ml-4 md:ml-6">
              </div>
                
            </div>
            <div className="flex -mr-2 md:hidden">
              <button
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                onClick={toggleMenu}
              >
                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link className={currentRoute === "/" ? "text-gray-900 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              :
              " text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              } href="/">
                Home
              </Link>
              <Link className={currentRoute === "/Authors" ? "text-gray-900 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              :
              " text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium"
              } href="/Authors">
                Authors
              </Link>
            </div>
            <div className="flex p-2">
              <form className="EX-FORM flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className="relative">
                  <input
                    type="text"
                    id="form-subscribe-Search"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Author name or post title ..."
                    value={searchElement}
                    onChange={handleSearch}
                  />
                </div>
                <button
                  className="px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
            <SearchResult searchResults={resultOfSearch} />
          </div>
        )}
      </nav>
        <div className="hidden md:flex justify-end">
          <SearchResult searchResults={resultOfSearch} />
        </div>
    </div>
  );
};

export default Navbar;

