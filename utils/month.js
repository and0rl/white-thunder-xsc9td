export default function month(now = new Date()) {
  //const options = { year: "numeric", month: "long" };
  const currentMonth = now.toLocaleDateString("it-IT", { month: "long" });

  if (now.getDate() <= 26) {
    return currentMonth + " " + now.getFullYear();
  } else {
    const nextMonthDate = now;
    nextMonthDate.setMonth((nextMonthDate.getMonth() + 1) % 12);
    const nextMonth = nextMonthDate.toLocaleString("it-IT", { month: "short" });
    return currentMonth + "/" + nextMonth + " " + nextMonthDate.getFullYear();
  }
}
