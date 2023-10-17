"use client";

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

function sliceWeek(weekToSlice: Week[]) {
  const today = new Date().getDate();
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
  return (
    <>
      {sliceWeek(week).map((day: Week) => {
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
