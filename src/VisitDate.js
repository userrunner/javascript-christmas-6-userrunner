import Validation from "./Validation.js";

class VisitDate {
  #date;

  constructor(date) {
    Validation.notNumber(date);
    Validation.dateRange(date);
    this.#date = date;
  }

  getVisitDate() {
    return this.#date;
  }
}

export default VisitDate;