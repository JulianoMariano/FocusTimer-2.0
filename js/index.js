import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonTimerUp,
  buttonTimerDown,
  buttonSoundFlorest,
  buttonSoundRain,
  buttonSoundCoffe,
  buttonSoundFire,
  minutesDisplay,
  secondsDisplay } 
from "./variaveis.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonTimerUp,
  buttonTimerDown
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound() 

buttonPlay.addEventListener('click', function(){
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonSet.addEventListener('click', function(){
  let newMinutes =  controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

buttonTimerUp.addEventListener('click', function(){
  timer.timerIncrease()
})

buttonTimerDown.addEventListener('click', function(){
  timer.timerDecrease()
})

buttonSoundFlorest.addEventListener('click', function() {
  sound.buttonPressCardOne()
})

buttonSoundRain.addEventListener('click', function() {
  sound.buttonPressCardTwo()
})

buttonSoundCoffe.addEventListener('click', function() {
  sound.buttonPressCardTre()
})

buttonSoundFire.addEventListener('click', function() {
  sound.buttonPressCardFour()
})