new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 1,
  }).mount()

  new Glide('.news_glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap: 20,
  }).mount()


new Glide('.glide_project', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  gap: 20,
}).mount()

let mission_modal = document.getElementById('mission__modal');
let missionModalClose = document.getElementById('mission__modal-close');
let missionModalOpen = document.getElementById('mission__modal-open');

missionModalOpen.onclick = function(){
  mission_modal.style.display = 'block';
  console.log('trigger');
}
missionModalClose.onclick = function(){
  mission_modal.style.display = 'none';
}

let hero_modal = document.getElementById('hero__modal');
let heroModalClose = document.getElementById('hero__modal-close');
let heroModalOpen = document.getElementById('hero__modal-open');

heroModalOpen.onclick = function(){
  hero_modal.style.display = 'block';
  console.log('trigger');
}
heroModalClose.onclick = function(){
  hero_modal.style.display = 'none';
}