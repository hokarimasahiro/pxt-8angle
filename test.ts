let colors = [
    angle8.getColor(0, 0, 255),
    angle8.getColor(0, 255, 0),
    angle8.getColor(0, 255, 255),
    angle8.getColor(255, 0, 0),
    angle8.getColor(255, 0, 255),
    angle8.getColor(255, 255, 0),
    angle8.getColor(255, 255, 255),
    angle8.getColor(0, 0, 255),
    angle8.getColor(0, 255, 0)
]
basic.forever(function () {
    for (let カウンター = 0; カウンター <= 7; カウンター++) {
        angle8.setColor(カウンター, colors[カウンター], (255 - angle8.input8(カウンター)) / 8)
    }
    angle8.setColor(8, colors[8], angle8.inputSW() * 32)
    basic.pause(100)
})
