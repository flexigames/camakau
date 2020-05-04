import Entity from "../entities/Entity"

export default class Game {
    constructor({stage, width, height}) {
        this.container = stage
        this.height = height
        this.width = width

        new Entity(100, 100, { sprite: 'boat' })
    }

    update(dt) {

    }
}