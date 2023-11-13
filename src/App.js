import { Console } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import Order from "./Order.js";
import VisitDate from "./VisitDate.js";
import Discount from "./Discount.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    OutputView.printIntroduce();
    const inputDate = await InputView.readDate();
    const order = await InputView.readMenu();
    OutputView.printEventPreview();
    OutputView.printMenu(order);

    const discount = new Discount(inputDate, order);
    const beforeAmount = order.getTotalAmount();
    OutputView.printBeforeTotalAmount(beforeAmount);
    OutputView.printGift(beforeAmount);
    OutputView.printDiscountList(discount.getDiscountDetails(), beforeAmount);
  }
}

export default App;
