import moment from "moment";
import { isToday, isTomorrow, formatDate } from "./compareDate";

const today = moment().format("YYYY-MM-DD");
const tomorrow = moment().add(1, "days");
const otherDay = moment().add(10, "days");

describe("today date", () => {
  test("isToday return true", () => {
    expect(isToday(today)).toBeTruthy();
  });
  test("isToday return false", () => {
    expect(isToday(tomorrow)).toBeFalsy();
  });
});

describe("tomorrow date", () => {
  test("isTomorrow return true", () => {
    expect(isTomorrow(tomorrow)).toBeTruthy();
  });
  test("isTomorrow return false", () => {
    expect(isTomorrow(today)).toBeFalsy();
  });
});

describe("format date", () => {
  test("format date return 'Today' string", () => {
    expect(formatDate(today)).toBe("Today");
  });
  test("format date return 'Tomorrow' string", () => {
    expect(formatDate(tomorrow)).toBe("Tomorrow");
  });
  test("format date return whatever the date is passed in", () => {
    expect(formatDate(otherDay)).toBe(otherDay);
  });
});
