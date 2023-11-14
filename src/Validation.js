import Messages from "./Message.js";

const Validation = {
  notNumber(date) {
    if (isNaN(date)) {
      throw new Error(Messages.dateError);
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
  menuMaxCount(menuCounts) {
    const totalCount = menuCounts.reduce((acc, count) => acc + count, 0);
    if (totalCount > 20) {
      throw new Error(Messages.menuMaxError);
    }
  },
  duplicationMenu(orderMenuNames) {
    if (new Set(orderMenuNames).size !== orderMenuNames.length) {
      throw new Error(Messages.menuError);
    }
  },
  onlyDrink(drinkMenu, orderMenuNames) {
    const matchedList = Object.keys(drinkMenu).filter((drinkName) => orderMenuNames.includes(drinkName));
    const fail = matchedList.length === orderMenuNames.length;

    if (fail) {
      throw new Error(Messages.onlyDrinkError);
    }
  }
};
export default Validation;