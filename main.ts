/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo Carreras
 * Created on: Oct 2024
 * This program moves servo motor 
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

//0 degrees 
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoNumber1, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//175 deggres 
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoNumber1, 175)
    basic.clearScreen()
    basic.showString('175')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
