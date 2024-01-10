
import randomInt from "./RandomInt"

const ShuffleArray = (data) => {
  let newOrder = []
  let shuffledArray = []
  let randomNumberGenerated = null
  while(newOrder.length != data.length) {
    randomNumberGenerated = randomInt(data.length)
    if(newOrder.findIndex(o => o == randomNumberGenerated) == -1) {
      newOrder.push(randomNumberGenerated)
    }
  }
  newOrder.forEach(index => {
    shuffledArray.push(data[index])
  })
  return shuffledArray
}

export default ShuffleArray