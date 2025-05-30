
import React, { useState, useEffect } from 'react';
import '../scss/section/navbar.scss';
import dropdownData from '../data/megaDropdownData.json';
import cancelIcon from '../assets/images/cancel.svg'; 


const Navbar = ({ links , navmainclass  , Logo  , search , hamburger}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  

  const { megaDropdownData } = dropdownData;

  useEffect(() => {
  if (isMenuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }

  return () => {
    document.body.classList.remove('no-scroll');
  };
}, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-item') && !event.target.closest('.mega-dropdown')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <nav className = {navmainclass} >
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={toggleMenu}>
        {hamburger}
        </div>

      

        <div className="navbar-brand">
          <img src={Logo} alt="" className='brand-logo'/>
        </div>
   
   <div className="nav-link-wrapper">
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className='static'>
            <h2>Hey there!</h2>
            <img src={cancelIcon} alt="" className="cancel" onClick={() => setIsMenuOpen(false)} />
          </li>

          {links.map((link, index) => (
            <li key={index} className={`navbar-item ${activeDropdown === index ? 'active-dropdown' : ''}`}>
              <a
                href={index === 0 ? '#' : link.url}
                className="navbar-link"
                onClick={(e) => {
                  if (index === 0) {
                    e.preventDefault();
                    toggleDropdown(index);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >

                {link.text} {index === 0 && <span className="dropdown-arrow">
                  
                  <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7.5 8L14 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                </span>}
              </a>

              {index === 0 && activeDropdown === 0 && (
                <div className="mega-dropdown">
                  <div className="mega-dropdown-content">
                    {megaDropdownData.categories.map((category, catIndex) => (
                      <div key={catIndex} className="dropdown-column">
                        <h3>{category.title}</h3>
                        <ul>
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href={item.url || '#'}>{item.name}</a>
                              {item.description && <span className="description">{item.description}</span>}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

        <div className="search-icon">
          <img src={search} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;