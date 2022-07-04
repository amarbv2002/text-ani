const tl = gsap.timeline({ defaults: { duration: 0.75, ease: "power3.out" } })

tl.fromTo(".slider", { scale: 1.2, borderRadius: 0 }, { scale: 1, borderRadius: 30, duration: 2.8, ease: "elastic.out(1.7, 1)" })

tl.fromTo(".text1", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0 }, "<30%")
tl.fromTo(".text3", { opacity: 0, x: "100%" }, { opacity: 1, x: 0 }, "<30%")
tl.fromTo(".text2", { opacity: 0, y: "-100%" }, { opacity: 1, y: 0 }, "<30%")
tl.fromTo(".text4", { opacity: 0, x: "-100%" }, { opacity: 1, x: 0 }, "<30%")
tl.fromTo(".text6", { opacity: 0, x: "100%" }, { opacity: 1, x: 0 }, "<30%")
tl.fromTo(".text5", { opacity: 0, y: "-100%" }, { opacity: 1, y: 0 }, "<30%")

tl.fromTo(".btn", { opacity: 0, y: "30" }, { opacity: 1, y: 0 }, "<30%")

// Single text animation

const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");

logo.textContent = ""

letters.forEach((letter) => {
    logo.innerHTML += '<span class="letters">' + letter + "</span>"
})

gsap.set(".letters", { display: "inline-block" });
gsap.fromTo(
    ".letters",
    { y: "100%" },
    { y: 0, delay: 2.7, stagger: 0.05, ease: "back.out(3)" }
);