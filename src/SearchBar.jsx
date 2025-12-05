import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("")
    const debouncedOnSearch = useDebouncedCallback(value => onSearch(value), 500)
    const handleInputChange = (e) => {
        const newValue = e.target.value
        setQuery(newValue)
        debouncedOnSearch(newValue) //dynamic search
    }
    const handleKeyDown = (e) => {
        if (e.key == "Enter") {
            onSearch(query)
        }
    }
    return (
        <>
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter search term here"
                className={styles.input}
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </>

    )
}
