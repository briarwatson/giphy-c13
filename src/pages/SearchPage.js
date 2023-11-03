import { useEffect, useState } from 'react';
import useAPI from '../functions/useAPI';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [gifs, setGifs] = useState(null);
    const { data, loading, error } = useAPI(searchTerm);

    const searchClick = () => {
        setSearchTerm(inputValue);
    }

    useEffect(() => {
        setGifs(data);
    }, [data]);

    return (
        <div>
            <h1>Search Page</h1>
            <input 
                type='text'
                onChange={e => setInputValue(e.target.value)}
                placeholder='Search for gifs'
            />
            <button onClick={searchClick}>Search</button>
        </div>
    )
}

export default SearchPage;