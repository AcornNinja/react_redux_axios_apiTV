import React,{ Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
    render()
    {
        const {name} =this.props;

        return (
            <ul>
                <li>
                    <p className="title">
                        {name}
                    </p>
                </li>
            </ul>
        );
    }
}
export default List;