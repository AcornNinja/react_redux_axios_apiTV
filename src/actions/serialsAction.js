import axios from 'axios';
import * as types from './actionTypes';

export function loadSerialsSuccess(serials){
    return {
        type: types.LOAD_SERIALS_SUCCESS,
        serials
    };
}
//axios
export function loadSerials(name){
    return function(dispatch){
        return axios
            .get(`http://api.tvmaze.com/search/shows?q=${name}`)
            .then(serials => {
                 dispatch(loadSerialsSuccess(serials.data));
                 console.log(`action serials serials.data[i].show.name: ${serials.data[2].show.name}`);
            })
            .catch(error => {
                throw(error);
        });
    };
}