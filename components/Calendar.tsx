import "./calendar.css";
import CalendarDay from "./CalendarDay";

export default async function Calendar() {
  interface Week {
    daydate: string;
    dayname: string;
    morning: string;
    evening: string;
    other: string;
  }

  const res = await fetch("https://sheetdb.io/api/v1/48uh0odsitulr", {
    next: { revalidate: 0 },
  }); //orlApi
  let week = await res.json();

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
        <CalendarDay week={week} />
      </div>
    </div>
  );
}
