import { useState } from "react";
import type { TableRow } from "../../table/types";
import { Table } from "../../table/table";

const table = new Table();

const RTableRoot = () => {
  const [tableData, setTableData] = useState<TableRow[]>(table.tableData);
  const fillData = () => {
    table.fillTableRows();
    setTableData(table.tableData);
  }
  const replaceSomeRows = () => {
    table.replaceSomeTableRows();
    setTableData(table.tableData);
  }

  const removeSomeRows = () => {
    table.deleteSomeTableRows();
    setTableData(table.tableData);
  }

  const resetTableRows = () => {
    table.resetTableRows();
    setTableData(table.tableData);
  }

  return <div>
    <div>
      <h1 className="text-5xl font-bold">React Component</h1>
      <div className="join join-horizontal">
        <button className="join-item btn btn-primary" onClick={fillData}>Fill the data</button>
        <button className="join-item btn btn-secondary" onClick={replaceSomeRows}>Replace some rows</button>
        <button className="join-item btn btn-accent" onClick={removeSomeRows}>Remove some rows</button>
        <button className="join-item btn btn-neutral" onClick={resetTableRows}>Reset all table rows</button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ index, name, job, favouriteColor}) => {
            return <tr key={index}>
            <th>{index}</th>
            <td>{name}</td>
            <td>{job}</td>
            <td>{favouriteColor}</td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  </div>

}

export default RTableRoot;