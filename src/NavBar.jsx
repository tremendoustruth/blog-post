import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import SearchBar from "./SearchBar.jsx"
import styles from './NavBar.module.css';


const NavBar = ({ onSearch }) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen)
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const location = useLocation()

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
            <nav className={styles.navBar}>
                <Link to="/" className={styles.logo}>BlogApp</Link>
                {(location.pathname === "/") && (
                    <div className={styles.searchWrapper}>
                        <SearchBar onSearch={onSearch} />
                        <button>
                            <i className="fas fa-search"></i>
                        </button >
                    </div>

                )}

                {isSearchOpen ? (
                    <div className={styles.mobileSearch}>
                        <SearchBar onSearch={onSearch} />
                        <button className={styles.xButton} onClick={toggleSearch}>
                            X
                        </button>
                    </div>
                ) : (
                    <button className={styles.searchIcon}
                        onClick={toggleSearch}
                        aria-label="Toggle search"
                        aria-expanded={isSearchOpen}>
                        <i className="fas fa-search"></i>
                    </button>
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
            </nav >
        </>
    );
};
export default NavBar;