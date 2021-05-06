window.onload = function() {
  // collect the parameters
  const query  = window.location.search;
  const params = new URLSearchParams(query);
  // set defaults in case no parameter is offered
  var theme      =          params.get("theme")      || "light";
  var hearts     = parseInt(params.get("hearts")     || "3");
  var stamina    = parseInt(params.get("stamina")    || "5");
  var spiritOrbs =          params.get("spiritorbs") || "0";
  var shrines    =          params.get("shrines")    || "0";
  var korokSeeds =          params.get("korokseeds") || "0";
  var rupees     = parseInt(params.get("rupees")     || "0");
  // generate a few objects which can be duplicated if needed
  switch (theme) {
    case "light":
    case "dark":
      break;
    default:
      theme = "light";
  }
  var imgHeart = new Image();
  imgHeart.src = `icons/${theme}/heart.svg`;
  imgHeart.alt = "heart";
  imgHeart.className = "heart";
  var imgStamina1 = new Image();
  imgStamina1.src = `icons/${theme}/stamina_1.svg`;
  imgStamina1.alt = "stamina wheel with 1 segment";
  imgStamina1.className = "stamina-wheel stamina-1";
  var imgStamina2 = new Image();
  imgStamina2.src = `icons/${theme}/stamina_2.svg`;
  imgStamina2.alt = "stamina wheel with 2 segment";
  imgStamina2.className = "stamina-wheel stamina-2";
  var imgStamina3 = new Image();
  imgStamina3.src = `icons/${theme}/stamina_3.svg`;
  imgStamina3.alt = "stamina wheel with 3 segment";
  imgStamina3.className = "stamina-wheel stamina-3";
  var imgStamina4 = new Image();
  imgStamina4.src = `icons/${theme}/stamina_4.svg`;
  imgStamina4.alt = "stamina wheel with 4 segment";
  imgStamina4.className = "stamina-wheel stamina-4";
  var imgStamina5 = new Image();
  imgStamina5.src = `icons/${theme}/stamina_5.svg`;
  imgStamina5.alt = "stamina wheel with 5 segment";
  imgStamina5.className = "stamina-wheel stamina-5";
  // fill images for health and stamina
  // alter span.innerHTML for text fields
  // // BODY
  var body = document.querySelector("body");
  body.classList.add(`theme-${theme}`)
  // // HEARTS
  var divHearts = document.querySelector("div.hearts");
  while (divHearts.firstChild) {
    divHearts.removeChild(divHearts.firstChild);
  }
  for (var i = 0; i < hearts; i++) {
    divHearts.appendChild(imgHeart.cloneNode(true));
  }
  // // STAMINA
  var divStamina = document.querySelector("div.stamina-wheels");
  while (divStamina.firstChild) {
    divStamina.removeChild(divStamina.firstChild);
  }
  {
    var i = stamina;
    while (i > 5) {
      divStamina.appendChild(imgStamina5.cloneNode(true));
      i = i - 5;
    }
    switch (i) {
      case 5:
        divStamina.appendChild(imgStamina5.cloneNode(true));
        break;
      case 4:
        divStamina.appendChild(imgStamina4.cloneNode(true));
        break;
      case 3:
        divStamina.appendChild(imgStamina3.cloneNode(true));
        break;
      case 2:
        divStamina.appendChild(imgStamina2.cloneNode(true));
        break;
      case 1:
        divStamina.appendChild(imgStamina1.cloneNode(true));
        break;
    }
  }
  // // SPIRIT ORBS
  var imgSpiritOrb         = document.querySelector("img.spirit-orb");
  imgSpiritOrb.src         = `icons/${theme}/spirit_orb.svg`;
  var spanSpiritOrbs       = document.querySelector("span.spirit-orbs-text");
  spanSpiritOrbs.innerHTML = spiritOrbs;
  // // SHRINES
  var imgShrine         = document.querySelector("img.shrine");
  imgShrine.src         = `icons/${theme}/shrine.svg`;
  var spanShrines       = document.querySelector("span.shrines-text");
  spanShrines.innerHTML = shrines;
  // // KOROK SEEDS
  var imgKorokSeed         = document.querySelector("img.korok-seed");
  imgKorokSeed.src         = `icons/${theme}/korok_seed.svg`;
  var spanKorokSeeds       = document.querySelector("span.korok-seeds-text");
  spanKorokSeeds.innerHTML = korokSeeds;
  // // RUPEES
  var imgRupee         = document.querySelector("img.rupee");
  imgRupee.src         = `icons/${theme}/rupee.svg`;
  var spanRupees       = document.querySelector("span.rupees-text");
  spanRupees.innerHTML = rupees.toLocaleString();
}
