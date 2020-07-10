import moment from "moment";

// Fungsi ini untuk mengecek apakah date yang di passed in adalah
// Hari ini
export const isToday = (dueDate) => {
  const today = moment().startOf("day");
  return moment(dueDate).isSame(today, "d");
};

// Fungsi ini untuk mengecek apakah date yang di passed in adalah
// Besok
export const isTomorrow = (dueDate) => {
  const tomorrow = moment().add("1", "days");
  return moment(dueDate).isSame(tomorrow, "d");
};

// Fungsi mengreturn string jika date yang di passed sesuai dengan kondisi if else statement
export const formatDate = (dueDate) => {
  if (isToday(dueDate)) {
    return "Today";
  } else if (isTomorrow(dueDate)) {
    return "Tomorrow";
  } else {
    return dueDate;
  }
};
