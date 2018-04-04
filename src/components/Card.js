import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component{
    render(){
        if (!this.props.serial.show.image) {
            return <div> Non picture</div>
        }

        const{serial}=this.props.serial;
        console.log(this.props.serial.show.image.medium)


        return(
            <ul>
                <li>{this.props.serial.show.name}</li>

                <li>
                    <img src={this.props.serial.show.image.medium} alt="avatar"/>
                </li>
                </ul>
        )
    }
}
export default Card;