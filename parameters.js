window.onload = function() {
  // collect the parameters
  const query  = window.location.search;
  const params = new URLSearchParams(query);
  // set defaults in case no parameter is offered
  var hearts     = parseInt(params.get('hearts')     || '3');
  var stamina    = parseInt(params.get('stamina')    || '5');
  var spiritOrbs =          params.get('spiritorbs') || '0';
  var shrines    =          params.get('shrines')    || '0';
  var korokSeeds =          params.get('korokseeds') || '0';
  var rupees     = parseInt(params.get('rupees')     || '0');
  // generate a few objects which can be duplicated if needed
  var imgHeart = new Image();
  imgHeart.src = "icons/dark-transparent/heart.png";
  imgHeart.alt = "heart";
  imgHeart.className = "heart";
  var imgStamina1 = new Image();
  imgStamina1.src = "icons/dark-transparent/stamina_1.png";
  imgStamina1.alt = "stamina wheel with 1 segment";
  imgStamina1.className = "stamina-wheel stamina-1";
  var imgStamina2 = new Image();
  imgStamina2.src = "icons/dark-transparent/stamina_2.png";
  imgStamina2.alt = "stamina wheel with 2 segment";
  imgStamina2.className = "stamina-wheel stamina-2";
  var imgStamina3 = new Image();
  imgStamina3.src = "icons/dark-transparent/stamina_3.png";
  imgStamina3.alt = "stamina wheel with 3 segment";
  imgStamina3.className = "stamina-wheel stamina-3";
  var imgStamina4 = new Image();
  imgStamina4.src = "icons/dark-transparent/stamina_4.png";
  imgStamina4.alt = "stamina wheel with 4 segment";
  imgStamina4.className = "stamina-wheel stamina-4";
  var imgStamina5 = new Image();
  imgStamina5.src = "icons/dark-transparent/stamina_5.png";
  imgStamina5.alt = "stamina wheel with 5 segment";
  imgStamina5.className = "stamina-wheel stamina-5";
  // fill images for health and stamina
  // alter span.innerHTML for text fields
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
  var spanSpiritOrbs = document.querySelector("span.spirit-orbs-text");
  spanSpiritOrbs.innerHTML = spiritOrbs;
  // // SHRINES
  var spanShrines = document.querySelector("span.shrines-text");
  spanShrines.innerHTML = shrines;
  // // KOROK SEEDS
  var spanKorokSeeds = document.querySelector("span.korok-seeds-text");
  spanKorokSeeds.innerHTML = korokSeeds;
  // // RUPEES
  var spanRupees = document.querySelector("span.rupees-text");
  spanRupees.innerHTML = rupees.toLocaleString();
}
