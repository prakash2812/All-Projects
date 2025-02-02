import React, { Component } from 'react';
import TabRow from './TabRow'


class UserList extends Component {

    tabRow = () => {
        if (this.props.data instanceof Array) {
            return this.props.data.map((data, i) => {
                return <TabRow key={i} row={data} />
            })
        }
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;