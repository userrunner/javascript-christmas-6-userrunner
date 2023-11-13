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
    printGift(beforeAmount) {
        Console.print("\n<증정 메뉴>");
        Console.print(beforeAmount > 120000 ? '샴페인 1개' : '없음');
    },
    printDiscountList(discountDetails, beforeAmount) {
        const eventTitles = ['평일 할인', '주말 할인', '크리스마스 디데이 할인', '특별 할인'];
        Console.print("\n<혜택 내역>");
        let count = 0;
        Object.keys(discountDetails).forEach((key, index) => {
            if (discountDetails[key]) {
                count += 1;
                Console.print(`${eventTitles[index]}: -${discountDetails[key].toLocaleString('ko-KR')}원`);
            }
        });
        if (beforeAmount > 12000) {
            Console.print(`증정 이벤트: -25,000원`);
        }
        if (count === 0) {
            Console.print('없음');
        }
    }
};

export default OutputView;