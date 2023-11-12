window.addEventListener("DOMContentLoaded", (event) => {
    // event.preventDefault();
    const nav = document.querySelector(".navbar");
    const btnlog = document.getElementById("btn-login");

    function bg() {
        if (window.scrollY >= 627 && window.scrollY <= 2220 || window.scrollY > 3320 && window.scrollY <= 4300) {
            nav.style.backgroundColor = "rgba(7, 6, 102, 255)";
            nav.style.transitionDuration = "0.3s";
        } else if (window.scrollY > 2220 && window.scrollY <= 3320 || window.scrollY > 4300) {
            nav.style.backgroundColor = "rgba(36, 5, 242, 255)";
            nav.style.transitionDuration = "0.3s";
        }
        else {
            nav.style.backgroundColor = "transparent";
            nav.style.transitionDuration = "0.3s";
        }
    }

    function btn() {
        if (window.scrollY >= 100) {
            btnlog.innerHTML = "DAFTAR";
           
        
        } else {
            btnlog.innerHTML = "LOGIN";
        }
    }
    window.addEventListener("scroll", bg);
    bg();
    window.addEventListener("scroll", btn);
    btn();

    const btn1 = document.getElementById("btnn1");
    const btn2 = document.getElementById("btnn2");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    btn1.addEventListener("click", () => {
        form1.classList.add("hidden");
        form2.classList.remove("hidden");
    });
    btn2.addEventListener("click", () => {
        form2.classList.add("hidden");
        form1.classList.remove("hidden");
    });
    function logic(event) {
        event.preventDefault();
        if (btnlog.innerText === "DAFTAR") {
            form1.classList.add("hidden");
            form2.classList.remove("hidden");
            document.getElementById("form").scrollIntoView({ behavior: "smooth" });
        } else {
            form2.classList.add("hidden");
            form1.classList.remove("hidden");
            document.getElementById("form").scrollIntoView({ behavior: "smooth" });
        }
    }
    btnlog.addEventListener("click", logic);
    logic();
});

