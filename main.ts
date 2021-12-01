input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sword)
    gatorLog.begin(
    2021,
    12,
    1,
    14,
    38,
    0
    )
    gatorLog.mkDirectory("UV-Messung")
    gatorLog.chDirectory("UV-Messung")
    gatorLog.openCSVFile("uv-messung")
    gatorLog.writeRowWithTextToCSV(["UV-Wert"], Header.JA)
    loggen = true
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    loggen = false
    power.lowPowerRequest()
})
let loggen = false
basic.showIcon(IconNames.Heart)
basic.clearScreen()
loggen = false
power.fullPowerOn(FullPowerSource.A)
power.fullPowerOn(FullPowerSource.B)
basic.forever(function () {
    while (loggen) {
        gatorLog.writeRowWithNumbersToCSV([pins.analogReadPin(AnalogPin.P0)], Header.NEIN)
        power.lowPowerPause(5000)
    }
})
