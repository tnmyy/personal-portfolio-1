console.log(`Tanmay Upreti`);

let projects = document.getElementById(`projects`);
console.log(projects);

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
console.log(`Tanmay Upreti`);
