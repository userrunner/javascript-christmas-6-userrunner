class Discount {
  constructor(visitDate, order) {
    this.calculateDiscount(visitDate, order);
  }

  calculateDiscount(visitDate, order) {
    const newDate = new Date(`2023-12-${visitDate}`);
    const mainCount = order.getDayDiscountMenuCount('main');
    const dessertCount = order.getDayDiscountMenuCount('dessert');
    const week = newDate.getDay();

    const weekdayDiscount = this.#calculateWeekdayDiscount(week, dessertCount) || 0;
    const holidayDiscount = this.#calculateHolidayDiscount(week, mainCount) || 0;
    const dDayDiscount = this.#calculateDDayDiscount(visitDate) || 0;
    const specialDiscount = this.#calculateSpecialDiscount(week, visitDate) || 0;

    return { weekdayDiscount, holidayDiscount, dDayDiscount, specialDiscount };
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
}

export default Discount;