import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className='bg-blue-500 flex justify-center items-center h-12 gap-10'>
                <Link href="/" className='text-white font-bold text-2xl '>Home</Link>
                <Link href="/about" className='text-white font-bold text-2xl '>About</Link>
                <Link href="/posts" className='text-white font-bold text-2xl '>Posts</Link>
                <Link href="/blogs" className='text-white font-bold text-2xl '>Blogs</Link>
            </nav>
        </div>
    );
};

export default Navbar;