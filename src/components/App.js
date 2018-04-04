import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import Search from './Search';
import Card from './Card';
//import * as nameAction from '../actions/nameAction';
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
        let name = e.target.value;
        return this.setState({name: name});
    }

    saveSearch(e) {
        e.preventDefault();
        this.props.loadName(this.state.name);
    }

    render() {
        const {serials} = this.props;
        let newArr = Object.keys(serials);
        let mapArr = newArr.map( i=>{return serials[i].show.name})
        console.log(`app js ${mapArr}`);
            return (
            <div className="App">
                <HomePage/>
                <Search
                    name={this.state.name}
                    onChange={this.updateSearch}
                    onSave={this.saveSearch}
                />
                <h3>List</h3>
                {
                  Object.keys(serials)
                      .map(key => <Card key={key} serial={serials[key]}/>)
                  // Object.keys(serials).map((i,key)=>{return <li key={key}>{serials[i].show.name}</li> })
                }
            </div>
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
