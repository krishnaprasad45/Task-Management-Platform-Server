import moment from "moment";



export async function formatDate(timestampString: string) {
  const timestamp = Number(timestampString);
  if (isNaN(timestamp)) {
    throw new Error('Invalid timestamp');
  }

  const date = moment(timestamp);
  return date.format('MMMM D, YYYY'); 
}
module.exports = { formatDate };