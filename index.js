const links = document.querySelectorAll("nav a");

let current = location.pathname.split("/").pop() || "index.html";

if (current === "info") {
  current = "index.html";
}

links.forEach(link => {
  const linkPage = link.getAttribute("href").replace("./", "");

  if (linkPage === current) {
    link.classList.add("active");
  }
});