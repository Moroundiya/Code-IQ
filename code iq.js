var shownavbar = document.querySelector('.shownavbar');

function changeStyle() {
  var var1 = document.querySelector('#nav-icon-anim');
  var showNavM = document.querySelector('#collapsibleNavId');
  var1.classList.toggle('open');

  if (var1.classList.contains('open')) {
    showNavM.className="";
    showNavM.classList.toggle('shownavbarmobile');

  } else {
    showNavM.classList.toggle('hidenavbar');
  }

}


document.querySelector("#file").addEventListener("change", (e) => {
  var x = e.target.files[0].name;
  document.querySelector(".file-desc").innerHTML = x;
})
