document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const url = link.getAttribute("href");

    if (url && !url.startsWith("#") && !url.startsWith("mailto")) {
      link.addEventListener("click", e => {
        e.preventDefault();

        document.body.classList.remove("fade-in");
        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location = url;
        }, 300);
      });
    }
  });
});

function toggleTheme(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

window.onload = function(){

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
}

}
