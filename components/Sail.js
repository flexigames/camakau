import * as PIXI from 'pixi.js'
import V from '../lib/vec2'
import state from '../lib/state'
import {keysDown} from '../lib/input'


export default class Sail {
    constructor({x, y}) {
        this.container = new PIXI.Container()

        this.direction = V(0, -1)

        this.speed = 0

        
        this.angle = Math.PI / 2

        const sail = new PIXI.Graphics()
        sail.lineStyle(2, 0x000000)
        sail.lineTo(0, -12)
        sail.x = x
        sail.y = y
        this.sail = sail
        this.container.addChild(sail)
    }

    update(dt) {
        this.sail.rotation = this.angle

        if (keysDown['ArrowLeft']) {
            this.angle += dt / 50
        } else if (keysDown['ArrowRight']) {
            this.angle -= dt / 50   
        }

        this.speed += Math.sin(state.windAngle - this.angle) * dt / 300

        const newPos = this.parent.pos.add(this.direction.multiply(this.speed))
        this.parent.setPosition(newPos.x, newPos.y)
    }
}