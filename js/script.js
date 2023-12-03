const allElements = document.querySelectorAll('.root');
const bodyElement = document.querySelector('body');

function addLastItemClassName () {
    allElements.forEach((element) => {
        element.lastElementChild.classList.add('last');
        const allLiElements = element.querySelectorAll('li > ul');
        allLiElements.forEach((element) => {
            element.lastElementChild.classList.add('last');
        })
    });
   bodyElement.classList.add('last_background');
}

addLastItemClassName();

function setFirstItemClassName(level) {
    allElements.forEach((element) => {
        switch (level) {
            case 1:
                element.firstElementChild.classList.add('first');
                break;
            case 2:
                const allLiElements = element.querySelectorAll('li > ul');
                allLiElements.forEach((element) => { element.firstElementChild.classList.add('first')});
                break;
        }
    });
    bodyElement.classList.add('first_background');
}

setFirstItemClassName(2);


