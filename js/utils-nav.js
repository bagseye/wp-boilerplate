export const navButton = document.querySelector("#navigationButton");

export function toggleNav() {
  const body = document.body;
  if (body.classList.contains("headernavigation__open")) {
    body.classList.remove("headernavigation__open");
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    navButton.setAttribute("aria-expanded", "false");
  } else {
    body.classList.add("headernavigation__open");
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    navButton.setAttribute("aria-expanded", "true");
  }
}

export function trackScrollPosition() {
  document.documentElement.style.setProperty(
    "--scroll-y",
    `${window.scrollY}px`
  );
}
