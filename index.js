const StateMachine = require("javascript-state-machine");

var fsm = new StateMachine({
  init: "solid",
  data: {
    color: "red",
  },
  methods: {
    describe: function () {
      console.log("I am " + this.color);
    },
  },
  transitions: [
    { name: "melt", from: "solid", to: "liquid" },
    { name: "freeze", from: "liquid", to: "solid" },
    { name: "vaporize", from: "liquid", to: "gas" },
    { name: "condense", from: "gas", to: "liquid" },
  ],
  methods: {
    onMelt: function () {
      console.log(`I melted with color : ${this.color}`);
    },
    onFreeze: function () {
      console.log("I froze");
    },
    onVaporize: function () {
      console.log("I vaporized");
    },
    onCondense: function () {
      console.log("I condensed");
    },
  },
});

console.log(fsm.state);
fsm.melt();
console.log(fsm.state);
