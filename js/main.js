let heroTextTl;

function init() {
  heroTextObserver();
  heroTextAnimation();
}
init();

function heroTextAnimation() {
  heroTextTl = gsap.timeline({paused: true});

  heroTextTl.fromTo('.hero-text',
    {
      scale: 0.95,
    },
    {
      scale: 1,
    },
  );
  heroTextTl.from('.hero-text__text',
    {
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: {
        each: 0.2,
      },
    },
    ">-0.5",
  );
}

function heroTextObserver() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio === 1) {
          heroTextTl.play();
        }
      }
    });
  }, { threshold: [0, 1] });
  
  let element = document.querySelector('.hero-text');
  observer.observe(element);
}