//// Smooth Scrolling ////
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


//// Povratak na TOP ////
window.onscroll = function() {myFunction()};
function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//// Animacija Strelice ////
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

//// Stampanje podataka ////
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
      
      for (let i = 3; i <= 5; i++) {
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

//// Stampanje Teksta //
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

//// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
    
//     let dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

//// Menu Button X
function myMenuBtn(x) {
  x.classList.toggle("change");
}

function myMenuOverlay(overlayToogle){
  overlayToogle.classList.toggle("overlay-toggle");
}

// //// Nav Open
// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }
// //// Nav Close
// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }


//// Toglovanje klasa da se dobije prozirni NAVBAR
$(function() {
  //caches a jQuery object containing the header element
  let getHeader = $(".clearHeader");
  let getProgress = $(".progressHeader");
  $(window).scroll(function() {
    let scroll = $(window).scrollTop();
    
    if (scroll >= 100) {
      getHeader.removeClass('clearHeader').addClass("darkHeader");
      getProgress.removeClass('progressHeader').addClass("progress-container");
    } else {
      getHeader.removeClass("darkHeader").addClass('clearHeader');
      getProgress.removeClass("progress-container").addClass('progressHeader');         
    }
  });
});