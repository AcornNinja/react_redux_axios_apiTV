import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ serial }) => {
    console.log(`card component ${serial.data}`)
    return (
        <ul>
            <li>{serial.name}</li>
            </ul>
    );
}
//<img src={serial.data.show.image.medium}/>

export default Card;