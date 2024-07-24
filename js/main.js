let heroTextTl;
let missionTextTl;

function init() {
  heroText();
  missionText();
}
init();

function heroText() {
  heroTextObserver();
  heroTextAnimation();  
}

function heroTextAnimation() {
  heroTextTl = gsap.timeline({paused: true});

  // Circle
  heroTextTl.fromTo('.circle-left img',
    {
      x: -50,
      opacity: 0,
      scale: 0.9
    },
    {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.5,
    },
  );

  // Text wrapper
  heroTextTl.fromTo('.hero-text',
    {
      scale: 0.95,
    },
    {
      scale: 1,
    },
    ">-0.5",
  );

  // Text words
  heroTextTl.from('.hero-text__text',
    {
      duration: 1.5,
      x: 50,
      opacity: 0,
      stagger: {
        each: 0.1,
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

function missionText() {
  missionTextObserver();
  missionTextAnimation();
}

function missionTextObserver() {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.intersectionRatio === 1) {
          missionTextTl.play();
        }
      }
    });
  }, { threshold: [0, 1] });
  
  let element = document.querySelector('.mission-text');
  observer.observe(element);
}

function missionTextAnimation() {
  missionTextTl = gsap.timeline({paused: true});
  const missionText = document.querySelectorAll('.mission-text__text');

  // Text wrapper
  missionTextTl.from(missionText,
    {
      duration: 1,
      x: 50,
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    },
  );
}