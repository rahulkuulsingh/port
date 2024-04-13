// import Cart from 'components/cart';
// import OpenCart from 'components/cart/open-cart';
import LogoSquare from '../logo-square';
// import { getMenu } from 'lib/shopify'; Not sure what this deos so commenting
import { Menu } from '@/app/lib/definations';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
// import Search, { SearchSkeleton } from './search'; //not required
const { SITE_NAME } = process.env; // Not required

// Define a type for a menu item
// interface MenuItem {
//   title: string;
//   url: string;
// }

// Simulated local menu data
const localMenuData: Record<string, Menu[]> = {
  'top-navigation-handle': [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/case-study' },
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
    <nav className="relative flex items-center justify-between ">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
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
        <div className="hidden justify-center md:flex md:w-1/3">
          {/* <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense> */}
        </div>
      </div>
    </nav>
  );
}