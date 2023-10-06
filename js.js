
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


/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class 'accordion-open'
            - If it does, it removes class 'accordion-open'
            - If it doesn't, it:
                - Removes class 'accordion-open' from all containers
                - Adds class 'accordion-open' to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/

/*
         Mobile menu - Code Embed
         */

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app,
the mobile menu will still work*/

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


// Get references to service headings and content container
/* const serviceHeadings = document.querySelectorAll('[data-service]');
const serviceContent = document.getElementById('data-service-content');

// Add a click event listener to each service heading
serviceHeadings.forEach((heading) => {
  heading.addEventListener('click', (event) => {
    const selectedService = event.target.getAttribute('data-service');
    // Find the corresponding service content based on the selected service
    const contentToDisplay = document.querySelector(`[data-service-content="${selectedService}"]`);

    // Hide all service content
    serviceContent.querySelectorAll('[data-service-content]').forEach((content) => {
      content.style.display = 'none';
    });

    // Show the selected service's content
    contentToDisplay.style.display = 'block';
  });
});
 */

/* document.addEventListener('DOMContentLoaded', function () {
    const serviceHeadings = document.querySelectorAll('[data-service]');
    const serviceContent = document.querySelectorAll('[data-service-content]');

    // Add a click event listener to each service heading
    serviceHeadings.forEach((heading) => {
        heading.addEventListener('click', (event) => {
            const selectedService = event.currentTarget.getAttribute('data-service');

            // Hide all service content
            serviceContent.forEach((content) => {
                content.style.display = 'none';
            });

            // Show the selected service's content
            const contentToDisplay = document.querySelector(`[data-service-content="${selectedService}"]`);
            if (contentToDisplay) {
                contentToDisplay.style.display = 'block';
            }
        });
    });
}); */

document.addEventListener('DOMContentLoaded', function () {
    const serviceHeadings = document.querySelectorAll('[data-service]');
    const serviceContainers = document.querySelectorAll('[data-service-container]');

    // Add a click event listener to each service heading
    serviceHeadings.forEach((heading) => {
        heading.addEventListener('click', (event) => {
            const selectedService = event.currentTarget.getAttribute('data-service');

            // Remove active state from all headings
            serviceHeadings.forEach((head) => {
                head.classList.remove('feature-active');
            });

            // Add active state to the clicked heading
            event.currentTarget.classList.add('feature-active');

            // Hide all service containers
            serviceContainers.forEach((container) => {
                container.style.display = 'none';
            });

            // Show the selected service's container
            const containerToDisplay = document.querySelector(`[data-service-container="${selectedService}"]`);
            if (containerToDisplay) {
                containerToDisplay.style.display = 'flex'; // Use 'flex' to maintain the flexbox layout

                // Ensure the content inside the container is also displayed
                const contentToDisplay = containerToDisplay.querySelector(`[data-service-content="${selectedService}"]`);
                if (contentToDisplay) {
                    contentToDisplay.style.display = 'block';
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

    if (btn.textContent === "Submit") {
        // If you want to submit the form when the button says "Submit", you can do so here.
        // For now, we'll just toggle the form and button text.
        form.classList.remove("show");
        btn.textContent = "Get started";
    } else {
        form.classList.add("show");
        btn.textContent = "Submit";
    }
}


/* ------------slider----------------- */

var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');


var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 4;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        currentPosition++;
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};
/* ---------------------------------- */