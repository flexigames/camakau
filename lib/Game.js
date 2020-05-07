import Boat from "../entities/Boat"
import Water from "../entities/Water"
import Wind from "./Wind"

export default class Game {
    constructor({stage, width, height}) {
        this.container = stage
        this.height = height
        this.width = width

        for (let x = 0;  x < 6; x++) {
            for (let y = 0; y < 5; y++) {
                new Water(29 * x, 35 * y)
            }
        }
        new Boat(100, 100)

        const wind = new Wind()
        wind.container.position.x = 10
        wind.container.position.y = 10
        this.container.addChild(wind.container)
    }

    update(dt) {}
}