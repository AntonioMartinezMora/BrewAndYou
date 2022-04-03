import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'


const Search = () => {
    const {openMenu, setOpenMenu} = useGlobalContext()
    const {openSearch, setOpenSearch} = useGlobalContext()
    const searchValue = React.useRef('')

    return (
        <div 
            className={openSearch ? "search__container" : "search__container close"}
        >
            <form 
                className="search__form"
            >
                <input 
                    type="text" 
                    id='input__name' 
                    ref={searchValue} 
                    placeholder="Search anything"
                />
            </form>
            <div className="search__results">
                        
            </div>
        </div>

    )
}

export default Search;