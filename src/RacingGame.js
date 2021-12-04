import Car from "./car.js";
export default class RacingGame {
    constructor(carNames, racingCount) {
        this.carNames = carNames;
        this.racingCount = racingCount;
        this.cars = [];

        this.$racingWinner = document.getElementById("racing-winner");

        this.makeCars(this.carNames, this.racingCount);
        this.winner = this.findWinner(this.cars);
        this.printWinner(this.winner);

    }

    makeCars(carNames) {
        for(let i = 0; i < carNames.length; i++) {
            const car = new Car(carNames[i]);
            this.cars.push(car);
        }
    }

    findWinner(cars) {
        let maxDistance = cars[0].totalDistance;
        let winner = [];

        for(let i = 0; i < cars.length; i++) {
            console.log(cars[i].totalDistance);

            if(cars[i].totalDistance === maxDistance) {
                winner.push(cars[i].carName);
            } else if(cars[i].totalDistance > maxDistance) {
                winner = [];
                winner.push(cars[i].carName);
                maxDistance = cars[i].totalDistance;
            }
        }
        console.log(winner);
        return winner;
    }

    printRacing() {
        let element = [];

        this.cars.forEach((car, index) => {
            element.push(car.carName + ": ");
        })

        for(let i = 0; i < this.racingCount; i++) {
            element.forEach((string, index) => {
                if(this.cars[index].moveArray[i] === true) {
                    element[index] += "-";
                }
                document.getElementById("app").insertAdjacentHTML('beforeend', `${element[index]}<br>`);
            })
            document.getElementById("app").insertAdjacentHTML('beforeend', `<br>`);
        }
    }

    printWinner(winner) {
        const winnerNames = winner.join();
        let element = `<span>최종 우승자: </span>`;

        element += `<span id="racing-winners">${winnerNames}</span><br>`; 
        this.printRacing();
        document.getElementById("app").insertAdjacentHTML('beforeend', element);
    }
}