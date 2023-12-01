import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className='nav-link'>Home</Link>
      <Link to={"/show-books"}>Show Books</Link>
      <Link to={"/add-book"}>Add Books</Link>
    </nav>
  );
};

export default Navbar;