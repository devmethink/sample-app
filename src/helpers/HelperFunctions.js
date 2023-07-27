export function isNullOrWhiteSpace(str) {
  return (
    typeof str === "undefined" || str === null || str.match(/^ *$/) !== null
  );
}

export function formatNumber(str) {
    return `${str}.00`;
  }