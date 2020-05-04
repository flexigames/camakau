import Boat from "../entities/Boat"
import Water from "../entities/Water"

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
    }

    update(dt) {}
}