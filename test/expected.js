function Person$631(name$633) {
    this.name = name$633;
}
Person$631.prototype.say = function say(msg$634) {
    console.log(this.name + ' says: ' + msg$634);
};
var bob$632 = new Person$631('Bob');
bob$632.say('Macros are sweet!');
