"use client";

import { useState, useEffect } from "react";
//import month from "../utils/month";
export default function Months() {
  const [nowDate, setNowDate] = useState<Date | null>(null);

  function month(now: Date /*  = new Date() */) {
    const currentMonthString = now.toLocaleDateString("it-IT", {
      month: "long",
    });

    if (now.getDate() <= 26) {
      return currentMonthString + " " + now.getFullYear();
    } else {
      const currentMonthNum = now.getMonth();
      const currentYearNum = now.getFullYear();

      const nextMonth = new Date(
        currentYearNum,
        currentMonthNum + 1,
        1,
      ).toLocaleString("it-IT", { month: "short" });

      const nextYear = currentMonthNum === 11 ? currentYearNum + 1 : null;

      return (
        currentMonthString +
        "/" +
        nextMonth +
        " " +
        (nextYear || currentYearNum)
      );
    }
  }

  useEffect(() => {
    setNowDate(new Date());
  }, []);

  return !nowDate ? (
    <h2>&nbsp;</h2>
  ) : (
    <h2 style={{ textTransform: "capitalize" }}>{month(nowDate)}</h2>
  );
}
