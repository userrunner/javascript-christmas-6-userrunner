import Validation from "./Validation.js";

const MenuBoard = {
  appetizer: { '양송이수프': 6000, '타파스': 5500, '시저샐러드': 8000 },
  main: { '티본스테이크': 55000, '바비큐립': 54000, '해산물파스타': 35000, '크리스마스파스타': 25000 },
  dessert: { '초코케이크': 15000, '아이스크림': 5000 },
  drink: { '제로콜라': 3000, '레드와인': 60000, '샴페인': 25000 }
};

class Order {
  #orderMenuNames;
  #orderMenuCounts;

  constructor(inputOrderMenu) {
    Validation.menuFormat(inputOrderMenu);
    const { orderMenuNames, orderMenuCounts } = this.#formattingOrderMenus(inputOrderMenu);

    const menuBoardNames = this.#joinMenuBoardNames(orderMenuNames, orderMenuCounts);
    Validation.notFoundMenu(menuBoardNames, orderMenuNames);
    Validation.menuCount(orderMenuCounts);
    Validation.menuMaxCount(orderMenuCounts);
    Validation.duplicationMenu(orderMenuNames);
    Validation.onlyDrink(MenuBoard.drink, orderMenuNames);

    this.#orderMenuNames = orderMenuNames;
    this.#orderMenuCounts = orderMenuCounts;
  }

  #formattingOrderMenus(inputOrderMenu) {
    const orderInfo = { orderMenuNames: [], orderMenuCounts: [] };

    inputOrderMenu.split(',').forEach((menu) => {
      const [menuName, menuCount] = menu.split('-');
      orderInfo.orderMenuNames.push(menuName);
      orderInfo.orderMenuCounts.push(parseInt(menuCount, 10));
    });

    return orderInfo;
  }

  #joinMenuBoardNames() {
    const menuNames = [];

    Object.keys(MenuBoard).forEach((key) => {
      menuNames.push(...Object.keys(MenuBoard[key]));
    });

    return menuNames;
  }

  getOrderInfo() {
    return {
      orderMenuNames: this.#orderMenuNames,
      orderMenuCounts: this.#orderMenuCounts
    };
  }

  dayDiscountMenuCount(category) {
    return Object.keys(MenuBoard[category]).reduce((acc, key) => {
      const index = this.#orderMenuNames.findIndex(element => element === key);
      if (index > -1) {
        return acc + parseInt(this.#orderMenuCounts[index], 10);
      }
      return acc;
    }, 0);
  }

  totalAmount() {
    let price = 0;

    Object.keys(MenuBoard).forEach((category) => {
      Object.keys(MenuBoard[category]).forEach((menuName) => {
        const index = this.#orderMenuNames.findIndex((element => element === menuName));
        if (index > -1) {
          price += (MenuBoard[category][menuName] * this.#orderMenuCounts[index]);
        }
      });
    });

    return price;
  }
};
export default Order;