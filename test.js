const Employee = require('./employee');
const Manager = require('./manager');

const hobbes = new Manager("Hobbes", 1000000, "Founder");
const cal = new Manager("Calvin", 130000, "Director", hobbes);
const susie = new Manager("Susie", 100000, "TA Manager", cal);
const lily = new Employee("Lily", 90000, "TA", susie);
const cliff = new Employee("Clifford", 90000, "TA", susie);

console.log(hobbes.calculateBonus(0.05));
console.log(cal.calculateBonus(0.05));
console.log(susie.calculateBonus(0.05));
console.log(lily.calculateBonus(0.05));
console.log(cliff.calculateBonus(0.05));
