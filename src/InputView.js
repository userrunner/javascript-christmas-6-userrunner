import { Console } from "@woowacourse/mission-utils";
import VisitDate from "./VisitDate.js";

const InputView = {
    async readDate() {
        const dateInput = await Console.readLineAsync("12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n");
        const visitDate = new VisitDate(parseInt(dateInput, 10));
    }
};

export default InputView;