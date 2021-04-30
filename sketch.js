var population
let kindButton;
let aggressionButton;
let generation = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  population = new Population()
  kindButton = createButton('Breed for Kindness')
  kindButton.position(0, 0)
  kindButton.mousePressed(kindnessClicked)
  agressionButton = createButton('Breed for Agression')
  agressionButton.position(150, 0)
  agressionButton.mousePressed(agressionClicked)
  textSize(32);
  fill(0, 255, 0);
  
}

function draw() {
  background(33, 33, 33);
  population.run()
  let generationText = "Generation: " + generation
  text(generationText, 10, 60);
  text(population.getAverageAggression(), 10, 90);

}

function kindnessClicked() {
  // console.log(population.mate("kindness"))
  population.mateForKindess()
  generation += 1
}

function agressionClicked() {
  population.mateForAggression()
  generation += 1
}