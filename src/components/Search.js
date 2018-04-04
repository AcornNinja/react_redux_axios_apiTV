import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ name, onChange, onSave }) => {
    return (
        <div className="container">
            <form onSubmit={onSave}>
                <div>
                    <input
                        type="text"
                        placeholder ="search show"
                        value={name}
                        onChange={onChange} />
                </div>
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