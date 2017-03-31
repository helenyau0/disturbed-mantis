export default function bubbleSort(data) {
  let array = data.length

  for(let i = 0; i < array; i++) {
    for(let n = 0; n < array; n++) {
      if(data[i] < data[n]) {
        let temp = data[i]
        data[i] = data[n]
        data[n] = temp
      }
    }
  }

  return data
}
