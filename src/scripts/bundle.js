import $ from 'jquery' // ES6 syntax
import slider from './modules/slider'

$('html').removeClass('no-js')


$(() => {
  slider.init()

})
