import React from 'react';
import styles from './searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchbarProps{
    // onSearch: (query: string) => void;
    placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder = 'Wpisz miasto...' }) => {
    return(
        <>
            <input
                type="text"
                placeholder={placeholder}
                className={`${styles.searchbar}`}
            />
            <button className={`${styles.searchbar_button}`}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </>
    );
}

export default Searchbar;