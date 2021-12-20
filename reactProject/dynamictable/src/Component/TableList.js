import React from "react";

const TableList = props => {
    const { row, col } = props.tableData
    console.log(row, col)
    console.log(props.tableData)

    const dynamicTable = (row, col) => {
        let rows = new Array(+row).fill()
        return rows.map(item => <tr>{colTables(col)}</tr>);
    };
    const colTables = col => {
        let cols = new Array(+col).fill()
        return cols.map(item => <td />)

    };

    return (
        <div style={{ 'margin': 'auto', 'width': '50%', 'margin-top': '20px' }}>
            <table >
                {dynamicTable(row, col)}
            </table>
        </div>
    )
}

export default TableList;
