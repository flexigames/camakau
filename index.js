import * as PIXI from 'pixi.js'
import WebFont from 'webfontloader'
import Sprite from './components/Sprite'
import Entity from './entities/Entity'
import Game from './lib/Game'
import parseTextures from './lib/parse-textures'

const SPRITESHEET = 'spritesheet.json'

const width = 166
const height = 144

function start() {
  const app = createApp()
  app.loader.add(SPRITESHEET).load(setup)

  function setup(loader, resources) {
    const textures = parseTextures(resources[SPRITESHEET].textures)
    Sprite.textures = textures

    app.stage.sortableChildren = true

    app.ticker.add(gameLoop)

    window.stage = app.stage

    Entity.init(app.stage)
    Entity.game = game

    const game = new Game({ stage: app.stage, width, height })

    function gameLoop(dt) {
      Entity.updateAll(dt)
      game.update(dt)
    }
  }
}

function createApp() {
  const app = new PIXI.Application({
    width,
    height,
    backgroundColor: 0x000000,
    antialias: true,
    resolution: 6,
  })

  document.body.appendChild(app.view)

  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

  return app
}

WebFont.load({
  custom: {
    families: ['Silkscreen'],
    urls: ['assets/fonts/fonts.css'],
  },
  active: start,
})
