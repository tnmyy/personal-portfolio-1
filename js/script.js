console.log(`Tanmay Upreti`);

let projects = document.getElementById(`projects`);

console.log(data[0]);

for (i = 0; i < data.length; i++) {
  // Div tag to contain images
  let imgDiv = document.createElement("div");
  imgDiv.classList.add("imgDiv");
  projects.appendChild(imgDiv);

  // Img tag for project section
  let imgElement = document.createElement("img");
  imgElement.src = `./img/${data[i].src}`;
  imgElement.alt = data[i].alt;
  imgElement.classList.add("projectImg");
  imgDiv.prepend(imgElement);

  // Div for project info

  let infoDiv = document.createElement("div");
  infoDiv.classList.add("projectInfo");
  imgDiv.append(infoDiv);

  // Project Title
  let projectTitle = document.createElement("h1");
  projectTitle.classList.add("projectTitle");
  projectTitle.innerHTML = `${data[i].title}`;
  infoDiv.appendChild(projectTitle);

  // Project Description
  let projectDescription = document.createElement("p");
  projectDescription.classList.add("projectDescription");
  projectDescription.innerHTML = `${data[i].description}`;
  infoDiv.appendChild(projectDescription);

  // Project Path
  let projectPath = document.createElement("a");
  projectPath.classList.add("projectPath");
  projectPath.classList.add("fas");
  projectPath.classList.add("fa-link");
  projectPath.href = `${data[i].path}`;
  infoDiv.appendChild(projectPath);
}

// Footer year

let footerYear = document.getElementById("year");
let newDate = new Date();

footerYear.innerHTML = newDate.getFullYear();

// Hamburger Navbar

const navBars = document.getElementById("navBars");
const list = document.getElementById("listItems");
const home = document.getElementById("home");
const about = document.getElementById("about");
const services = document.getElementById("services");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

const aboutLinkNav = document.getElementById("aboutLinkNav");
const servicesLinkNav = document.getElementById("servicesLinkNav");
const portfolioLinkNav = document.getElementById("portfolioLinkNav");
const contactLinkNav = document.getElementById("contactLinkNav");

// const responsiveNav = (mediaQuery) => {
//   if (mediaQuery.matches) {
//     navBars.style.visibility = "visible";
//     // window.location.reload();
//     console.log(143);
//   } else {
//     navBars.style.visibility = "hidden";
//   }
// };

// const mediaQuery = window.matchMedia("(width<= 780px)");
// responsiveNav(mediaQuery);
// mediaQuery.addEventListener("change", responsiveNav);

const mediaQuery = window.matchMedia("(max-width: 780px)");

const handleMediaQuery = (mediaQuery) => {
  if (mediaQuery.matches) {
    navBars.style.visibility = "visible";
    console.log(143);
  } else {
    navBars.style.visibility = "hidden";
  }
};

mediaQuery.addEventListener("change", handleMediaQuery);

handleMediaQuery(mediaQuery);

navBars.addEventListener("click", () => {
  navBars.classList.toggle("fa-times");
  navBars.classList.toggle("crossLinkChecker");
  list.classList.toggle("cross");
  home.classList.toggle("crossLink");

  aboutLinkNav.addEventListener("click", () => {
    about.classList.add("crossLink");
  });

  servicesLinkNav.addEventListener("click", () => {
    services.classList.add("crossLink");
  });

  portfolioLinkNav.addEventListener("click", () => {
    portfolio.classList.add("crossLink");
  });

  contactLinkNav.addEventListener("click", () => {
    contact.classList.add("crossLink");
  });

  if (navBars.classList.contains("crossLinkChecker")) {
    about.classList.remove("crossLink");
    services.classList.remove("crossLink");
    portfolio.classList.remove("crossLink");
    contact.classList.remove("crossLink");
  }
});

if (navBars.classList.contains("fa-times")) {
  about.classList.remove("crossLink");
  services.classList.remove("crossLink");
  portfolio.classList.remove("crossLink");
  contact.classList.remove("crossLink");
}

const sections = document.getElementById("sections");

sections.addEventListener("click", () => {
  if (navBars.classList.contains("fa-times")) {
    navBars.classList.remove("fa-times");
    list.classList.remove("cross");
    home.classList.remove("crossLink");
    about.classList.remove("crossLink");
    services.classList.remove("crossLink");
    portfolio.classList.remove("crossLink");
    contact.classList.remove("crossLink");
    console.log(`It contains`);
  } else {
    console.log(`it not`);
  }
});
