import React from 'react';

function Navbar() {
  return (
    <nav className="Navbar">
      <a className="" href="#">
        <img src="/" width="30" height="30" class="" alt=""/>Gister
      </a>
      <div className="" id="">
        <ul className="">
          <li className="">
            <a className="" href="#">All gists</a>
          </li>
          <li className="">
            <a className="" href="#">My gists</a>
          </li>
        </ul>
      </div>
      <form className="">
        <input className="" type="search" placeholder="Search" aria-label="Search"/>
        <button className="" type="submit">Search</button>
      </form>

    </nav>
  );
}

export default Navbar;
