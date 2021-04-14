radio.onReceivedNumber(function (receivedNumber) {
    _1 = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.No)
    내수 = 1
    _1 = 1
})
input.onGesture(Gesture.Shake, function () {
    if (내수 == 1 && _1 == 1) {
        basic.showString("same")
    }
    if (내수 == 2 && _1 == 2) {
        basic.showString("same")
    }
    if (내수 == 3 && _1 == 3) {
        basic.showString("same")
    }
    if (내수 == 1 && _1 == 2) {
        basic.showString("win")
    }
    if (내수 == 2 && _1 == 3) {
        basic.showString("win")
    }
    if (내수 == 3 && _1 == 1) {
        basic.showString("win")
    }
    if (내수 == 3 && _1 == 2) {
        basic.showString("lose")
    }
    if (내수 == 2 && _1 == 1) {
        basic.showString("lose")
    }
    if (내수 == 1 && _1 == 3) {
        basic.showString("lose")
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    내수 = 3
    _1 = 3
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # . # . #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    내수 = 2
    _1 = 2
})
let 내수 = 0
let _1 = 0
radio.setGroup(100)
내수 = 0
_1 = 0
pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
