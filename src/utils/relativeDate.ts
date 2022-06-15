export default function relativeDate(d: Date): string {
  const now = new Date();
  const secDiff = (now.getTime() - d.getTime()) / 1000;

  const minDiff = Math.floor(secDiff / 60);
  if (minDiff === 0) return "Seconds ago";

  const hourDiff = Math.floor(minDiff / 60);
  if (hourDiff === 0) return `${minDiff} ${getPlural("minute", minDiff)} ago`;

  const dayDiff = Math.floor(hourDiff / 24);
  if (dayDiff === 0) return `${hourDiff} ${getPlural("hour", hourDiff)} ago`;

  const monthDiff = Math.floor(dayDiff / 30.43);
  if (monthDiff === 0) return `${dayDiff} ${getPlural("day", dayDiff)} ago`;

  const yearDiff = Math.floor(monthDiff / 365.25);
  if (yearDiff === 0)
    return `${monthDiff} ${getPlural("month", monthDiff)} ago`;

  return `${yearDiff} ${getPlural("year", yearDiff)} ago`;
}

function getPlural(word: string, value: number) {
  if (value > 1) return word + "s";
  return word;
}
