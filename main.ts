makerbit.onIrDatagram(function () {
    if (makerbit.irButton() == makerbit.irButtonCode(IrButton.Number_1)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
makerbit.connectIrReceiver(DigitalPin.P0, IrProtocol.NEC)
