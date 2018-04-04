import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import Search from './Search';
import Card from './Card';
import  { loadName }  from '../actions/nameAction';
import List from './List';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {loadSerialsSuccess} from "../actions/serialsAction";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
        this.updateSearch = this.updateSearch.bind(this);
        this.saveSearch = this.saveSearch.bind(this);
    }


    updateSearch(e) {
        e.preventDefault();
        let name = e.target.value.toLowerCase();
        //TODO validator without spice

        console.log( `name ${name}`);
        return this.setState({name: name});
    }

    saveSearch(e) {
        e.preventDefault();
        this.props.loadName(this.state.name);
    }

    render() {
        const {serials} = this.props;
            return (
            <section>
                <HomePage/>
                <Search
                    name={this.state.name}
                    onChange={this.updateSearch}
                    onSave={this.saveSearch}/>
                <section className="gallery-wrapper">
                {
                  Object.keys(serials)
                      .map(key => <List key={key} serial={serials[key]}/>)
                }
                 </section>
            </section>
            )
    }
}

App.propTypes = {
    serials: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return{
        serials: state.serialReducer,
        name: state.nameReducer
    }
}
function mapDispatchToProps(dispatch) {
    return{
      loadName: bindActionCreators(loadName,dispatch),
      loadSerialsSuccess: bindActionCreators(loadSerialsSuccess,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
