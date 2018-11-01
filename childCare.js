/*
Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.
*/

class ChildCare {

  constructor(props){
    this.child = props.child
    this.careGiver = props.careGiver
    this.desiredBehavior = {
      playing: true,
      eating: true,
      crying: false,
      napping: true,
    }
  }
  changeDiaper(){
    return `You can do it, ${this.careGiver}!`
  }

  set behavior (actions){
    this._behavior = {}
    actions.forEach(action=>{
      this._behavior[action] = actions[action];
    })
  }
  get behavior(){
    let goodCount = 0
    let badCount = 0
    for(const behavior in this._behavior){
      if(this._behavior[behavior]=== this.desiredBehavior[behavior]){
        goodCount += 1
        console.log(goodCount)
      } else {
        badCount +=1
        console.log(badCount)
      }
    }
    if (goodCount > badCount){
      return `${this.child} is very well behaved.`
    } else if (goodCount < badCount){
      return `${this.child} needs to work on their manners.`
    } else {
      return `${this.child} could improve but is well mannered.`
    }
  }
}

const newChild = new ChildCare({
  child: "Sally",
  careGiver: "Janet",
})

console.log(newChild)
console.log(newChild.changeDiaper())

newChild._behavior = {
  playing: true,
  eating: true,
  crying: true,
  napping: false,
}
console.log(newChild.behavior)

const anotherChild = new ChildCare ({
  child: "Tommy",
  careGiver: "Louis",
})

anotherChild._behavior = {
  playing: true,
  eating: false,
  crying: true,
  napping: false,
}
console.log(anotherChild.behavior)