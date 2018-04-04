import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';

const Search = ({ name, onChange, onSave }) => {
    return (
        <div className="container">
            <form onSubmit={onSave}>
                    <input
                        type="text"
                        placeholder = "What are we going to look for?"
                        value={name}
                        onChange={onChange}/>
                    <button type="submit">Go</button>
            </form>
        </div>
    );
};

Search.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default Search;