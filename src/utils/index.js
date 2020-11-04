export const GMTToLocal = (gmtString) => {
  const dt = new Date(gmtString);
  return `${dt.toDateString()} ${dt.getHours()} : ${dt.getMinutes()}`;
  // const hours = dt.getHours(); // Will be local time
  // const minutes = dt.getMinutes(); // Will be local time
  // console.log(hours, minutes);
};
