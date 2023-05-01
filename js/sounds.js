export default function() {

  const buttonPressCardFlorest = new Audio ('https://github.com/JulianoMariano/FocusTimer-2.0/blob/main/assets/Florest.mp3')

  const buttonPressCardRain = new Audio ('https://github.com/JulianoMariano/FocusTimer-2.0/blob/main/assets/Rain.mp3')

  const buttonPressCardCoffe = new Audio ('https://github.com/JulianoMariano/FocusTimer-2.0/blob/main/assets/Coffe.mp3')

  const buttonPressCardFire = new Audio ('https://github.com/JulianoMariano/FocusTimer-2.0/blob/main/assets/Fire1.wav')
alter
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")

  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  
  function buttonPressCardOne() {
    buttonPressCardFlorest.play()
    buttonPressCardRain.pause()
    buttonPressCardCoffe.pause()
    buttonPressCardFire.pause()
  }
  
  function buttonPressCardTwo() {
    buttonPressCardRain.play()
    buttonPressCardFlorest.pause()
    buttonPressCardCoffe.pause()
    buttonPressCardFire.pause()
  }
  
  function buttonPressCardTre() {
    buttonPressCardCoffe.play()
    buttonPressCardFlorest.pause()
    buttonPressCardRain.pause()
    buttonPressCardFire.pause()
  }
  
  function buttonPressCardFour() {
    buttonPressCardFire.play()
    buttonPressCardFlorest.pause()
    buttonPressCardRain.pause()
    buttonPressCardCoffe.pause()
  }
  
  function pressButton() {
    buttonPressAudio.play()
  }
  
  function timeEnd() {
    kitchenTimer.play()
  }
  
  function buttonCardPaused(){
    buttonPressCardFlorest.pause()
  }
  
  return {
    buttonPressCardOne,
    buttonCardPaused,
    buttonPressCardTwo,
    buttonPressCardTre,
    buttonPressCardFour,
    pressButton,
    timeEnd
  }
}