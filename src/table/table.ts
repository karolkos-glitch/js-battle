import type { TableRow } from "./types";

export class Table {
  #tableData: TableRow[];

  constructor(){
    this.#tableData = initTableRows();
  }

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