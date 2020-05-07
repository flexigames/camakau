import V from "../lib/vec2"
import * as PIXI from "pixi.js"
import { isArray } from "lodash"

export default class Entity {
  constructor(x, y, opts = {}) {
    const {
      tags = [],
    } = opts

    this.pos = V(x, y)

    this.container = new PIXI.Container(x, y)
    this.container.x = x
    this.container.y = y
    this.container.zIndex = y

    this.components = []

    this.tags = tags

    Entity.create(this)
  }

  update(dt) {
    this.components.forEach(component => component.update?.(dt))
  }

  addComponent(component) {
    component.parent = this
    component.game = Entity.game
    this.components.push(component)
    if (component.container) this.container.addChild(component.container)
  }

  setPosition(x, y) {
    if (!y) {
      y = x.y
      x = x.x
    }
    this.pos.x = x
    this.pos.y = y

    this.container.x = x
    this.container.y = y
    this.container.zIndex = y
  }

  destroy() {
    Entity.destroy(this)
  }

  is(tag) {
    return this.tags.includes(tag)
  }

  addToWorld(object) {
    Entity.world.addChild(object)
  }

  addTag (tag) {
    this.tags.push(tag)
  }

  static children = []

  static world

  static textures

  static init(world) {
    Entity.world = world
  }

  static create(entity) {
    Entity.children.push(entity)

    Entity.world.addChild(entity.container)
  }

  static destroy(entity) {
    const entityPos = Entity.children.indexOf(entity)
    if (entityPos === -1) return
    Entity.children.splice(entityPos, 1)

    Entity.world.removeChild(entity.container)
  }

  static updateAll(dt) {
    Entity.children.forEach((it) => it.update(dt))
  }

  static clear() {
    Entity.children = []
  }

  static find(tag) {
    if (!isArray(tag)) tag = [tag]
    return Entity.children.filter((entity) =>
      entity.tags.some((it) => tag.includes(it))
    )
  }
  static findOne(tag) {
    return Entity.find(tag)?.[0]
  }
}
