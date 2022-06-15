export default function kFormatter(n: number): string {
  if (n < 10000) return n.toString();
  return (n / 1000).toFixed(1).toString() + "k";
}
