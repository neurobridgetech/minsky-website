
/*
   Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you change pages inside your app,
   the Accordions will still work
*/
const listenForUrlChangesAccordion = () => {
    let url = location.href;
    document.body.addEventListener(
        'click',
        () => {
            requestAnimationFrame(() => {
                if (url !== location.href) {
                    runAccordionCodeEmbed();
                    url = location.href;
                }
            });
        },
        true
    );
};

const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = 'none'; // Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener('click', () => {
            if (accordionContents[index].style.display === 'flex') {
                accordionContents[index].style.display = 'none'; // Hides accordion content
                accordionIcons[index].style.transform = 'rotate(0deg)'; // Resets icon transform to 0deg (default)
            } else {
                accordionContents.forEach((accordionContent) => {
                    accordionContent.style.display = 'none'; // Hides all accordion contents
                });

                accordionIcons.forEach((accordionIcon) => {
                    accordionIcon.style.transform = 'rotate(0deg)'; // Resets all icon transforms to 0deg (default)
                });

                accordionContents[index].style.display = 'flex'; // Shows accordion content
                accordionIcons[index].style.transform = 'rotate(180deg)'; // Rotates accordion icon 180deg
            }
        });
    });
};

runAccordionCodeEmbed();
listenForUrlChangesAccordion();


const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener('click', () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
        true
    );
};

document.addEventListener('DOMContentLoaded', function () {
    const runMobileMenuCodeEmbed = () => {
        // Mobile menu
        const mobileMenu = document.querySelector('#mobile-menu')

        // Buttons
        const closeButton = document.querySelector('#close-mobile-menu')
        const openButton = document.querySelector('#open-mobile-menu')

        // On openButton click, set the mobileMenu position left to -100vw
        openButton && openButton.addEventListener('click', function () {
            mobileMenu.style.transform = 'translateX(0%)'
        })

        // On closeButton click, set the mobileMenu position to 0vw
        closeButton && closeButton.addEventListener('click', function () {
            mobileMenu.style.transform = 'translateX(100%)'
        })

        // Add event listener to all links in the mobile menu
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function () {
                // On link click, close the mobile menu
                mobileMenu.style.transform = 'translateX(100%)'
            })
        })
    }


    runMobileMenuCodeEmbed()
    listenForUrlChangesMobileMenu()
});


document.addEventListener('DOMContentLoaded', function () {
    const serviceHeadings = document.querySelectorAll('[data-service]');
    const serviceContainers = document.querySelectorAll('[data-service-container]');

    serviceHeadings.forEach((heading) => {
        heading.addEventListener('click', (event) => {
            const selectedService = event.currentTarget.getAttribute('data-service');
            serviceHeadings.forEach(head => head.classList.remove('feature-active'));
            event.currentTarget.classList.add('feature-active');

            serviceContainers.forEach((container) => {
                container.style.display = 'none';
            });

            const containerToDisplay = document.querySelector(`[data-service-container="${selectedService}"]`);
            if (containerToDisplay) {
                containerToDisplay.style.display = 'contents'; // Adjusted to flex
                containerToDisplay.style.flexDirection = 'column'; // Ensure vertical layout

                const contentToDisplay = containerToDisplay.querySelector(`[data-service-content="${selectedService}"]`);
                if (contentToDisplay) {
                    contentToDisplay.style.display = 'block';
                    contentToDisplay.style.flexGrow = '1'; // Ensure it can grow as needed
                    contentToDisplay.style.minWidth = '100%'; // Prevent squishing
                }
            }
        });
    });
});



/* 
document.getElementById("openFormButton").addEventListener("click", openForm);

function openForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
 */

