import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printIntroduce() {
    Console.print("안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.");
  },
  printEventPreview() {
    Console.print("12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n");
  },
  printMenu(order) {
    const { orderMenuNames, orderMenuCounts } = order.getOrderInfo();
    Console.print("<주문 메뉴>");
    orderMenuNames.map((menuName, index) => {
      Console.print(`${menuName} ${orderMenuCounts[index]}개`);
    });
  },
  printBeforeTotalAmount(amount) {
    Console.print("\n<할인 전 총주문 금액>");
    Console.print(`${amount.toLocaleString('ko-KR')}원`);
  },
  printGift(discountLists) {
    Console.print("\n<증정 메뉴>");
    Console.print(discountLists.giftDiscount ? '샴페인 1개' : '없음');
  },
  printDiscountList(discountLists) {
    const eventTitles = ['평일 할인', '주말 할인', '크리스마스 디데이 할인', '특별 할인', '증정 이벤트'];
    Console.print("\n<혜택 내역>");
    let count = 0;
    Object.keys(discountLists).forEach((key, index) => {
      if (discountLists[key]) {
        count += 1;
        Console.print(`${eventTitles[index]}: -${discountLists[key].toLocaleString('ko-KR')}원`);
      }
    });
    if (count === 0) {
      Console.print('없음');
    }
  },
  printTotalDiscountAmount(discountAmount) {
    Console.print("\n<총혜택 금액>");
    const targetAmount = discountAmount ? `-${discountAmount.toLocaleString('ko-KR')}` : 0;
    Console.print(`${targetAmount}원`);
  },
  printAfterTotalAmount(beforeAmount, discountAmount) {
    Console.print("\n<할인 후 예상 결제 금액>");
    Console.print(`${(beforeAmount - discountAmount).toLocaleString('ko-KR')}원`);    
  }
};

export default OutputView;