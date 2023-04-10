const letterList = document.querySelectorAll('.greeting__letter');

letterList.forEach((letter, item)=>{
  const count = item/9
  letter.style.setProperty('animation', `loadingLetter 0.5s linear ${count}s forwards`)
})
