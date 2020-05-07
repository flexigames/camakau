import * as PIXI from 'pixi.js'
import V from './vec2'
import Entity from '../entities/Entity'
import state from './state'

export default class Wind {
    constructor() {
        this.container = new PIXI.Container()

        const angle = state.windAngle
        const speed = state.windSpeed

        this.wind = V(Math.sin(angle), Math.cos(angle)).multiply(speed)

        const arrow = new PIXI.Graphics()
        arrow.lineStyle(1, 0x000000)
        arrow.lineTo(this.wind.x, this.wind.y)
        this.container.addChild(arrow)

    }
}