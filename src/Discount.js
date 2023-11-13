class Discount {
  constructor(visitDate, order) {
    this.#calculateDiscount(visitDate, order);
  }

  #calculateDiscount(visitDate, order) {
    const newDate = new Date(`2023-12-${visitDate}`);
    const mainCount = order.getDayDiscountMenuCount('main');
    const dessertCount = order.getDayDiscountMenuCount('dessert');
    const week = newDate.getDay();

    this.#calculateWeekdayDiscount(week, dessertCount);
    this.#calculateHolidayDiscount(week, mainCount);
    this.#calculateDDayDiscount(visitDate);
    this.#calculateSpecialDiscount(week, visitDate);
  }

  #calculateWeekdayDiscount(week, dessertCount) {
    if (week <= 4) {
      return weekdayDiscount = dessertCount * 2023;
    }
  }

  #calculateHolidayDiscount(week, mainCount) {
    if (week >= 5) {
      return holidayDiscount = mainCount * 2023;
    }
  }

  #calculateDDayDiscount(visitDate) {
    if (visitDate <= 25) {
      return dDayDiscount = 1000 + ((visitDate - 1) * 100);
    }
  }

  #calculateSpecialDiscount(week, visitDate) {
    if (week === 0 || visitDate === 25) {
      return specialDiscount = 1000;
    }
  }
}

export default Discount;