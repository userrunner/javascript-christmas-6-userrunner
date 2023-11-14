import InputView from "./InputView.js";
import OutputView from "./OutputView.js";
import Discount from "./Discount.js";

class App {
  async run() {
    OutputView.printIntroduce();

    const inputDate = await InputView.readDate();
    const order = await InputView.readMenu();

    OutputView.printEventPreview();
    OutputView.printMenu(order);

    const beforeAmount = order.totalAmount();
    OutputView.printBeforeTotalAmount(beforeAmount);

    const discount = new Discount(inputDate, order);
    const discountLists = discount.getDiscountDetails();
    OutputView.printGift(discountLists);
    OutputView.printDiscountList(discountLists);
    const discountAmount = discount.calcTotalDiscountAmount();
    OutputView.printTotalDiscountAmount(discountAmount);
    OutputView.printAfterTotalAmount(beforeAmount, discountAmount);
    OutputView.printEventBadge(discountAmount);
  }
}

export default App;
