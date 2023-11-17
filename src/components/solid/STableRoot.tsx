import { createSignal } from "solid-js";
import type { TableRow } from "../../table/types";
import { Table } from "../../table/table";

const table = new Table();

const STableRoot = () => {
  const [tableData, setTableData] = createSignal<TableRow[]>(table.tableData);
  const clearData = () => setTableData([]);
  const resetData = () => setTableData(table.tableData);

  return <div>
    <div>
      <h1 class="text-5xl font-bold">Solid Component</h1>
      <button onClick={clearData}>Clear data</button>
      <button onClick={resetData}>Reset data</button>
    </div>
   <div class="overflow-x-auto">
    <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {tableData().map(({ index, name, job, favouriteColor}) => {
            return <tr>
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

export default STableRoot;