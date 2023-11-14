const GIFT_AMOUNT = 120000;
const MIN_AMOUNT_FOR_DISCOUNT = 10000;

class Discount {
  #discountDetails;

  constructor(visitDate, order) {
    const newDate = new Date(`2023-12-${visitDate}`);
    const week = newDate.getDay();
    const mainCount = order.dayDiscountMenuCount('main');
    const dessertCount = order.dayDiscountMenuCount('dessert');
    const beforeTotalAmount = order.totalAmount();
    this.#discountDetails = this.#calculateDiscount(week, mainCount, dessertCount, visitDate, beforeTotalAmount);
  }

  #calculateDiscount(week, mainCount, dessertCount, visitDate, beforeTotalAmount) {
    const weekdayDiscount = this.#calculateWeekdayDiscount(week, dessertCount) || 0;
    const holidayDiscount = this.#calculateHolidayDiscount(week, mainCount) || 0;
    const dDayDiscount = this.#calculateDDayDiscount(visitDate) || 0;
    const specialDiscount = this.#calculateSpecialDiscount(week, visitDate) || 0;
    const giftDiscount = this.#calculateGiftDiscount(beforeTotalAmount) || 0;

    return beforeTotalAmount > MIN_AMOUNT_FOR_DISCOUNT
      ? { weekdayDiscount, holidayDiscount, dDayDiscount, specialDiscount, giftDiscount }
      : {};
  }

  #calculateWeekdayDiscount(week, dessertCount) {
    if (week <= 4) {
      return dessertCount * 2023;
    }
  }

  #calculateHolidayDiscount(week, mainCount) {
    if (week >= 5) {
      return mainCount * 2023;
    }
  }

  #calculateDDayDiscount(visitDate) {
    if (visitDate <= 25) {
      return 1000 + ((visitDate - 1) * 100);
    }
  }

  #calculateSpecialDiscount(week, visitDate) {
    if (week === 0 || visitDate === 25) {
      return 1000;
    }
  }

  #calculateGiftDiscount(beforeTotalAmount) {
    if (beforeTotalAmount >= GIFT_AMOUNT) {
      return 25000;
    }
  }

  getDiscountDetails() {
    return this.#discountDetails;
  }

  calcTotalDiscountAmount() {
    if (Object.keys(this.#discountDetails).length > 0) {
      return Object.keys(this.#discountDetails).reduce((acc, key) => acc + this.#discountDetails[key], 0);
    }
    return 0;
  }
}

export default Discount;