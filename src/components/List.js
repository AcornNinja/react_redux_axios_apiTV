import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import  emptyPic from '../pic/empty2.jpg';

class List extends React.Component{
    render(){
        if (!this.props.serial.show.image) {
            return(
                <section className="list-cards">
                    <figure>
                        <a href=''>
                            <h3>{this.props.serial.show.name}</h3>
                            <img src={emptyPic} alt="empty page"/>
                        </a>
                    </figure>
                </section>
            )
        }

        return(
            <section className="list-cards">
                <figure>
                    <a href=''>
                        <img className="avatar" src={this.props.serial.show.image.medium} alt="avatar"/>
                    </a>
                </figure>
                <section className="header-list-cards">
                    <h3 className="title-cards">{this.props.serial.show.name}</h3>
                    <span className="rating-cards">{this.props.serial.show.rating.average}</span>
                </section>
            </section>


        )
    }
}
export default List;