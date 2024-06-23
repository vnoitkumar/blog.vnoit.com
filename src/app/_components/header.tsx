import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <h2 className='text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8'>
      <Link href='/' className='item-link'>
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
