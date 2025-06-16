import React, { useState, useContext } from 'react';
import styles from './searchbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CityContext } from '../../CityContext';

interface SearchbarProps{
    onSearch: (query: string) => void;
    placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearch, placeholder }: SearchbarProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
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
        // Tutaj będziesz musiał zaimplementować logikę walidacji miasta
        // Na przykład, możesz wywołać funkcję, która sprawdza, czy miasto istnieje
        // Jeśli miasto jest nieprawidłowe, ustaw błąd: setError("Nieprawidłowe miasto.");
        // Jeśli miasto jest prawidłowe, wyczyść błąd i ustaw miasto: setError(null); setCity(searchTerm.trim());

        // Poniżej przykład prostej walidacji (do zastąpienia rzeczywistą logiką):
        if (searchTerm.toLowerCase() === 'nieistniejące miasto') { // Przykładowa nieprawidłowa nazwa
            setError("Wpisano nieprawidłowe miasto.");
        } else {
            setError(null); // Wyczyść błąd, jeśli poprzednio był
            setCity(searchTerm.trim());
            setSearchTerm(''); // Wyczyść pole wyszukiwania po udanym wyszukiwaniu
        }

        // Ważne: Jeśli `onSearch` wywołuje funkcję pobierającą dane pogodowe,
        // to tam powinieneś przechwytywać błędy z API (np. 404 Not Found)
        // i przekazywać je z powrotem do SearchBar lub zarządzać nimi centralnie.
        onSearch(searchTerm.trim());
        } else {
        setError("Wpisz nazwę miasta."); // Błąd, jeśli pole jest puste
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