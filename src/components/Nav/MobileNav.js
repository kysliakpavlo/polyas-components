window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger")
  const mobileNav = document.getElementById("mobile-nav")

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true"
    hamburger.setAttribute("aria-expanded", isOpen ? "false" : "true")

    if (!isOpen) {
      mobileNav.querySelectorAll("[aria-haspopup='menu']").forEach((item) => {
        item.setAttribute("aria-expanded", "false")
      })
    }
  })

  mobileNav.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      hamburger.setAttribute("aria-expanded", "false")
    }
  })

  mobileNav.querySelectorAll("[aria-haspopup='menu']").forEach((item) => {
    item.addEventListener("click", () => {
      const isToggled = item.getAttribute("aria-expanded") === "true"
      item.setAttribute("aria-expanded", isToggled ? "false" : "true")

      // close button
      item.nextElementSibling
        ?.querySelector("li:first-child > button")
        .addEventListener("click", () => {
          item.setAttribute("aria-expanded", "false")
        })
    })
  })
})
