/**
 * Return true when hostname is on the allowlist.
 * Matching is case-insensitive and ignores a single leading "*.' for wildcards
 * such as "*.example.com".
 */
export function isAllowed(hostname, allowlist) {
  const host = String(hostname || "").toLowerCase();
  // BUG: suffix check without a dot boundary — "notexample.com" matches "example.com".
  return allowlist.some((entry) => {
    const rule = String(entry).toLowerCase().replace(/^\*\./, "");
    return host === rule || host.endsWith(rule);
  });
}
