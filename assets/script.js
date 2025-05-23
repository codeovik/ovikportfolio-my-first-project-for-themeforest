document.addEventListener("DOMContentLoaded", function () {
  //fetch navbar
  fetch('./assets/component/nav.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nav').innerHTML = data;
      nav();
    });
  //fetch statistics
  fetch('./assets/component/statistics.html')
    .then(res => res.text())
    .then(data => {
      const statisticsElement = document.getElementById('statistics');
      if (statisticsElement) {
        statisticsElement.innerHTML = data;
        statistics();
      }
    })

  // fetch skill
  fetch("./assets/component/skill.html")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.text();
    })
    .then(data => {
      document.getElementById("skill").innerHTML = data;
      skill(); // Call the skill function after loading the content
    })
    .catch(error => {
    });
  
  //fetch education
  fetch('./assets/component/education.html')
  .then(res => res.text())
    .then(data => {
      const educationElement = document.getElementById('education');
      if (educationElement) {
        educationElement.innerHTML = data;
        education();
      }
    })
  //fetch portfolio
  fetch('./assets/component/portfolio.html')
  .then(res => res.text())
  .then(data => {
    const x = document.getElementById('portfolio');
    if (x) {
      x.innerHTML = data;
      sr.reveal('.portfolio .card');
    }
  });

  //fetch about
  fetch('./assets/component/about.html')
    .then(res => res.text())
    .then(data => {
      // document.getElementById('about').innerHTML = data;
      let about = document.getElementById('about');
      if(about) {
        about.innerHTML = data;
      }
    });
  //fetch plan
  fetch('./assets/component/plan.html')
    .then(res => res.text())
    .then(data => {
      const x = document.getElementById('plan');
      if (x) {
        x.innerHTML = data;
        plan();
      }
    });
  //fetch form
  fetch('./assets/component/form.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('form').innerHTML = data;
      if (form) {
        form.innerHTML = data;
        form();
      }
    });
  //fetch footer
  fetch('./assets/component/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
      if (footer) {
        footer.innerHTML = data;
        footer();
      }
    });

  //typewriter
  let typeSkill = document.querySelector("#typeSkill");
  if(typeSkill) {
    var typed = new Typed("#typeSkill", {
    strings: ["Web Developer", "Freelancer", "Youtuber", "Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
  }
});

//all fuc of fetch html file
function plan() {
  sr.reveal('.plan-container .plan', {
    interval: 200
  })
}

function footer() {
  sr.reveal('footer', {
    distance: 0
  })
}

function education() {
  sr.reveal('.education .box', {
    // origin: 'left'
  })
}



function nav() {
  // get dark and light color from css variable
const mybg = getComputedStyle(document.documentElement).getPropertyValue('--mybg').trim();
const mytext = getComputedStyle(document.documentElement).getPropertyValue('--mytext').trim();

// get element colors for light and dark
const elementColorLight = getComputedStyle(document.documentElement).getPropertyValue('--myElementColorInLight').trim();
const elementColorDark = getComputedStyle(document.documentElement).getPropertyValue('--myElementColorInDark').trim();

let isLight = false;
let ElementBackground = "";

// DOM elements
const sunIcon = document.getElementsByClassName("fa-sun")[0];
const moonIcon = document.getElementsByClassName("fa-moon")[0];

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.documentElement.style.setProperty('--mybg', mytext);
  document.documentElement.style.setProperty('--mytext', mybg);
  isLight = true;
  ElementBackground = elementColorLight;
  sunIcon.style.display = "none";
  moonIcon.style.display = "inline-block";
} else {
  document.documentElement.style.setProperty('--mybg', mybg);
  document.documentElement.style.setProperty('--mytext', mytext);
  isLight = false;
  ElementBackground = elementColorDark;
  sunIcon.style.display = "inline-block";
  moonIcon.style.display = "none";
}
document.documentElement.style.setProperty('--secondary', ElementBackground);

// Toggle Theme
document.getElementById("darkBtn").addEventListener("click", () => {
  if (isLight) {
    document.documentElement.style.setProperty('--mybg', mybg);
    document.documentElement.style.setProperty('--mytext', mytext);
    localStorage.setItem("theme", "dark");
    sunIcon.style.display = "inline-block";
    moonIcon.style.display = "none";
    ElementBackground = elementColorDark;
  } else {
    document.documentElement.style.setProperty('--mybg', mytext);
    document.documentElement.style.setProperty('--mytext', mybg);
    localStorage.setItem("theme", "light");
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
    ElementBackground = elementColorLight;
  }
  document.documentElement.style.setProperty('--secondary', ElementBackground);
  isLight = !isLight;
});



  // Toggle Menu
  let navBtn = document.getElementById("navBtn");
  navBtn.addEventListener("click", (e) => {
    navBtn.classList.toggle("active");
    document.getElementById("mobileNavList").classList.toggle("active");
  });



  // ✅ current page বের করো
  const currentPage = location.pathname.split("/").pop().replace('./', '');
  // ✅ PC navbar link check
  const pcLinks = document.querySelectorAll("nav ul li a");
  pcLinks.forEach(link => {
    const linkPage = link.getAttribute("href").replace('./', '');
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("activenavforpc");
    }
  });

  // ✅ Mobile navbar link check
  const mobileLinks = document.querySelectorAll("#mobileNavList a");
  mobileLinks.forEach(link => {
    const linkPage = link.getAttribute("href").replace('./', '');
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("activenavformobile");
    }
  });

  // scroll animation for navbar
  // sr.reveal('nav li', {
  // origin: 'bottom',
  // distance: '20px',
  // duration: 800,
  // interval: 200,
  // delay: 100,
  // easing: 'ease-in-out'
  // })
  // sr.reveal('nav', {
  //   duration: 300,
  //   distance: '0px'
  // })
}

