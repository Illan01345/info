const links = document.querySelectorAll("nav a");
const current = location.pathname.split("/").pop();

links.forEach(link => {
  const linkPage = link.getAttribute("href").replace("./", "");

  if (linkPage === current) {
    link.classList.add("active");
  }
});