import Discount from "../src/Discount";
import Order from "../src/Order";

describe("혜택 테스트", () => {
  test("방문 날짜와 주문 메뉴에 따라 이벤트별 혜택 금액을 계산한다.", () => {
    const order = new Order('해산물파스타-2,레드와인-1,초코케이크-3');
    const discount = new Discount(12, order);
    expect(discount.getDiscountDetails())
      .toEqual({
        "weekdayDiscount": 6069,
        "holidayDiscount": 0,
        "dDayDiscount": 2100,
        "specialDiscount": 0,
        "giftDiscount": 25000
      });
  });

  test("총혜택 금액을 계산한다.", () => {
    const order = new Order('크리스마스파스타-1,시저샐러드-1,샴페인-2');
    const discount = new Discount(25, order);
    expect(discount.calcTotalDiscountAmount())
      .toEqual(4400);
  });
});