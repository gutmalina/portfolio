const panelContainer = document.querySelectorAll('.main')
let activePanelIndex = 0

panelContainer.style.transform = `translateY(-${activeSlideIndex * height}px)`;
