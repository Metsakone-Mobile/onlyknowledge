/*export const dateToSeconds = (date, time) => {
    console.log(date)
    console.log(time)
    const year = Number(date.slice(6, date.length)) * 31556926
    const month = Number(date.slice(3, 5)) * 2629743
    const day = Number(date.slice(0, 2)) * 604800
    const hours = Number(time.slice(0, 2)) * 3600
    const minutes = Number(time.slice(3, 5)) * 60
    return year + month + day + hours + minutes
  }*/

  export const dateToSeconds = (date, time) => {
    const [day, month, year] = date.split('.')
    const [hours, minutes, seconds] = time.split('.')
    const formedDate = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds)
    
    return Math.floor(formedDate.getTime() / 1000)
  }

