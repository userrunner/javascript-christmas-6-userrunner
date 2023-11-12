import Validation from "./Validation.js";

class VisitDate {
  #date;

  constructor(date) {
    this.#validation(date);
    this.#date = date;
  }

  #validation(date) {
    console.log(date);
    Validation.notNumber(date);
    Validation.dateRange(date);
  }
}

export default VisitDate;