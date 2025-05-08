import React from 'react';

interface SearchbarProps{
    // onSearch: (query: string) => void;
    placeholder?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder = 'Wpisz miasto...' }) => {
    return(
        <input
            type="text"
            placeholder={placeholder}
        />
    );
}

export default Searchbar;