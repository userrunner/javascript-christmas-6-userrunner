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
  },
  menuFormat(menuInput) {
    const regExpression = /^([가-힣]+-[1-9][0-9]*,)*([가-힣]+-[1-9][0-9]*)$/;
    if (!regExpression.test(menuInput)) {
      throw new Error(Messages.menuError);
    }
  },
  notFoundMenu(menuBoardNames, orderMenuNames) {
    const notFound = orderMenuNames.filter((menuName) => !menuBoardNames.includes(menuName));
    if (notFound.length > 0) {
      throw new Error(Messages.menuError);
    }
  },
  menuCount(menuCounts) {
    if (menuCounts.some((count) => count < 1)) {
      throw new Error(Messages.menuError);
    }
  },
  duplicationMenu(orderMenuNames) {
    if (new Set(orderMenuNames).size !== orderMenuNames.length) {
      throw new Error(Messages.menuError);
    }
  },
};
export default Validation;