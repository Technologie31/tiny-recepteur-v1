radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    } else if (receivedNumber == 2) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    } else if (receivedNumber == 3) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Right)
        basic.pause(100)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (receivedNumber == 4) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Left)
        basic.pause(100)
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    } else if (receivedNumber == 5) {
        Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
    }
})
basic.showString("R")
radio.setGroup(1)
