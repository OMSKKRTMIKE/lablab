/*=============================
    Made With ♥ By Al Nahian
  ============================*/
// Start Code
// 05 Sep July 2020
// Al Nahian | https://alnahian2003.github.io

// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("You can't leave fields empty");
  }
  if (yourName.value == "") {
    alert("Please Enter Your Name");
  }
  if (theirName.value == "") {
    alert("Please Enter His/Her Name");
  }

  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " KUNG AKO YAN BOUNCE NA KO WAHHAHAHAHHAHA";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " IYAQ WAHAHAHHAHAHHA KAWAWA KA NAMAN";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " ASA KA NAMAN AWHAHAHHAHAHAHHAH IYAQ KA NA LANG ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " MADADAAN PA YAN SA HILOT! WAHAHHAHAHAHHA";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " AYY SIGE PWEDE NA YAN AWHAHAHHAHAHHAHAH CHAT MO NA";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like The Earth & The Moon. You cannot live without each other.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " AYAN ICHAT MO NA DALIIIIIII BAKA MARETRII";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " YUN OHHH AKALAIN MO YON UMABOT KAYO DITO";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " NAKSSSSSSSSSS NAMAN IDOLLL SANAOL PO OPO YIEEEEEEEE";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " KISSS MO NAMAN SI " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " YIEEEEEEEEE CHAT MO NA DALIIIIII ";
  }
});