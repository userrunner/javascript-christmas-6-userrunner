import Messages from "./Message.js";

const Validation = {
  notNumber(date) {
    if (isNaN(date)) {
      throw new Error(Messages.numberError);
    }
  },
  dateRange(date) {
    if (date < 1 || date > 31) {
      throw new Error(Messages.dateError);
    }
  }
};
export default Validation;