namespace SpriteKind {
    export const Goat = SpriteKind.create()
    export const StackGoat = SpriteKind.create()
}
let stackGoats: Sprite[] = [];
let goatImgs = [
img`
    . . . . . . . . . . . . f e e . 
    . . . . . . . . . . . . . e e . 
    . . . . . . . . . . . . d c d c 
    . . . . . . . . . . . . d d d d 
    e d d d d d d d d d d d d a d d 
    . d d d d d d d d d d d d d a a 
    . d d d d d d d d d d d d . . . 
    . d d d d d d d d d d d d . . . 
    . . d d d d d d d d d d . . . . 
    . . . d . d . . d . d . . . . . 
    . . . d . d . . d . d . . . . . 
    . . . e . e . . e . e . . . . . 
    `,
img`
    . . . . f f . . . . . . . . . . . . . 
    . . d f f d f . . . . . . . . . . . . 
    . 4 4 4 4 4 4 4 . . . . . . . . . . . 
    . . 1 4 4 1 . . . . . . . . . . . . . 
    . 4 4 4 4 4 4 . . . . . . . . . . . . 
    . 4 4 4 4 4 4 . . . . . . . . . . . . 
    4 4 4 2 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
    . 4 2 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    . . 2 . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . . . . . 4 2 4 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    . . . . . 4 . 4 . . . . . 2 . 4 . . . 
    `,
img`
    . . . . . . . . b b d . . d d b . . . 
    . . . . . . . . b b b b b b b b . . . 
    . . . . . . . . . b b d b b d . . . . 
    . . . . . . . . . . b b b b b c . . . 
    . b . . . . . . . b b b b b b b . . . 
    . b . . . . b b b b b b b b b b . . . 
    . c b b b b b b b b b b . . . . . . . 
    . c b b b b b b b b b b . . . . . . . 
    . . c b b b b b b b b b . . . . . . . 
    . . c c b b b b b b b c . . . . . . . 
    . . c c c c c c c c c c . . . . . . . 
    . . c . b . . . c c c c . . . . . . . 
    . . c . b . . . . b . c . . . . . . . 
    . . c . b . . . . b . c . . . . . . . 
    `,
img`
    . . . . . . . . . . . . e . . e . . . 
    . . . . . . . . . . . e e e e e e . . 
    . . . . . . . . . . e e e e e e e e . 
    . . . . . . . . . e e e e c c c e e e 
    . . . . . . . . . . . . c c b c . . . 
    . . . c c c c c c c c c c f b f c . . 
    . . c c b b b b b b b b b f b f . . . 
    . . c b b b c c c b b b b b b c . . . 
    . c c b b c b b b b b b f b b c . . . 
    c c b b c b b b b b b b b f f f . . . 
    c b b b b b b b b b b b c c c . . . . 
    c c c c c c c c c c c c c . . . . . . 
    . . . . c . c . . . c . c . . . . . . 
    . . . . c . c . . . c . c . . . . . . 
    `,
img`
    . . . 1 . . . . . . . . . . . . . . 
    . . 1 c c c . . . . . . . . . . . . 
    . 1 1 1 1 c c . . . . . . . . . . 1 
    1 1 f 1 c 1 c c . . . . . . . . . 1 
    1 1 1 c 1 1 c c 1 1 1 1 1 1 1 1 1 1 
    1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 . 
    . . . 1 c c 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . 1 . 1 . . . . . . . 1 . 1 . 
    . . . . c . c . . . . . . . c . c . 
    `,
img`
    .........................
    ff.............ff...ff...
    .ff............ffffff....
    ..ff............ff2f2ffff
    ...f............fffffffff
    ...f............ffffff...
    ...ff2f2ffffffffffffff...
    ....f2f22fffffffff.......
    ....f2ff2fffffffff.......
    ....ff22ffffffffff.......
    ....ffffffffffffff.......
    ....fffffffff222ff.......
    ....ffffffff2ff2ff.......
    ....ffffffff22f2ff.......
    ....fffffffff222f........
    .....f...f...f..f........
    .....f...f...f..f........
    .....f...f...f..f........
    `
]
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level`)
info.setLife(3)
let bottomGoat = sprites.create(goatImgs[randint(0, goatImgs.length - 1)], SpriteKind.StackGoat)
stackGoats.push(bottomGoat)
bottomGoat.setPosition(80, 600)
bottomGoat.ay = 300
scene.cameraFollowSprite(bottomGoat)
let topGoat: Sprite = null
topGoat = bottomGoat
let newGoat: Sprite = null
createGoat()


function createGoat(){
    newGoat = sprites.create(goatImgs[randint(0, goatImgs.length - 1)], SpriteKind.Goat)
    newGoat.setPosition(randint(20, 140), topGoat.y - 30)
    if (Math.percentChance(50)){
        newGoat.vx = randint(50, 80)
    }
    else{
        newGoat.vx = randint(-80, -50)
    }
    newGoat.setFlag(SpriteFlag.BounceOnWall, true)
}

controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    newGoat.vx = 0
    newGoat.ay = 300
})

sprites.onOverlap(SpriteKind.StackGoat, SpriteKind.Goat, function(sprite: Sprite, droppedGoat: Sprite) {
    droppedGoat.ay = 0
    droppedGoat.vy = 0

    if (theGoatLanded(droppedGoat)){
        droppedGoat.setKind(SpriteKind.StackGoat)
        stackGoats.push(droppedGoat)
        info.changeScoreBy(1)
        topGoat = droppedGoat
        scene.cameraFollowSprite(topGoat)

        if (theStackWillFall()){
            knockOverStack()
        }

        else{
            createGoat()
        }
    }
})

function theGoatLanded(droppedGoat: Sprite){
    if (droppedGoat.x < topGoat.left){
        droppedGoat.vx = -50
        droppedGoat.ay = 300
        return false
    }
    else if (droppedGoat.x > topGoat.right){
        droppedGoat.vx = 50
        droppedGoat.ay = 300
        return false
    }
    else{
        return true
    }
}

function theStackWillFall(){
    let xSum = 0
    for (let goat of stackGoats){
        xSum += goat.x
    }
    let xAverage = xSum/stackGoats.length

    if (xAverage < bottomGoat.left || xAverage > bottomGoat.right){
        return true
    }
    else{
        return false
    }
}

function knockOverStack(){
    for (let i = stackGoats.length - 1; i >= 0; i--){
        if (Math.percentChance(50)){
            stackGoats[i].vx = 50
        }
        else{
            stackGoats[i].vx = -50
        }
        stackGoats[i].ay = 300
        stackGoats[i].setFlag(SpriteFlag.DestroyOnWall, true)
    }

    pause(1000)
    game.over()
}

scene.onHitWall(SpriteKind.Goat, function(sprite: Sprite, location: tiles.Location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)){
        sprite.startEffect(effects.disintegrate, 100)
        sprite.destroy()
        info.changeLifeBy(-1)
        createGoat()
    }
})