function statistics() {
  const counterSection = document.getElementById("counterSection");
  const counters = document.querySelectorAll(".counter");
  const duration = 5000; // Total animation duration in milliseconds

  let started = false;

  function startCounters() {
    if (started) return;
    started = true;

    counters.forEach(counter => {
      const start = 0;
      const target = +counter.getAttribute("data-target");
      const startTime = Date.now();

      const updateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1); // 0-1
        const current = Math.floor(progress * target);

        counter.innerText = current;

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "+"; // Ensure exact final value
        }
      };

      updateCount();
    });
  }

  // Intersection Observer setup
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startCounters();
      observer.unobserve(counterSection);
    }
  }, { threshold: 0.5 });

  observer.observe(counterSection);

  // scroll reveal js
  sr.reveal('.statistics .box', {
    interval: 200
  })
}

function skill() {
  // Initialize progress bars after content is loaded
  const progressBars = document.querySelectorAll('.skill-progress');

  if (progressBars.length === 0) {
    console.error("No progress bars found!");
    return;
  }

  // Reset all progress bars to 0 width without transition
  progressBars.forEach(bar => {
    bar.style.width = '0';
    bar.style.transition = 'none';
  });

  // Force reflow to ensure reset takes effect
  void progressBars[0].offsetHeight;

  // Add transition back
  progressBars.forEach(bar => {
    bar.style.transition = 'width 3s ease-out';
  });

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width') + '%';
          bar.style.width = targetWidth;

          // Animate percentage text
          const percentElement = bar.closest('.skill').querySelector('.skill-percent');
          let current = 0;
          const target = parseInt(bar.getAttribute('data-width'));
          const duration = 1500;
          const step = target / (duration / 16);

          const animatePercent = () => {
            current += step;
            if (current < target) {
              percentElement.textContent = Math.round(current) + '%';
              requestAnimationFrame(animatePercent);
            } else {
              percentElement.textContent = target + '%';
            }
          };

          animatePercent();
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  // Start observing
  const skillsSection = document.querySelector('.skills-section');
  if (skillsSection) {
    observer.observe(skillsSection);
  } else {
    console.error("Skills section not found!");
  }
}


function form() {
let saveBtn = document.getElementById('saveDraft');

if (saveBtn) {
  // Save draft when clicking the Save Draft button
  saveBtn.onclick = function (e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    localStorage.setItem('contactFormDraft', JSON.stringify(formData));
    alert('Draft saved!');
  };

  // Load saved draft when page loads
  const savedDraft = localStorage.getItem('contactFormDraft');
  if (savedDraft) {
    const formData = JSON.parse(savedDraft);
    document.getElementById('name').value = formData.name || '';
    document.getElementById('email').value = formData.email || '';
    document.getElementById('subject').value = formData.subject || '';
    document.getElementById('message').value = formData.message || '';
  }
}


  // scroll reveal animation
  sr.reveal('.form .child', {
    interval: 500
  })
}

// go top button
const goTop = document.getElementById("goTop");
  const circle = goTop.querySelector("circle");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = `${circumference}`;
  circle.style.strokeDashoffset = `${circumference}`;

  const showAfter = 300; // px scroll এর পর দেখা যাবে

  function updateProgress() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollY / docHeight;
    const offset = circumference - scrollPercent * circumference;
    circle.style.strokeDashoffset = offset;

    if (scrollY > showAfter) {
      goTop.classList.add("show");
    } else {
      goTop.classList.remove("show");
    }
  }

  // Smooth scroll animation
  goTop.addEventListener("click", function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // milliseconds
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function
    function ease(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  });

  window.addEventListener("scroll", updateProgress);
  updateProgress();


// scroll reveal js default behavior
let sr = ScrollReveal({
  distance: '0px',
  duration: 1000,
  delay: true,
  // reset: true,
  opacity: 0,
  easing: 'ease',
  origin: 'top',
  interval: 500
})

// homepage hero section scroll reveal
sr.reveal('.heroSection .rounded-t-full');

sr.reveal('.heroSection .text', {
  // delay: 500,
  interval: 500,
  distance: '100px'
})

// slider clients review scroll reveal
sr.reveal('.clients-section', {
  distance: '0px'
})
sr.reveal('.faq-item', {
  interval: 200
})


// portfolio page scrol reveal js
sr.reveal('main article', {
  interval: 200
})

sr.reveal('.portfolio_scroll_reveal_1', {
  interval: 200
})
sr.reveal('.portfolio_scroll_reveal_2')





// smooth scroll
const lenis = new Lenis({
  duration: 1.5, // scroll speed
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
  smooth: true,
  direction: 'vertical', // optional
  gestureDirection: 'vertical', // optional
  smoothTouch: false, // mobile smooth scroll
  touchMultiplier: 1.5, // mobile scroll speed
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)




// video pop up
const overlay = document.getElementById('videoOverlay');
const frame = document.getElementById('youtubeFrame');
function openPopup() {
  overlay.classList.add('active');
  // autoplay using YouTube API
  frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
function closePopup() {
  overlay.classList.remove('active');
  // pause the video using YouTube API
  frame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
