<button className={styles.searchIcon}
    onClick={toggleSearch}
    aria-label="Toggle search"
    aria-expanded={isSearchOpen}>
    <i class="fas fa-search"></i>
</button>

{
    isSearchOpen && (
        <SearchBar onSearch={onSearch} />
    )
}


const [isSearchOpen, setIsSearchOpen] = useState(false);
const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
}