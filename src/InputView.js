import { Console } from "@woowacourse/mission-utils";
import VisitDate from "./VisitDate.js";
import Order from "./Order.js";

const InputView = {
  async readDate() {
    while (true) {
      try {
        const dateInput = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
        const visitDate = new VisitDate(parseInt(dateInput, 10));
        return visitDate.getVisitDate();
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
  async readMenu() {
    while (true) {
      try {
        const menuInput = await Console.readLineAsync("주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n");
        const order = new Order(menuInput);
        return order;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
};

export default InputView;