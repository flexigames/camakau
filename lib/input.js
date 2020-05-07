export const keysDown = {}


document.addEventListener("keydown", (e) => {
    e.preventDefault()
    keysDown[e.code] = true
})

document.addEventListener("keyup", (e) => {
    keysDown[e.code] = false
})
