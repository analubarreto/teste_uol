function formatDate(date) {
  const createDate = new Date(date);
  return `${createDate.getDate()}/${createDate.getMonth()}/${createDate.getFullYear()}`
}

export default formatDate;
