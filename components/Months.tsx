"use client";

import { useState, useEffect } from "react";
import month from "../utils/month";
export default function Months() {
  /*  const [nowDate, setNowDate] = useState<Date | null>(null);

  useEffect(() => {
    setNowDate(new Date());
  }, []);
  return !nowDate ? (
    <h2>&nbsp;</h2>
  ) : (
    <h2 style={{ textTransform: "capitalize" }}>{month(nowDate)}</h2>
  ); */
  return <h2 style={{ textTransform: "capitalize" }}>{month()}</h2>;
}
