import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component{
    render(){
        console.log(this.props.serial)
        return(
            <ul>
                <li>{this.props.serial.show.name}</li>
            </ul>

        )
    }
}
export default Card;