import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '../assets/images/Illustration_cropped.png';
import '../styles/Navbar.css';

const Navbar = ({ projectSectionRef, contactSectionRef }) => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop.current) {
        setShow(false); 
      } else {
        setShow(true); 
      }
      lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();

    if (window.location.pathname === '/') {
      projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        projectSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();

    if (window.location.pathname === '/') {
      contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  return (
    <div className={`navbar ${show ? 'show' : 'hide'}`}>
      <ul className="navbar-links">
        <li className="navbar-avatar-item">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="navbar-avatar">
              <img src={HomeIcon} alt="Home" className="navbar-icon" />
            </div>
          </a>
        </li>
        <li><a href="/" onClick={scrollToProjects}>Work</a></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="/" onClick={scrollToContact}>Connect</a></li>
      </ul>
    </div>
  );
};

export default Navbar;
