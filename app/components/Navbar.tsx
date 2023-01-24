import * as data from '~/mocks/header';
import { Link, useLocation } from '@remix-run/react';

export default function Navbar(){

  const location = useLocation()

  return (

    <div className='sticky top-0 bg-gradient-to-r from-purple-500 to-[#A655FF] z-10 absolute w-full shadow-md'>
      <nav className="container">
        <div className="mx-auto">
          <div className="flex">
            {data.links.map(({title, link}) => (
              <Link to={link} className={` ${location.pathname == link ? 'bg-white text-[#393939]' : 'bg-none text-[#F3F3F3] '} font-spline px-10 py-6 text-base font-semibold leading-5 hover:bg-white hover:text-[#393939] duration-150`} key={title}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
