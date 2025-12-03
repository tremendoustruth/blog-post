import { useState } from "react"
import { useDebouncedCallback } from 'use-debounce';

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
        <label htmlFor="search">
            Search Posts:
            <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter search term here"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </label>
    )
}
