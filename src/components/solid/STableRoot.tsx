 /** @jsxImportSource solid-js */
import { createSignal } from "solid-js";
import type { TableRow } from "@jsbatt/table/types";
import { Table } from "@jsbatt/table/table";

const table = new Table();

const STableRoot = () => {
  const [tableData, setTableData] = createSignal<TableRow[]>(table.tableData);
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
      <h1 class="text-5xl font-bold">Solid Component</h1>
      <div class="join join-horizontal">
        <button class="join-item btn btn-primary" onClick={fillData}>Fill the data</button>
        <button class="join-item btn btn-secondary"onClick={replaceSomeRows}>Replace some rows</button>
        <button class="join-item btn btn-accent" onClick={removeSomeRows}>Remove some rows</button>
        <button class="join-item btn btn-neutral" onClick={resetTableRows}>Reset all table rows</button>
      </div>
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