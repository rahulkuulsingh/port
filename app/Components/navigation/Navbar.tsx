
import LogoSquare from '../logo-square';
import { Menu } from '@/app/utils/definations';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';



const { SITE_NAME } = process.env; // Not required

// Simulated local menu data
const localMenuData: Record<string, Menu[]> = {
  'top-navigation-handle': [
    { title: 'Work / Case Study', path: '/' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'About Me', path: '/about-me' },
    // Add more menu items as needed
  ],
  // Add more menu handles and items as needed
};

// Function to fetch menu items locally
export async function getMenu(handle: string): Promise<Menu[]> {
  // Check if the handle exists in the local menu data
  const menuItems = localMenuData[handle];
  
  // If menu items are found, return them
  if (menuItems) {
    return menuItems;
  } else {
    // If handle not found, return an empty array
    return [];
  }
}


export default async function Navbar() {
  const menu = await getMenu('top-navigation-handle');


  return (
    <nav className="relative flex items-center justify-between max-w-screen-lg px-8 py-4 m-auto laptop-nav">
      <div className="flex-none block md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex items-center w-full">
        <div className="flex w-full">
          <Link href="/" className="flex items-center justify-center w-full mr-2 md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="flex-none ml-2 text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="justify-center hidden md:flex md:w-1/3">
        </div>
      </div>
    </nav>
  );
}