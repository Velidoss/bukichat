const getCurrentDate = () => {
  const date = new Date(Date.now());
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDay() + 1}`.padStart(2, '0');
  const hours = `${date.getHours() + 1}`.padStart(2, '0');
  const minutes = `${date.getMinutes() + 1}`.padStart(2, '0');
  const seconds = `${date.getSeconds() + 1}`.padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export default getCurrentDate;
