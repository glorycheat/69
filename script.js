// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){ target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

// ParticleJS — red theme
particlesJS("particles-js",{
  "particles":{
    "number":{"value":100,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#ff0000"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5,"random":true},
    "size":{"value":3,"random":true},
    "line_linked":{"enable":true,"distance":120,"color":"#ff0000","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":3}
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{"enable":true,"mode":"repulse"},
      "onclick":{"enable":true,"mode":"push"}
    },
    "modes":{
      "repulse":{"distance":100},
      "push":{"particles_nb":4}
    }
  },
  "retina_detect":true
});

// Hover particle effect on resource cards
document.querySelectorAll('.resource-card').forEach(card=>{
  card.addEventListener('mouseenter',()=>{ pJSDom[0].pJS.particles.move.speed=5; });
  card.addEventListener('mouseleave',()=>{ pJSDom[0].pJS.particles.move.speed=3; });
});
