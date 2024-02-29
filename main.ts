let drejefart = 0
let ekstraFart = 9
let x = 350
let fart = 25
let afstandTilObjekt = 8
let maxFart = 35
basic.forever(function () {
    afstandTilObjekt = maqueen.Ultrasonic(PingUnit.Centimeters)
    fart = afstandTilObjekt + ekstraFart
    if (afstandTilObjekt < 15) {
        drejefart = x / afstandTilObjekt
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, drejefart)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, drejefart)
    } else {
        if (fart > maxFart) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, maxFart)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, fart)
        }
    }
})
