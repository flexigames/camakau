import Entity from "./Entity";
import Sprite from "../components/Sprite";

export default class Boat extends Entity {
    constructor(x, y) {
        super(x, y)

        this.addComponent(new Sprite('boat'))
    }

}