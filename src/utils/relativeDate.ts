//TODO: format date to be relative to now (eg: 1 min ago, 2 days ago, 4 months ago)
export default function relativeDate(d: Date): string {
  return d.getUTCMonth().toString();
}
