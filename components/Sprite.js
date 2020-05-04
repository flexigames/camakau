import * as PIXI from 'pixi.js'
import { isArray } from "lodash"

export default class Sprite {
    constructor(textureName, opts = {}) {
        const {
            animationSpeed = 0,
            anchor = [0.5, 1]
        } = opts

        const texture = Sprite.textures[textureName]
        let sprite
        if (isArray(texture)) {
            sprite = new PIXI.AnimatedSprite(texture)
            sprite.play()
            sprite.animationSpeed = animationSpeed
        } else {
            sprite = new PIXI.Sprite(texture)
        }

        sprite.anchor.set(anchor[0], anchor[1])

        this.sprite = sprite

        this.container = sprite
    }

    changeTexture(textureName) {
        const texture = Sprite.textures[textureName]
        if (isArray(texture)) {
            this.sprite.textures = texture
            this.sprite.play()
        } else {
            this.sprite.texture = texture
        }
    }
}