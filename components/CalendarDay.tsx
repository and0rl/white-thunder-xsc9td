"use client";
import { useState, useEffect } from "react";

interface Week {
  daydate: string;
  dayname: string;
  morning: string;
  evening: string;
  other: string;
}

type Props = {
  week: Week[];
};

/* https://stackoverflow.com/questions/73005663/next-js-new-date-constructor-throwing-console-errors */
function sliceWeek(weekToSlice: Week[], today: number) {
  //const today = new Date().getDate();
  const todayIndex = weekToSlice.findIndex(
    (day: Week) => day.daydate === today.toString(),
  );

  if (todayIndex !== -1 && todayIndex !== 0) {
    if (new Date().getHours() < 8) {
      weekToSlice = weekToSlice.slice(todayIndex - 1);
    } else {
      weekToSlice = weekToSlice.slice(todayIndex);
    }
  }

  if (todayIndex === -1) {
    weekToSlice = weekToSlice.slice(-1);
  }

  return weekToSlice;
}

const CalendarDay = ({ week }: Props) => {
  const [todayDate, setTodayDate] = useState<number | null>(null);

  useEffect(() => {
    setTodayDate(new Date().getDate());
  }, []);

  return (
    <>
      {!todayDate &&
        [...Array(4)].map((el, i) => {
          return (
            <div className="day placeholder" key={i}>
              <div className="date">
                <p className="date-num"></p>
                <p className="date-day"></p>
              </div>

              <div className="events"></div>
            </div>
          );
        })}
      {todayDate &&
        sliceWeek(week, todayDate).map((day: Week) => {
          return (
            <div className="day" key={day.daydate}>
              <div className="date">
                <p className="date-num">{day.daydate}</p>
                <p className="date-day">{day.dayname}</p>
              </div>

              <div className="events">
                <div
                  className={`timeSlot morning ${day.morning.replace(
                    /[ .]/g,
                    "",
                  )}`}
                >
                  <p className="title">{day.morning}</p>
                </div>

                <div
                  className={`timeSlot evening ${day.evening.replace(
                    /[ .]/g,
                    "",
                  )}`}
                >
                  <p className="title">{day.evening}</p>
                </div>

                <div
                  className={`timeSlot afterhours ${day.other.replace(
                    /[ .]/g,
                    "",
                  )}`}
                >
                  <p className="title">{day.other}</p>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CalendarDay;
