//1
function createInstructor(firstName, lastName) {return {firstName, lastName}};
//2
let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
}
//3
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  }
}
//5

const createAnimal = (species, verb, noise) => {
  return {
    species,
    [verb]() {
      return noise;
    }
  }
}

