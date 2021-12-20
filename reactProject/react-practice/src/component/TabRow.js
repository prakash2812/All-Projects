import React, { Component } from 'react'

class TabRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.row.id}
                </td>
                <td>
                    {this.props.row.name}
                </td>
            </tr>
        )
    }
}

export default TabRow;