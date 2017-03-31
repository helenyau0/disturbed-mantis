export default function bubbleSort(data) {
  for(let i = 0; i < data.length; i++) {
    for(let n = 0; n < data.length; n++) {
      if(data[i] < data[n]) {
        let temp = data[i]
        data[i] = data[n]
        data[n] = temp
      }
    }
  }

  return data
}
