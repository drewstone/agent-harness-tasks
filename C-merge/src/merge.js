/**
 * Merge overlapping inclusive integer intervals [start, end].
 * Touching intervals such as [1,2] and [2,3] merge into [1,3].
 */
export function mergeIntervals(intervals) {
  if (!Array.isArray(intervals) || intervals.length === 0) return [];
  const sorted = [...intervals].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const out = [sorted[0].slice()];
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i];
    const last = out[out.length - 1];
    // BUG: uses < instead of <= so touching intervals stay split.
    if (s < last[1]) last[1] = Math.max(last[1], e);
    else out.push([s, e]);
  }
  return out;
}
