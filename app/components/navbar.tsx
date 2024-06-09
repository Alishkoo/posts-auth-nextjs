import Link from 'next/link';
import React from 'react';


const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 px-4 py-3 backdrop-blur-md dark:border-gray-700 dark:bg-gray-950/80">
        <div className="container mx-auto flex items-center justify-between">
        <Link href="#" className="text-lg font-semibold text-gray-900 dark:text-gray-50" prefetch={false}>
          Medium
        </Link>
        </div>
        </header>
    )
}

export default Navbar;
