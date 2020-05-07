import Entity from "./Entity";
import Sprite from "../components/Sprite";

export default class Water extends Entity {
    constructor (x, y) {
        super(x, y)

        this.container.zIndex = 0

        this.addComponent(new Sprite('water', {anchor: [0, 0]}))
    }
}