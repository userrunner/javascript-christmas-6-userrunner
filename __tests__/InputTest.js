import VisitDate from "../src/VisitDate";
import Order from "../src/Order";

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

  test("고객이 메뉴판에 없는 메뉴를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Order('티본스네이크-15,바비큐립-1');
    }).toThrow("[ERROR]");
  });

  test("메뉴의 개수가 1보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Order('해산물파스타-0');
    }).toThrow("[ERROR]");
  });

  test("메뉴 형식이 예시와 다르면 예외가 발생한다.(대시 누락)", () => {
    expect(() => {
      new Order('해산물파스타-1,초코케이크2');
    }).toThrow("[ERROR]");
  });

  test("메뉴 형식이 예시와 다르면 예외가 발생한다.(중간 쉼표 누락)", () => {
    expect(() => {
      new Order('해산물파스타-1초코케이크-2');
    }).toThrow("[ERROR]");
  });

  test("메뉴 형식이 예시와 다르면 예외가 발생한다.(마지막 쉼표 존재)", () => {
    expect(() => {
      new Order('해산물파스타-1,초코케이크-2,');
    }).toThrow("[ERROR]");
  });

  test("메뉴 형식이 예시와 다르면 예외가 발생한다.(메뉴 개수가 문자 형식)", () => {
    expect(() => {
      new Order('해산물파스타-a,초코케이크-b');
    }).toThrow("[ERROR]");
  });

  test("중복 메뉴를 입력하면 예외가 발생한다.", () => {
    expect(() => {
      new Order('제로콜라-1, 제로콜라-3');
    }).toThrow("[ERROR]");
  });
});