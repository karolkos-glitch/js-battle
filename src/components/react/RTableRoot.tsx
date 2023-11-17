import { Profiler, useState } from "react";
import type { TableRow } from "../../table/types";
import { Table } from "../../table/table";

const table = new Table();

const RTableRoot = () => {
  const [tableData, setTableData] = useState<TableRow[]>(table.tableData);
  const clearData = () => setTableData([]);
  const resetData = () => setTableData(table.tableData);

  return <Profiler id="react-table-data" onRender={(...args) => console.log(args)}>
    <div>
    <div>
      <h1 className="text-5xl font-bold">React Component</h1>
      <button onClick={clearData}>Clear data</button>
      <button onClick={resetData}>Reset data</button>
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
  </Profiler>
}

export default RTableRoot;