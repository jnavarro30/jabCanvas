//Nav

const NavBar = (_ => {

    const init = _ => {
        listeners();
    }

    //Variables

    const fasIconEl = document.querySelector(".fas");
    const navEl = document.querySelector("nav");

    const listeners = _ => {
        console.log("working");
        fasIconEl.addEventListener("click", _ => {
            navEl.classList.toggle("hide");
            fasIconEl.classList.toggle("fa-bars");
            fasIconEl.classList.toggle("fa-times");
        })
    }

    return {
        init
    }
})();

NavBar.init();