input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sword)
    gatorLog.begin(
    2021,
    10,
    27,
    12,
    7,
    0
    )
    gatorLog.mkDirectory("test")
    gatorLog.chDirectory("test")
    gatorLog.openCSVFile("test")
    loggen = true
    text_list = ["Temperatur in °C", "Lichtstärke in Lux"]
    gatorLog.writeRowToCSV(text_list, Header.YES)
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    loggen = false
})
let list: number[] = []
let text_list: string[] = []
let loggen = false
basic.showIcon(IconNames.Heart)
basic.clearScreen()
loggen = false
power.fullPowerOn(FullPowerSource.A)
power.fullPowerOn(FullPowerSource.B)
basic.forever(function () {
    if (loggen) {
        list = [input.temperature(), input.lightLevel()]
        gatorLog.writeRowToCSV(list, Header.YES)
        power.lowPowerPause(5000)
    }
})
