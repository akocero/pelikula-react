import React, { useContext, useState } from 'react';
import { MovieContext } from '../../contexts/MovieContext';
const Search = () => {
    const { setQuery, setPageNumber } = useContext(MovieContext);

    const [name, setName] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (name === '') {
            return false;
        }
        setPageNumber(1);
        setQuery(name);
    }
    return (
        <div className="browse-movies__search pt-5">
            <form onSubmit={onSubmit}>
                <div className="">
                    <input type="text" placeholder="Type movie name... (Enter)" onChange={(e) => { setName(e.target.value) }} />
                </div>
            </form>
        </div>
    );
}

export default Search;