function openForm() {
    const form = document.getElementById("popupForm");
    const btn = document.getElementById("openFormButton");
    const bannerContent = document.getElementById("banner-content");

    if (btn.textContent === "Submit") {
        form.style.display = "none";
        bannerContent.style.display = "block";
        btn.textContent = "Get started";
    } else {
        form.style.display = "block";
        bannerContent.style.display = "none";
        btn.textContent = "Submit";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const rotatingTexts = ['AI at just ₹100', 'LLMs', 'AI Text to Voice', 'AI Voice to Text'];
    let currentIndex = 0;
    const rotatingTextElement = document.getElementById('rotating-text');

    function typeText(text, callback) {
        let index = 0;
        const interval = setInterval(function () {
            rotatingTextElement.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(interval);
                setTimeout(callback, 2000);  // Wait for 2 seconds before starting the next word
            }
        }, 100);  // Speed of typing
    }

    function changeText() {
        rotatingTextElement.textContent = '';  // Clear current text
        typeText(rotatingTexts[currentIndex], function () {
            currentIndex = (currentIndex + 1) % rotatingTexts.length;
            changeText();
        });
    }

    changeText();
});

document.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.waveform-video');
    var button = document.querySelector('.video-control');

    button.addEventListener('click', function () {
        if (video.muted) {
            video.muted = false;
            video.currentTime = 0;
            video.play();
            button.textContent = 'Mute';
        } else {
            video.muted = true;
            button.textContent = 'Unmute';
        }
    });

    // Delayed autoplay
    setTimeout(function () {
        if (document.hasFocus()) {
            video.play();
        }
    }, 5000); // Delay in milliseconds, adjust as needed

    // Play/pause based on window focus
    window.onfocus = function () {
        if (!video.muted) {
            video.play();
        }
    };
    window.onblur = function () {
        video.pause();
    };
});


/* -- Background Dots */
/* document.addEventListener('DOMContentLoaded', () => {
    const homeContainer = document.querySelector('.home-container');
  
    homeContainer.addEventListener('mousemove', (e) => {
      const rect = homeContainer.getBoundingClientRect();
      const mouseX = e.clientX - rect.left; // x position within the element.
      const mouseY = e.clientY - rect.top;  // y position within the element.
  
      // Calculate percentage position
      const posX = (mouseX / rect.width) * 100;
      const posY = (mouseY / rect.height) * 100;
  
      // Adjust the background position
      homeContainer.style.backgroundPosition = `${posX}% ${posY}%`;
    });
  
    homeContainer.addEventListener('mouseleave', () => {
      homeContainer.style.backgroundPosition = 'center';
    });
  }); */


/* Particles */
/* var container = document.querySelector('.home-container'); */
var canvas = document.getElementById('test'),
    ctx = canvas.getContext('2d'),
    rate = 60,
    arc = 100, // Number of particles
    time = 0,
    speed = 5,
    parts = new Array(),
    colors = ['#896acb', '#f58a0b', 'yellow', '#f24aa3'];
var mouse = { x: 0, y: 0 };

// Set canvas dimensions to full viewport
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function create() {
    parts = [];
    for (var i = 0; i < arc; i++) {
        parts.push({
            x: Math.ceil(Math.random() * canvas.width),
            y: Math.ceil(Math.random() * canvas.height),
            toX: Math.random() * 5 - 1,
            toY: Math.random() * 2 - 1,
            c: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 6 // Random size up to 6
        });
    }
}

function particles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < arc; i++) {
        var li = parts[i];
        var distanceFactor = DistanceBetween(mouse, li);
        distanceFactor = Math.max(Math.min(15 - (distanceFactor / 10), 10), 1);

        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;

        if (i % 2 == 0) ctx.stroke();
        else ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > canvas.width) li.x = 0;
        if (li.y > canvas.height) li.y = 0;
        if (li.x < 0) li.x = canvas.width;
        if (li.y < 0) li.y = canvas.height;
    }

    if (time < speed) time++;
    setTimeout(particles, 1000 / rate);
}

function MouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

function DistanceBetween(p1, p2) {
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Resize canvas when window is resized
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    create();
});

canvas.addEventListener('mousemove', MouseMove, false);

create();
particles();



/* ---------------------------------- */