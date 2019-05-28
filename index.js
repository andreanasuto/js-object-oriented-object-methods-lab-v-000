function boardMembers(name, homestate, training) {
  this.name = name
  this.homeState = home_state
  this.training = training
  this.veto = function veto() { return "No, I must disagree" }
  this.approve = function approve () { return }
  this.sayHi = function () { return "Hi, my name is ${name}. I am from {home_state}, and I was trained in {training}."}
}
"I like to help people.""You can do that!"
"You will see great things from Scuber."
