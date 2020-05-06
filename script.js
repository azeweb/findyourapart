let stpbl1 = document.getElementById("stepbl1");
let stpbrdr1 = document.getElementById("stepbrdr1");

let stpbl2 = document.getElementById("stepbl2");
let stpbrdr2 = document.getElementById("stepbrdr2");

let stpbl3 = document.getElementById("stepbl3");
let stpbrdr3 = document.getElementById("stepbrdr3");


stpbl1.onmouseover = function() {
    stpbrdr1.style.borderBottom = "3px solid white";
}
stpbl1.onmouseout = function() {
    stpbrdr1.style.borderBottom = "3px solid black";    
}

stpbl2.onmouseover = function() {
    stpbrdr2.style.borderBottom = "3px solid white";
}
stpbl2.onmouseout = function() {
    stpbrdr2.style.borderBottom = "3px solid black";    
}

stpbl3.onmouseover = function() {
    stpbrdr3.style.borderBottom = "3px solid white";
}
stpbl3.onmouseout = function() {
    stpbrdr3.style.borderBottom = "3px solid black";    
}


(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();

    

}());
