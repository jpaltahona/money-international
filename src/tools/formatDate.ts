export const formatDate = (date: Date) : string => {
  const day: string = date.getUTCDate().toString();
  const month:string = date.getUTCMonth().toString();
  const year: string = date.getUTCFullYear().toString();

  const fullDate = `${day}-${month}-${year}`;
  return fullDate;
};

export default formatDate;
