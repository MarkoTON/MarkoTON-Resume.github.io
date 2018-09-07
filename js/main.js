window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 1500,
  origin: 'top'
});
sr.reveal('.header', {
  duration: 1500,
  origin: 'top'
});
sr.reveal('.col-md-7', {
  duration: 1500,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.col-md-5', {
  duration: 1500,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.my-career', {
  duration: 1500,
  origin: 'bottom'
});
sr.reveal('#about', {
  duration: 1500,
  origin: 'bottom',
  viewFactor: 0.4
});
sr.reveal('#experience .col-md-6', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#skills', {
  duration: 1500,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#education', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#activities', {
  duration: 1500,
  origin: 'top',
  distance: '300px',
  viewFactor: 0.1
});
sr.reveal('#personInfoGithubRepository', {
  duration: 1000,
  viewFactor: 0.1,
  origin: 'bottom',
}, 1000);

$(function () {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
});

function arrUp() {
  let arrUpGo;
  arrUpGo = document.getElementById("div1");
  arrUpGo.innerHTML = "&#xf102;";
  setTimeout(function () {
    arrUpGo.innerHTML = "&#xf106;";
  }, 500);
  setTimeout(function () {
    arrUpGo.innerHTML = "&#xf102;";
  }, 1000);
}
arrUp();
setInterval(arrUp, 1500);

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Stampanje podataka //
function onClickPrint(){
  // Hvatanje JSON-a i konvertovanje
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(xhttp.responseText);
      let infoCV = response[0];
      let outputInfo;
      let outputInfoSocNetw = '';
      let outputInfoSocNetw2 = '';
      let outputInfoGithubRepository = '';
      
      outputInfo = `
      <h1 class="font-weight-bold">${infoCV.name}</h1>
      <p class="lead">${infoCV.address}</p>
      <p class="lead">${infoCV.phone}</p>
      `;
      
      let socialNetworks = infoCV.socialNetworks;
      for (let i = 0; i <= 2; i++) {
        let obj = socialNetworks[i];
        outputInfoSocNetw += `
        <p class="lead">
        <a target="_blank" href="${obj.address}">
        <i class="${obj.icon}"></i> ${obj.name}
        </a>
        </p>
        `;
      }
      
      for (let i = 3; i <= 4; i++) {
        let obj2 = socialNetworks[i];
        outputInfoSocNetw2 += `
        <p class="lead">
        <a target="_blank" href="${obj2.address}">
        <i class="${obj2.icon}"></i> ${obj2.name}
        </a>
        </p>
        `;
      }
      
      let githubRepository = infoCV.githubRepository;
      for (let i = 0; i < githubRepository.length ; i++) {
        let objGitHub = githubRepository[i];
        outputInfoGithubRepository += `
        <div class="col-sm-2 col-md-2">
           <a href="${objGitHub.link}" target="_blank">
              <img src="${objGitHub.imageLink}" alt="" class="rounded-square">
           </a>
        </div><!--  col-md-2 -->
        `;
      }
      
      document.getElementById('personInfo').innerHTML = outputInfo;
      document.getElementById('personInfoSocNetw').innerHTML = outputInfoSocNetw;
      document.getElementById('personInfoSocNetw2').innerHTML = outputInfoSocNetw2;
      document.getElementById('personInfoGithubRepository').innerHTML = outputInfoGithubRepository;
    }
  };
  
  xhttp.open("GET", "json/info.json", true);
  xhttp.send();
}

onClickPrint();

// Stampanje Teksta //

function printText(){
  // Hvatanje JSON-a i konvertovanje
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = xhttp.responseText;
      let text = response;
      document.getElementById("textInfo").innerHTML = text;
      console.log(text);
    }
  };
  xhttp.open("GET", "json/data.txt", true);
  xhttp.send();
}

printText();