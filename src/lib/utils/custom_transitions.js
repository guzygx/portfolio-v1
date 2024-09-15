import { cubicInOut } from 'svelte/easing'

export const rightSlide = (node) => {
  return {
    easing: cubicInOut,
    delay:  100,
    css: (t, u) => `transform: translateX(${u * 100}%)`
  };
}  

export const backSlide = (node) => {
  return {
    easing: cubicInOut,
    css: (t, u) => `transform: translateY(${u * 100}%)`
  };
}