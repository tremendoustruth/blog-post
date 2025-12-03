import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import SearchBar from "./SearchBar.jsx"
import styles from './NavBar.module.css';


const NavBar = ({ onSearch }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const location = useLocation()

    return (

        <nav className={styles.navBar}>
            <Link to="/" className={styles.logo}>BlogApp</Link>
            {(location.pathname === "/") && (
                <>
                    <div className={styles.searchWrapper}>
                        <SearchBar onSearch={onSearch} />
                    </div>
                </>
            )}
            <div className={styles.links}>
                <Link to="/" >Home</Link>
                <Link to="/blog" >Blog</Link>
                <Link to="/about" >About</Link>
            </div>

            <button className={styles.hamburger}
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}>
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    <Link to="/" onClick={toggleMobileMenu}>Home</Link>
                    <Link to="/blog" onClick={toggleMobileMenu}>Blog</Link>
                    <Link to="/about" onClick={toggleMobileMenu}>About</Link>
                </div>
            )}
        </nav>
    );
};
export default NavBar;