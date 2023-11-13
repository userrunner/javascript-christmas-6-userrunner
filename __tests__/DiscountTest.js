import Discount from "../src/Discount";
import Order from "../src/Order";

describe("혜택 테스트", () => {
  test("방문 날짜와 주문 메뉴에 따라 이벤트별 혜택 금액을 계산한다.", () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-3');
    const discount = new Discount(12, order);
    expect(discount.calculateDiscount(12, order))
      .toEqual({
        "weekdayDiscount": 6069,
        "holidayDiscount": 0,
        "dDayDiscount": 2100,
        "specialDiscount": 0
      });
  });
});