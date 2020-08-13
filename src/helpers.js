export function serialize(obj) {
  let querString = "";
  for (let key in obj) {
    querString += `&${key}=${obj[key]}`;
  }
  return querString;
}
