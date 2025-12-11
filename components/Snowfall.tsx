"use client";
export default function Snowfall() {
  const isNelPeriodoNatalizio = (data) =>
    (data.getMonth() === 11 && data.getDate() >= 8) ||
    (data.getMonth() === 0 && data.getDate() <= 6);

  if (isNelPeriodoNatalizio(new Date())) {
    return (
      <div className="snowflakes">
        <div className="snowflake">✻</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">✽</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">✻</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">✽</div>
      </div>
    );
  }

  return null;
}
