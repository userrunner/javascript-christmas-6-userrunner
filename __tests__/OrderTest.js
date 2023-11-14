import Order from "../src/Order";
import Validation from "../src/Validation";

describe("주문 테스트", () => {
  test("주문한 메인 메뉴의 개수를 반환한다.", () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-2,바비큐립-2');
    expect(order.dayDiscountMenuCount('main')).toEqual(4);
  });

  test("주문한 디저트 메뉴의 개수를 반환한다.", () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-2,바비큐립-2');
    expect(order.dayDiscountMenuCount('dessert')).toEqual(2);
  });

  test("주문한 메뉴의 총 금액을 계산한다.", () => {
    const order = new Order('티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1');
    expect(order.totalAmount()).toEqual(142000);
  });

  test("음료만 주문하면 예외가 발생한다.", () => {
    const drinkMenu = { '제로콜라': 3000, '레드와인': 60000, '샴페인': 25000 };
    const orderMenuNames = ['제로콜라'];
    expect(() => {
      Validation.onlyDrink(drinkMenu, orderMenuNames);
    }).toThrow("[ERROR]");
  });

});