import type { TableRow } from "./types";

export class Table {
  #tableData: TableRow[];

  constructor(){
    this.#tableData = [];
  }

  fillTableRows = () => {
    const tableRows = initTableRows();
    this.#tableData = tableRows;
  }

  replaceSomeTableRows = () => {
    const tableRows = updateSomeTableRows(this.#tableData);
    this.#tableData = tableRows;
  }

  deleteSomeTableRows = () => {
    const tableRows = deleteSomeTableRows(this.#tableData);
    this.#tableData = tableRows;
  }

  resetTableRows = () => this.#tableData = [];

  
  get tableData(){
    return this.#tableData;
  }
}

const ROWS_COUNT = 1000

const initTableRows = (): TableRow[] => {
  return new Array(ROWS_COUNT).fill(null).map((_element, index) => ({
    index,
    name: "John Doe",
    job: "Quality Control Specialist",
    favouriteColor: "Blue"
  }));
}

const updateSomeTableRows = (oldTableRows: TableRow[]): TableRow[] => {
  return oldTableRows.map((oldTableRow, index) => index % 10 === 0 ? {
    index,
    name: "Karol Kosek",
    job: "Quality Control Specialist",
    favouriteColor: "Blue"
  }: oldTableRow)
}

const deleteSomeTableRows = (oldTableRows: TableRow[]): TableRow[] => {
  return oldTableRows.filter((_, index) =>index % 10 !== 0)
}