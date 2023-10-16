import "./calendar.css";

export default async function Calendar() {
  interface Week {
    daydate: string;
    dayname: string;
    morning: string;
    evening: string;
    other: string;
  }

  const res = await fetch("https://sheetdb.io/api/v1/48uh0odsitulr"); //orlApi
  let week = await res.json();

  const today = new Date().getDate();

  const todayIndex = week.findIndex(
    (day: Week) => day.daydate === today.toString(),
  );

  if (todayIndex !== -1 && todayIndex !== 0) {
    if (new Date().getHours() < 8) {
      week = week.slice(todayIndex - 1);
    } else {
      week = week.slice(todayIndex);
    }
  }

  if (todayIndex === -1) {
    week = week.slice(-1);
  }

  return (
    <div className="calendar">
      <div className="timeline">
        <div className="spacer"></div>
        <div className="time-marker">
          &nbsp;&nbsp;8:30 <br />
          12:30
        </div>
        <div className="time-marker">
          16:30 <br />
          20:30
        </div>
        <div className="time-marker">
          Fuori
          <br />
          Orario
        </div>
      </div>
      <div className="days">
        {week.map((day: Week) => {
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
      </div>
    </div>
  );
}
