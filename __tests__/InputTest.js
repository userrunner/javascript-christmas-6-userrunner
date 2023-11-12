import VisitDate from "../src/VisitDate";

describe("입력값 테스트", () => {
  test("식당 방문 날짜가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new VisitDate('abc');
    }).toThrow("[ERROR]");
  });
  test("식당 방문 날짜가 1 ~ 31일 사이가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new VisitDate(33);
    }).toThrow("[ERROR]");
  });
});