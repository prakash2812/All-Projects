import React, { useState } from "react";
import TableList from "./TableList";
const TableUI = () => {
    const [table, setTable] = useState(() => ({
        row: '',
        col: ''
    }));

    const [generate, setGenerate] = useState(() => table);

    const inputData = e => {
        setTable({ ...table, [e.target.name]: e.target.value });
    };
    const generateTable = () => {
        setGenerate(table);
    };
    return (
        <>
            <label > Rows </label>
            <input type="number" name="row" onChange={inputData} />
            <label > Columns </label>
            <input type="number" name="col" onChange={inputData} />
            <button type="button" onClick={generateTable}>
                Generate Table
             </button>
            <Controller
            <TableList tableData={generate} />
        </>
    );
};

export default TableUI;
