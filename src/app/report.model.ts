export interface Report {
  i: number;  // index
  y: number;  // year to date
  w: number;  // seven day total
  a: number;  // new snow 6 days ago
  b: number;  // new snow 5 days ago
  c: number;  // new snow 4 days ago
  d: number;  // new snow 3 days ago
  e: number;  // new snow 2 days ago
  f: number;  // new snow 1 day ago
  g: number;  // new snow today
  m: number;  // mid-mountain base
  t?: string;   // time updated
  u: boolean; // updated?
}
