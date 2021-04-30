function Population() {
    this.foxes = []
    this.popSize = 100

    for (let i = 0; i < this.popSize; i++) {
        this.foxes[i] = new Fox();
    }

    this.run = () => {
        for (let i = 0; i < this.popSize; i++) {
            this.foxes[i].update()
            this.foxes[i].show()
        }
    }

    this.mateForKindess = () => {
        let sorted = [...this.foxes].sort((a, b) => (a.aggression < b.aggression) ? 1 : -1)
        let survivors = sorted.splice(sorted.length / 2)
        let shuffleKindAgents = this.shuffle(survivors)
        
        let pairs = []
        for (let i = 0; i < shuffleKindAgents.length; i+=2) {
            shuffleKindAgents[i].hasTarget = true
            shuffleKindAgents[i].target = shuffleKindAgents[i+1]
            shuffleKindAgents[i+1].hasTarget = true
            shuffleKindAgents[i+1].target = shuffleKindAgents[i]

            pairs.push([shuffleKindAgents[i], shuffleKindAgents[i+1]])
        }

        let daughters = []
        for (let i = 0; i < pairs.length; i++) {
            let avg = (pairs[i][0].aggression + pairs[i][1].aggression) / 2
            let daughterVal1 = avg + random(-0.01, 0.01)
            let daughterVal2 = avg + random(-0.01, 0.01)
            let daughterVal3 = avg + random(-0.01, 0.01)
            let daughterVal4 = avg + random(-0.01, 0.01)
            daughters.push(daughterVal1)
            daughters.push(daughterVal2)
            daughters.push(daughterVal3)
            daughters.push(daughterVal4)
        }
        
        for (let i = 0; i < this.foxes.length; i++) {
            this.foxes[i].aggression = daughters[i]
            this.foxes[i].pos = createVector(random(windowWidth), random(windowHeight))
        }
    }

    this.mateForAggression = () => {
        let sorted = [...this.foxes].sort((a, b) => (a.aggression > b.aggression) ? 1 : -1)
        let survivors = sorted.splice(sorted.length / 2)
        let shuffleKindAgents = this.shuffle(survivors)
        
        let pairs = []
        for (let i = 0; i < shuffleKindAgents.length; i+=2) {
            shuffleKindAgents[i].hasTarget = true
            shuffleKindAgents[i].target = shuffleKindAgents[i+1]
            shuffleKindAgents[i+1].hasTarget = true
            shuffleKindAgents[i+1].target = shuffleKindAgents[i]

            pairs.push([shuffleKindAgents[i], shuffleKindAgents[i+1]])
        }

        let daughters = []
        for (let i = 0; i < pairs.length; i++) {
            let avg = (pairs[i][0].aggression + pairs[i][1].aggression) / 2
            let daughterVal1 = avg + random(-0.01, 0.01)
            let daughterVal2 = avg + random(-0.01, 0.01)
            let daughterVal3 = avg + random(-0.01, 0.01)
            let daughterVal4 = avg + random(-0.01, 0.01)
            daughters.push(daughterVal1)
            daughters.push(daughterVal2)
            daughters.push(daughterVal3)
            daughters.push(daughterVal4)
        }
        
        for (let i = 0; i < this.foxes.length; i++) {
            this.foxes[i].aggression = daughters[i]
            this.foxes[i].pos = createVector(random(windowWidth), random(windowHeight))
        }
    }

    this.shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


    this.getAverageAggression = () => {
        let sum = 0
        for (let i = 0; i < this.foxes.length; i++) {
            sum += this.foxes[i].aggression
        }

        return sum / this.foxes.length
    }
}

