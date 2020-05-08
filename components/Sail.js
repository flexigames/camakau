import * as PIXI from 'pixi.js'
import V from '../lib/vec2'
import state from '../lib/state'
import { keysDown } from '../lib/input'


export default class Sail {
    constructor({ x, y }) {
        this.container = new PIXI.Container()

        this.direction = V(0, -1)

        this.speed = 0

        this.friction = 0.01


        this.angle = Math.PI

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
            this.angle = Math.min(this.angle + dt / 50, 3/2 * Math.PI)
        } else if (keysDown['ArrowRight']) {
            this.angle = Math.max(this.angle - dt / 50, Math.PI/2)
        }

        this.speed += Math.abs(Math.sin(state.windAngle - this.angle) * dt / 300)
        this.speed *= (1 - this.friction)

        this.parent.container.rotation += (state.windAngle - this.angle) / 200

        const newPos = this.parent.pos.add(this.direction.multiply(this.speed))
        this.parent.setPosition(newPos.x, newPos.y)
    }
}