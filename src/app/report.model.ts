export interface Report {
  y: string;  // year to date
  w: string;  // seven day total
  a: string;  // new snow 6 days ago
  b: string;  // new snow 5 days ago
  c: string;  // new snow 4 days ago
  d: string;  // new snow 3 days ago
  e: string;  // new snow 2 days ago
  f: string;  // new snow 1 day ago
  g: string;  // new snow today
  m: string;  // mid-mountain base
  t?: dateTime;   // time updated
  u: boolean; // updated
}
