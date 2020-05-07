import Entity from "./Entity";
import Sprite from "../components/Sprite";
import Sail from "../components/Sail";

export default class Boat extends Entity {
    constructor(x, y) {
        super(x, y)

        this.addComponent(new Sprite('boat'))
        this.addComponent(new Sail({x: 4, y: -16}))
    }

}