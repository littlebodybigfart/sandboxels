// first time making a mod lowkey nervous dk why
// **don't expect a single line of this to work. seriously.**

elements.slaked_lime.reactions.water.chance = 0.4 
elements.slaked_lime.reactions.water = { "elem1":"limewater", "elem2": "limewater"};

elements.limewater = {
  color: ["#3baaff"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 2211,
  burn: 100,
  burnInto: ["steam, slaked_lime"],
  tempLow: 0,
  reactions: {"carbon_dioxide": {elem1: "calcium_carbonate_solution", elem2: "" },
             },
};
elements.calcium_carbonate_solution = {
  color: ["#ffffff"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 2710,
  burn: 100,
  burnInto: ["steam, calcium_carbonate"],
}
elements.calcium_carbonate = {
  color: ["#ffffff, #e3e3e3"],
  behavior: behaviors.LIQUID,
  category: "liquids",
  state: "liquid",
  density: 2710,
  burn: 825,
  burnInto: ["molten"],
}

elements.molten_calcium_carbonate = {
    color: ["#f5190a", "#d4180b", "#f5190a", "#423f3e"],
    category: "powders",
    state: "solid",
    density: 2710,
    temp: 900,
    tempLow: 820,
    stateLow: "calcium_carbonate",
}

