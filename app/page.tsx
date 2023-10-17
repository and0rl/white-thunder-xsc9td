import month from "../utils/month";
import Calendar from "@/components/Calendar";

export default function Home() {
  return (
    <main className="container">
      <section id="preview">
        <p>
          In questa pagina potrai trovare gli orari, i giorni d&apos;apertura e
          i turni di reperibilità pomeridiana e notturna delle farmacie di zona
          sempre aggiornati.
        </p>
        <h2 style={{ textTransform: "capitalize" }}>{month()}</h2>

        <Calendar />
        <p>
          Ti ricordiamo che al di fuori dell&apos;orario di apertura è possibile
          contattare la farmacia reperibile solo se in possesso di{" "}
          <b>ricetta medica con indicazione di urgenza.</b>
        </p>
        {/* <p> */}
        <li className="farmaList">
          <b>
            Farmacia D&apos;Errico <span className="Aperti"> Guardia S. </span>
          </b>
          <a href="tel:+393355629277">
            <u>&#9743; 335 5629277</u> (solo fuori orario)
          </a>{" "}
          {/* </p> */}
        </li>

        <li className="farmaList">
          <b>
            Farmacia Satriano <span className="SanLupo"> San Lupo </span>
          </b>

          <a href="tel:+393292516211">
            <u>&#9743; 329 2516211</u>
          </a>
          <a href="https://www.google.com/maps/place/Farmacia+Satriano+della+Dott.ssa+Satriano+Anna+Maria/@41.261526,14.634959,15z/data=!4m6!3m5!1s0x133a405e2399efed:0xf32537f3482e4d95!8m2!3d41.261526!4d14.634959!16s%2Fg%2F11b87x8jf4?entry=ttu">
            <u>&#10148; Maps</u>
          </a>
        </li>
        <li className="farmaList">
          <b>
            Farmacia De Libero{" "}
            <span className="SanLorenzoM">San Lorenzo M.</span>
          </b>

          <a href="tel:+393385358883">
            <u>&#9743; 338 5358883</u>
          </a>

          <a href="https://www.google.com/maps/place/Farmacia+De+Libero+Adriano/@41.2496342,14.6254836,15z/data=!4m6!3m5!1s0x133a40e496853429:0xf2e30a992b233dc5!8m2!3d41.2496342!4d14.6254836!16s%2Fg%2F1tzhzflz?entry=ttu">
            <u>&#10148; Maps</u>
          </a>
        </li>
        {/* <p>
          <mark>
            &#9888; Attenzione: Al di fuori dell&apos;orario di apertura
            contattare la Farmacia di turno Solo se in possesso di ricetta
            medica con indicazione di <b>URGENZA</b>
          </mark>
        </p> */}
      </section>
    </main>
  );
}
