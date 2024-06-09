import Link from 'next/link';
import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl flex justify-between items-center text-sm">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Acme Inc. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
        </div>
        </footer>
    )
}

export default Footer;