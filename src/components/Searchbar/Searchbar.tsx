import React, { useState, useContext } from 'react';
import styles from './searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CityContext } from '../../CityContext';

interface SearchbarProps{
    // onSearch: (query: string) => void;
    placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder = 'Wpisz miasto...' }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const cityContext = useContext(CityContext);

    if(!cityContext){
        throw new Error('SearchBar must be used within a CityProvider');
    }

    const { setCity } = cityContext;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim() !== '') { 
            setCity(searchTerm.trim()); 
            setSearchTerm(''); 
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return(
        <div className={styles.searchbar_container}> {/* Dodaj kontener dla stylów */}
            <input
                type="text"
                placeholder={placeholder}
                className={styles.searchbar} // Upewnij się, że masz styl dla inputa
                value={searchTerm} // Połącz wartość inputa ze stanem
                onChange={handleInputChange} // Obsługa zmian w inputcie
                onKeyPress={handleKeyPress} // Obsługa Enter
            />
            <button
                className={styles.searchbar_button}
                onClick={handleSearch} // Dodaj obsługę kliknięcia przycisku
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default Searchbar;