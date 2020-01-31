export function convertTime(unixT) {
  const date = new Date(unixT * 1000)
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${date.getHours() % 12 === 0 ? 12 : date.getHours() % 12}:${date.getMinutes() < 10 ? `${date.getMinutes()}0` : date.getMinutes()} ${date.getHours() > 12 ? 'PM' : 'AM'}`
}