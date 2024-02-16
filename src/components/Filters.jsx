import React, { useState } from 'react'
import { useEffect } from 'react'
import GetGenres from '../utils/Api-filters'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Filters = () => {
    const [genres, setGenres] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetGenres(); // Call the api function
          console.log(data)
          setGenres(data.genres); // Update the state with the fetched genres
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle error
        }
      };
  
      fetchData();
    }, []);
  
    return (
      // <div>
      //   <h1>Movie Genres</h1>
      //   <ul>
      //     {genres.length==0 && <li>no genres</li>}
      //     {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>) }
      //   </ul>
      // </div>
          <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Genres
              <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
            </Menu.Button>
          </div>
    
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {genres.length==0 && <li>no genres</li>}
                {
                genres && genres.map(
                  genre =>
                  (
                  <Menu.Item key={genre.id}>
                  {({ active }) => (
                    <li
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {genre.name}
                    </li>
                  )}
                </Menu.Item>
                  )
                  )
                }
                
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
    );
  };
  
  export default Filters;