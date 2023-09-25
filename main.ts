OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P8, 3, NeoPixelMode.RGB)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        basic.showIcon(IconNames.No)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        OLED.writeStringNewLine("Motion Detected!")
        music.play(music.stringPlayable("B - B - B - B - ", 120), music.PlaybackMode.UntilDone)
    } else {
        basic.showIcon(IconNames.Happy)
        OLED.clear()
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
})
