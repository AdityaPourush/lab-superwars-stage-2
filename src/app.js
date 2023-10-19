const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    for (var i = 0; i < PLAYERS.length; i++) {
      var player = {
        name: PLAYERS[i],
        strength: getRandomStrength(),
        image: "images/super-" + (i + 1) + ".png",
        type: getRandomType(),
      };
      detailedPlayers.push(player);
      console.log(player);
    }
  
    return detailedPlayers;
  };
  
  // getting random strength
  const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    var random_num = Math.ceil(Math.random() * 100);
    return random_num;
  };
  
  var type = ["hero", "villain"];
  const getRandomType = () => {
    var ran_01 = Math.floor(Math.random() * type.length);
    return type[ran_01];
  };
  
  const buildPlayers = (players, type) => {
    let fragment = "";
    console.log(type);
    // Loop through players and accumulate HTML template
    // depending on type of player(hero|villain)
    // Type your code here
  
    if (type == "hero") {
      for (let i = 0; i < PLAYERS.length; i++) {
        if (players[i].type == "hero") {
          fragment += `<div class="player">
              <img src="${players[i].image}">
              <div class="name">${players[i].name}</div>
              <div class="strength">${players[i].strength}</div>
              </div>`;
        }
      }
    } else if (type == "villain") {
      for (let i = 0; i < PLAYERS.length; i++) {
        if (players[i].type == "villain") {
          fragment += `<div class="player">
              <img src="${players[i].image}">
              <div class="name">${players[i].name}</div>
              <div class="strength">${players[i].strength}</div>
              </div>`;
        }
      }
    }
    console.log(type, fragment);
    return fragment;
  };
  // const buildHeros = (players) => {
  //   let fragment = "";
  
  //   for (let i = 0; i < PLAYERS.length; i++) {
  //     if (players[i].type == "hero") {
  //       fragment += `<div class="player">
  //             <img src="${players[i].image}">
  //             <div class="name">${players[i].name}</div>
  //             <div class="strength">${players[i].strength}</div>
  //             </div>`;
  //     }
  //   }
  //   console.log(type, fragment);
  //   return fragment;
  // };
  // const buildVillians = (players) => {
  //   let fragment = "";
  
  //   for (let i = 0; i < PLAYERS.length; i++) {
  //     if (players[i].type == "villain") {
  //       fragment += `<div class="player">
  //             <img src="${players[i].image}">
  //             <div class="name">${players[i].name}</div>
  //             <div class="strength">${players[i].strength}</div>
  //             </div>`;
  //     }
  //   }
  //   console.log(type, fragment);
  //   return fragment;
  // };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(players, "villain");
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
  