export default function month(now = new Date()) {
  const options = { year: "numeric", month: "long" };
  const localDate = now.toLocaleDateString("it-IT", options);
  return localDate;
}
