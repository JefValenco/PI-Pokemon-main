const urlPokemons = [
  {
    id: "1",
    name: "bulbasaur",
    life: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    height: 7,
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png",
    types: "grass",
    create: false,
  },
  {
    id: "2",
    name: "ivysaur",
    life: 60,
    attack: 62,
    defense: 63,
    speed: 60,
    height: 10,
    weight: 130,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png",
    types: "grass",
    create: false,
  },
  {
    id: "3",
    name: "venusaur",
    life: 80,
    attack: 82,
    defense: 83,
    speed: 80,
    height: 20,
    weight: 1000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/3.png",
    types: "grass",
    create: false,
  },
  {
    id: "4",
    name: "charmander",
    life: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    height: 6,
    weight: 85,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png",
    types: "fire",
    create: false,
  },
  {
    id: "5",
    name: "charmeleon",
    life: 58,
    attack: 64,
    defense: 58,
    speed: 80,
    height: 11,
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/5.png",
    types: "fire",
    create: false,
  },
  {
    id: "6",
    name: "charizard",
    life: 78,
    attack: 84,
    defense: 78,
    speed: 100,
    height: 17,
    weight: 905,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png",
    types: "fire",
    create: false,
  },
  {
    id: "7",
    name: "squirtle",
    life: 44,
    attack: 48,
    defense: 65,
    speed: 43,
    height: 5,
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png",
    types: "water",
    create: false,
  },
  {
    id: "8",
    name: "wartortle",
    life: 59,
    attack: 63,
    defense: 80,
    speed: 58,
    height: 10,
    weight: 225,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/8.png",
    types: "water",
    create: false,
  },
  {
    id: "9",
    name: "blastoise",
    life: 79,
    attack: 83,
    defense: 100,
    speed: 78,
    height: 16,
    weight: 855,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/9.png",
    types: "water",
    create: false,
  },
  {
    id: "10",
    name: "caterpie",
    life: 45,
    attack: 30,
    defense: 35,
    speed: 45,
    height: 3,
    weight: 29,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10.png",
    types: "bug",
    create: false,
  },
  {
    id: "11",
    name: "metapod",
    life: 50,
    attack: 20,
    defense: 55,
    speed: 30,
    height: 7,
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/11.png",
    types: "bug",
    create: false,
  },
  {
    id: "12",
    name: "butterfree",
    life: 60,
    attack: 45,
    defense: 50,
    speed: 70,
    height: 11,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/12.png",
    types: "bug",
    create: false,
  },
  {
    id: "13",
    name: "weedle",
    life: 40,
    attack: 35,
    defense: 30,
    speed: 50,
    height: 3,
    weight: 32,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/13.png",
    types: "bug",
    create: false,
  },
  {
    id: "14",
    name: "kakuna",
    life: 45,
    attack: 25,
    defense: 50,
    speed: 35,
    height: 6,
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/14.png",
    types: "bug",
    create: false,
  },
  {
    id: "15",
    name: "beedrill",
    life: 65,
    attack: 90,
    defense: 40,
    speed: 75,
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/15.png",
    types: "bug",
    create: false,
  },
  {
    id: "16",
    name: "pidgey",
    life: 40,
    attack: 45,
    defense: 40,
    speed: 56,
    height: 3,
    weight: 18,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/16.png",
    types: "normal",
    create: false,
  },
  {
    id: "17",
    name: "pidgeotto",
    life: 63,
    attack: 60,
    defense: 55,
    speed: 71,
    height: 11,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/17.png",
    types: "normal",
    create: false,
  },
  {
    id: "18",
    name: "pidgeot",
    life: 83,
    attack: 80,
    defense: 75,
    speed: 101,
    height: 15,
    weight: 395,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/18.png",
    types: "normal",
    create: false,
  },
  {
    id: "19",
    name: "rattata",
    life: 30,
    attack: 56,
    defense: 35,
    speed: 72,
    height: 3,
    weight: 35,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/19.png",
    types: "normal",
    create: false,
  },
  {
    id: "20",
    name: "raticate",
    life: 55,
    attack: 81,
    defense: 60,
    speed: 97,
    height: 7,
    weight: 185,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/20.png",
    types: "normal",
    create: false,
  },
  {
    id: "21",
    name: "spearow",
    life: 40,
    attack: 60,
    defense: 30,
    speed: 70,
    height: 3,
    weight: 20,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/21.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/21.png",
    types: "normal",
    create: false,
  },
  {
    id: "22",
    name: "fearow",
    life: 65,
    attack: 90,
    defense: 65,
    speed: 100,
    height: 12,
    weight: 380,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/22.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/22.png",
    types: "normal",
    create: false,
  },
  {
    id: "23",
    name: "ekans",
    life: 35,
    attack: 60,
    defense: 44,
    speed: 55,
    height: 20,
    weight: 69,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/23.png",
    types: "poison",
    create: false,
  },
  {
    id: "24",
    name: "arbok",
    life: 60,
    attack: 95,
    defense: 69,
    speed: 80,
    height: 35,
    weight: 650,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/24.png",
    types: "poison",
    create: false,
  },
  {
    id: "25",
    name: "pikachu",
    life: 35,
    attack: 55,
    defense: 40,
    speed: 90,
    height: 4,
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png",
    types: "electric",
    create: false,
  },
  {
    id: "26",
    name: "raichu",
    life: 60,
    attack: 90,
    defense: 55,
    speed: 110,
    height: 8,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/26.png",
    types: "electric",
    create: false,
  },
  {
    id: "27",
    name: "sandshrew",
    life: 50,
    attack: 75,
    defense: 85,
    speed: 40,
    height: 6,
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/27.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/27.png",
    types: "ground",
    create: false,
  },
  {
    id: "28",
    name: "sandslash",
    life: 75,
    attack: 100,
    defense: 110,
    speed: 65,
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/28.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/28.png",
    types: "ground",
    create: false,
  },
  {
    id: "29",
    name: "nidoran-f",
    life: 55,
    attack: 47,
    defense: 52,
    speed: 41,
    height: 4,
    weight: 70,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/29.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/29.png",
    types: "poison",
    create: false,
  },
  {
    id: "30",
    name: "nidorina",
    life: 70,
    attack: 62,
    defense: 67,
    speed: 56,
    height: 8,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/30.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/30.png",
    types: "poison",
    create: false,
  },
  {
    id: "31",
    name: "nidoqueen",
    life: 90,
    attack: 92,
    defense: 87,
    speed: 76,
    height: 13,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/31.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/31.png",
    types: "poison",
    create: false,
  },
  {
    id: "32",
    name: "nidoran-m",
    life: 46,
    attack: 57,
    defense: 40,
    speed: 50,
    height: 5,
    weight: 90,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/32.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/32.png",
    types: "poison",
    create: false,
  },
  {
    id: "33",
    name: "nidorino",
    life: 61,
    attack: 72,
    defense: 57,
    speed: 65,
    height: 9,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/33.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/33.png",
    types: "poison",
    create: false,
  },
  {
    id: "34",
    name: "nidoking",
    life: 81,
    attack: 102,
    defense: 77,
    speed: 85,
    height: 14,
    weight: 620,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/34.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/34.png",
    types: "poison",
    create: false,
  },
  {
    id: "35",
    name: "clefairy",
    life: 70,
    attack: 45,
    defense: 48,
    speed: 35,
    height: 6,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png",
    types: "fairy",
    create: false,
  },
  {
    id: "36",
    name: "clefable",
    life: 95,
    attack: 70,
    defense: 73,
    speed: 60,
    height: 13,
    weight: 400,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/36.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/36.png",
    types: "fairy",
    create: false,
  },
  {
    id: "37",
    name: "vulpix",
    life: 38,
    attack: 41,
    defense: 40,
    speed: 65,
    height: 6,
    weight: 99,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/37.png",
    types: "fire",
    create: false,
  },
  {
    id: "38",
    name: "ninetales",
    life: 73,
    attack: 76,
    defense: 75,
    speed: 100,
    height: 11,
    weight: 199,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/38.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/38.png",
    types: "fire",
    create: false,
  },
  {
    id: "39",
    name: "jigglypuff",
    life: 115,
    attack: 45,
    defense: 20,
    speed: 20,
    height: 5,
    weight: 55,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/39.png",
    types: "normal",
    create: false,
  },
  {
    id: "40",
    name: "wigglytuff",
    life: 140,
    attack: 70,
    defense: 45,
    speed: 45,
    height: 10,
    weight: 120,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/40.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/40.png",
    types: "normal",
    create: false,
  },
  {
    id: "41",
    name: "zubat",
    life: 40,
    attack: 45,
    defense: 35,
    speed: 55,
    height: 8,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/41.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/41.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/41.png",
    types: "poison",
    create: false,
  },
  {
    id: "42",
    name: "golbat",
    life: 75,
    attack: 80,
    defense: 70,
    speed: 90,
    height: 16,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/42.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/42.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/42.png",
    types: "poison",
    create: false,
  },
  {
    id: "43",
    name: "oddish",
    life: 45,
    attack: 50,
    defense: 55,
    speed: 30,
    height: 5,
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/43.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/43.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/43.png",
    types: "grass",
    create: false,
  },
  {
    id: "44",
    name: "gloom",
    life: 60,
    attack: 65,
    defense: 70,
    speed: 40,
    height: 8,
    weight: 86,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/44.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/44.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/44.png",
    types: "grass",
    create: false,
  },
  {
    id: "45",
    name: "vileplume",
    life: 75,
    attack: 80,
    defense: 85,
    speed: 50,
    height: 12,
    weight: 186,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/45.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/45.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/45.png",
    types: "grass",
    create: false,
  },
  {
    id: "46",
    name: "paras",
    life: 35,
    attack: 70,
    defense: 55,
    speed: 25,
    height: 3,
    weight: 54,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/46.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/46.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/46.png",
    types: "bug",
    create: false,
  },
  {
    id: "47",
    name: "parasect",
    life: 60,
    attack: 95,
    defense: 80,
    speed: 30,
    height: 10,
    weight: 295,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/47.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/47.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/47.png",
    types: "bug",
    create: false,
  },
  {
    id: "48",
    name: "venonat",
    life: 60,
    attack: 55,
    defense: 50,
    speed: 45,
    height: 10,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/48.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/48.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/48.png",
    types: "bug",
    create: false,
  },
  {
    id: "49",
    name: "venomoth",
    life: 70,
    attack: 65,
    defense: 60,
    speed: 90,
    height: 15,
    weight: 125,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/49.png",
    types: "bug",
    create: false,
  },
  {
    id: "50",
    name: "diglett",
    life: 10,
    attack: 55,
    defense: 25,
    speed: 95,
    height: 2,
    weight: 8,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/50.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/50.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/50.png",
    types: "ground",
    create: false,
  },
  {
    id: "51",
    name: "dugtrio",
    life: 35,
    attack: 100,
    defense: 50,
    speed: 120,
    height: 7,
    weight: 333,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/51.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/51.png",
    types: "ground",
    create: false,
  },
  {
    id: "52",
    name: "meowth",
    life: 40,
    attack: 45,
    defense: 35,
    speed: 90,
    height: 4,
    weight: 42,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/52.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/52.png",
    types: "normal",
    create: false,
  },
  {
    id: "53",
    name: "persian",
    life: 65,
    attack: 70,
    defense: 60,
    speed: 115,
    height: 10,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/53.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/53.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/53.png",
    types: "normal",
    create: false,
  },
  {
    id: "54",
    name: "psyduck",
    life: 50,
    attack: 52,
    defense: 48,
    speed: 55,
    height: 8,
    weight: 196,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/54.png",
    types: "water",
    create: false,
  },
  {
    id: "55",
    name: "golduck",
    life: 80,
    attack: 82,
    defense: 78,
    speed: 85,
    height: 17,
    weight: 766,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/55.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/55.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/55.png",
    types: "water",
    create: false,
  },
  {
    id: "56",
    name: "mankey",
    life: 40,
    attack: 80,
    defense: 35,
    speed: 70,
    height: 5,
    weight: 280,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/56.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/56.png",
    types: "fighting",
    create: false,
  },
  {
    id: "57",
    name: "primeape",
    life: 65,
    attack: 105,
    defense: 60,
    speed: 95,
    height: 10,
    weight: 320,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/57.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/57.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/57.png",
    types: "fighting",
    create: false,
  },
  {
    id: "58",
    name: "growlithe",
    life: 55,
    attack: 70,
    defense: 45,
    speed: 60,
    height: 7,
    weight: 190,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/58.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/58.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/58.png",
    types: "fire",
    create: false,
  },
  {
    id: "59",
    name: "arcanine",
    life: 90,
    attack: 110,
    defense: 80,
    speed: 95,
    height: 19,
    weight: 1550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/59.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/59.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/59.png",
    types: "fire",
    create: false,
  },
  {
    id: "60",
    name: "poliwag",
    life: 40,
    attack: 50,
    defense: 40,
    speed: 90,
    height: 6,
    weight: 124,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/60.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/60.png",
    types: "water",
    create: false,
  },
  {
    id: "61",
    name: "poliwhirl",
    life: 65,
    attack: 65,
    defense: 65,
    speed: 90,
    height: 10,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/61.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/61.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/61.png",
    types: "water",
    create: false,
  },
  {
    id: "62",
    name: "poliwrath",
    life: 90,
    attack: 95,
    defense: 95,
    speed: 70,
    height: 13,
    weight: 540,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/62.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/62.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/62.png",
    types: "water",
    create: false,
  },
  {
    id: "63",
    name: "abra",
    life: 25,
    attack: 20,
    defense: 15,
    speed: 90,
    height: 9,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/63.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/63.png",
    types: "psychic",
    create: false,
  },
  {
    id: "64",
    name: "kadabra",
    life: 40,
    attack: 35,
    defense: 30,
    speed: 105,
    height: 13,
    weight: 565,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/64.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/64.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/64.png",
    types: "psychic",
    create: false,
  },
  {
    id: "65",
    name: "alakazam",
    life: 55,
    attack: 50,
    defense: 45,
    speed: 120,
    height: 15,
    weight: 480,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/65.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/65.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/65.png",
    types: "psychic",
    create: false,
  },
  {
    id: "66",
    name: "machop",
    life: 70,
    attack: 80,
    defense: 50,
    speed: 35,
    height: 8,
    weight: 195,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/66.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/66.png",
    types: "fighting",
    create: false,
  },
  {
    id: "67",
    name: "machoke",
    life: 80,
    attack: 100,
    defense: 70,
    speed: 45,
    height: 15,
    weight: 705,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/67.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/67.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/67.png",
    types: "fighting",
    create: false,
  },
  {
    id: "68",
    name: "machamp",
    life: 90,
    attack: 130,
    defense: 80,
    speed: 55,
    height: 16,
    weight: 1300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/68.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/68.png",
    types: "fighting",
    create: false,
  },
  {
    id: "69",
    name: "bellsprout",
    life: 50,
    attack: 75,
    defense: 35,
    speed: 40,
    height: 7,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/69.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/69.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/69.png",
    types: "grass",
    create: false,
  },
  {
    id: "70",
    name: "weepinbell",
    life: 65,
    attack: 90,
    defense: 50,
    speed: 55,
    height: 10,
    weight: 64,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/70.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/70.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/70.png",
    types: "grass",
    create: false,
  },
  {
    id: "71",
    name: "victreebel",
    life: 80,
    attack: 105,
    defense: 65,
    speed: 70,
    height: 17,
    weight: 155,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/71.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/71.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/71.png",
    types: "grass",
    create: false,
  },
  {
    id: "72",
    name: "tentacool",
    life: 40,
    attack: 40,
    defense: 35,
    speed: 70,
    height: 9,
    weight: 455,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/72.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/72.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/72.png",
    types: "water",
    create: false,
  },
  {
    id: "73",
    name: "tentacruel",
    life: 80,
    attack: 70,
    defense: 65,
    speed: 100,
    height: 16,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/73.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/73.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/73.png",
    types: "water",
    create: false,
  },
  {
    id: "74",
    name: "geodude",
    life: 40,
    attack: 80,
    defense: 100,
    speed: 20,
    height: 4,
    weight: 200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/74.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/74.png",
    types: "rock",
    create: false,
  },
  {
    id: "75",
    name: "graveler",
    life: 55,
    attack: 95,
    defense: 115,
    speed: 35,
    height: 10,
    weight: 1050,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/75.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/75.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/75.png",
    types: "rock",
    create: false,
  },
  {
    id: "76",
    name: "golem",
    life: 80,
    attack: 120,
    defense: 130,
    speed: 45,
    height: 14,
    weight: 3000,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/76.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/76.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/76.png",
    types: "rock",
    create: false,
  },
  {
    id: "77",
    name: "ponyta",
    life: 50,
    attack: 85,
    defense: 55,
    speed: 90,
    height: 10,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/77.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/77.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/77.png",
    types: "fire",
    create: false,
  },
  {
    id: "78",
    name: "rapidash",
    life: 65,
    attack: 100,
    defense: 70,
    speed: 105,
    height: 17,
    weight: 950,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/78.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/78.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/78.png",
    types: "fire",
    create: false,
  },
  {
    id: "79",
    name: "slowpoke",
    life: 90,
    attack: 65,
    defense: 65,
    speed: 15,
    height: 12,
    weight: 360,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/79.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/79.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/79.png",
    types: "water",
    create: false,
  },
  {
    id: "80",
    name: "slowbro",
    life: 95,
    attack: 75,
    defense: 110,
    speed: 30,
    height: 16,
    weight: 785,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/80.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/80.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/80.png",
    types: "water",
    create: false,
  },
  {
    id: "81",
    name: "magnemite",
    life: 25,
    attack: 35,
    defense: 70,
    speed: 45,
    height: 3,
    weight: 60,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/81.png",
    types: "electric",
    create: false,
  },
  {
    id: "82",
    name: "magneton",
    life: 50,
    attack: 60,
    defense: 95,
    speed: 70,
    height: 10,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/82.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/82.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/82.png",
    types: "electric",
    create: false,
  },
  {
    id: "83",
    name: "farfetchd",
    life: 52,
    attack: 90,
    defense: 55,
    speed: 60,
    height: 8,
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/83.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/83.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/83.png",
    types: "normal",
    create: false,
  },
  {
    id: "84",
    name: "doduo",
    life: 35,
    attack: 85,
    defense: 45,
    speed: 75,
    height: 14,
    weight: 392,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/84.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/84.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/84.png",
    types: "normal",
    create: false,
  },
  {
    id: "85",
    name: "dodrio",
    life: 60,
    attack: 110,
    defense: 70,
    speed: 110,
    height: 18,
    weight: 852,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/85.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/85.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/85.png",
    types: "normal",
    create: false,
  },
  {
    id: "86",
    name: "seel",
    life: 65,
    attack: 45,
    defense: 55,
    speed: 45,
    height: 11,
    weight: 900,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/86.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/86.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/86.png",
    types: "water",
    create: false,
  },
  {
    id: "87",
    name: "dewgong",
    life: 90,
    attack: 70,
    defense: 80,
    speed: 70,
    height: 17,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/87.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/87.png",
    types: "water",
    create: false,
  },
  {
    id: "88",
    name: "grimer",
    life: 80,
    attack: 80,
    defense: 50,
    speed: 25,
    height: 9,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/88.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/88.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/88.png",
    types: "poison",
    create: false,
  },
  {
    id: "89",
    name: "muk",
    life: 105,
    attack: 105,
    defense: 75,
    speed: 50,
    height: 12,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/89.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/89.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/89.png",
    types: "poison",
    create: false,
  },
  {
    id: "90",
    name: "shellder",
    life: 30,
    attack: 65,
    defense: 100,
    speed: 40,
    height: 3,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/90.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/90.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/90.png",
    types: "water",
    create: false,
  },
  {
    id: "91",
    name: "cloyster",
    life: 50,
    attack: 95,
    defense: 180,
    speed: 70,
    height: 15,
    weight: 1325,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/91.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/91.png",
    types: "water",
    create: false,
  },
  {
    id: "92",
    name: "gastly",
    life: 30,
    attack: 35,
    defense: 30,
    speed: 80,
    height: 13,
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/92.png",
    types: "ghost",
    create: false,
  },
  {
    id: "93",
    name: "haunter",
    life: 45,
    attack: 50,
    defense: 45,
    speed: 95,
    height: 16,
    weight: 1,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/93.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/93.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/93.png",
    types: "ghost",
    create: false,
  },
  {
    id: "94",
    name: "gengar",
    life: 60,
    attack: 65,
    defense: 60,
    speed: 110,
    height: 15,
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/94.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/94.png",
    types: "ghost",
    create: false,
  },
  {
    id: "95",
    name: "onix",
    life: 35,
    attack: 45,
    defense: 160,
    speed: 70,
    height: 88,
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/95.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/95.png",
    types: "rock",
    create: false,
  },
  {
    id: "96",
    name: "drowzee",
    life: 60,
    attack: 48,
    defense: 45,
    speed: 42,
    height: 10,
    weight: 324,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/96.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/96.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/96.png",
    types: "psychic",
    create: false,
  },
  {
    id: "97",
    name: "hypno",
    life: 85,
    attack: 73,
    defense: 70,
    speed: 67,
    height: 16,
    weight: 756,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/97.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/97.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/97.png",
    types: "psychic",
    create: false,
  },
  {
    id: "98",
    name: "krabby",
    life: 30,
    attack: 105,
    defense: 90,
    speed: 50,
    height: 4,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/98.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/98.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/98.png",
    types: "water",
    create: false,
  },
  {
    id: "99",
    name: "kingler",
    life: 55,
    attack: 130,
    defense: 115,
    speed: 75,
    height: 13,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/99.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/99.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/99.png",
    types: "water",
    create: false,
  },
  {
    id: "100",
    name: "voltorb",
    life: 40,
    attack: 30,
    defense: 50,
    speed: 100,
    height: 5,
    weight: 104,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/100.png",
    types: "electric",
    create: false,
  },
  {
    id: "101",
    name: "electrode",
    life: 60,
    attack: 50,
    defense: 70,
    speed: 150,
    height: 12,
    weight: 666,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/101.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/101.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/101.png",
    types: "electric",
    create: false,
  },
  {
    id: "102",
    name: "exeggcute",
    life: 60,
    attack: 40,
    defense: 80,
    speed: 40,
    height: 4,
    weight: 25,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/102.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/102.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/102.png",
    types: "grass",
    create: false,
  },
  {
    id: "103",
    name: "exeggutor",
    life: 95,
    attack: 95,
    defense: 85,
    speed: 55,
    height: 20,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/103.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/103.png",
    types: "grass",
    create: false,
  },
  {
    id: "104",
    name: "cubone",
    life: 50,
    attack: 50,
    defense: 95,
    speed: 35,
    height: 4,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/104.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/104.png",
    types: "ground",
    create: false,
  },
  {
    id: "105",
    name: "marowak",
    life: 60,
    attack: 80,
    defense: 110,
    speed: 45,
    height: 10,
    weight: 450,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/105.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/105.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/105.png",
    types: "ground",
    create: false,
  },
  {
    id: "106",
    name: "hitmonlee",
    life: 50,
    attack: 120,
    defense: 53,
    speed: 87,
    height: 15,
    weight: 498,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/106.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/106.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/106.png",
    types: "fighting",
    create: false,
  },
  {
    id: "107",
    name: "hitmonchan",
    life: 50,
    attack: 105,
    defense: 79,
    speed: 76,
    height: 14,
    weight: 502,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/107.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/107.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/107.png",
    types: "fighting",
    create: false,
  },
  {
    id: "108",
    name: "lickitung",
    life: 90,
    attack: 55,
    defense: 75,
    speed: 30,
    height: 12,
    weight: 655,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/108.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/108.png",
    types: "normal",
    create: false,
  },
  {
    id: "109",
    name: "koffing",
    life: 40,
    attack: 65,
    defense: 95,
    speed: 35,
    height: 6,
    weight: 10,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/109.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/109.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/109.png",
    types: "poison",
    create: false,
  },
  {
    id: "110",
    name: "weezing",
    life: 65,
    attack: 90,
    defense: 120,
    speed: 60,
    height: 12,
    weight: 95,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/110.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/110.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/110.png",
    types: "poison",
    create: false,
  },
  {
    id: "111",
    name: "rhyhorn",
    life: 80,
    attack: 85,
    defense: 95,
    speed: 25,
    height: 10,
    weight: 1150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/111.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/111.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/111.png",
    types: "ground",
    create: false,
  },
  {
    id: "112",
    name: "rhydon",
    life: 105,
    attack: 130,
    defense: 120,
    speed: 40,
    height: 19,
    weight: 1200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/112.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/112.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/112.png",
    types: "ground",
    create: false,
  },
  {
    id: "113",
    name: "chansey",
    life: 250,
    attack: 5,
    defense: 5,
    speed: 50,
    height: 11,
    weight: 346,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/113.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/113.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/113.png",
    types: "normal",
    create: false,
  },
  {
    id: "114",
    name: "tangela",
    life: 65,
    attack: 55,
    defense: 115,
    speed: 60,
    height: 10,
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/114.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/114.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/114.png",
    types: "grass",
    create: false,
  },
  {
    id: "115",
    name: "kangaskhan",
    life: 105,
    attack: 95,
    defense: 80,
    speed: 90,
    height: 22,
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/115.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/115.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/115.png",
    types: "normal",
    create: false,
  },
  {
    id: "116",
    name: "horsea",
    life: 30,
    attack: 40,
    defense: 70,
    speed: 60,
    height: 4,
    weight: 80,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/116.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/116.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/116.png",
    types: "water",
    create: false,
  },
  {
    id: "117",
    name: "seadra",
    life: 55,
    attack: 65,
    defense: 95,
    speed: 85,
    height: 12,
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/117.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/117.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/117.png",
    types: "water",
    create: false,
  },
  {
    id: "118",
    name: "goldeen",
    life: 45,
    attack: 67,
    defense: 60,
    speed: 63,
    height: 6,
    weight: 150,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/118.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/118.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/118.png",
    types: "water",
    create: false,
  },
  {
    id: "119",
    name: "seaking",
    life: 80,
    attack: 92,
    defense: 65,
    speed: 68,
    height: 13,
    weight: 390,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/119.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/119.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/119.png",
    types: "water",
    create: false,
  },
  {
    id: "120",
    name: "staryu",
    life: 30,
    attack: 45,
    defense: 55,
    speed: 85,
    height: 8,
    weight: 345,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/120.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/120.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/120.png",
    types: "water",
    create: false,
  },
  {
    id: "121",
    name: "starmie",
    life: 60,
    attack: 75,
    defense: 85,
    speed: 115,
    height: 11,
    weight: 800,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/121.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/121.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/121.png",
    types: "water",
    create: false,
  },
  {
    id: "122",
    name: "mr-mime",
    life: 40,
    attack: 45,
    defense: 65,
    speed: 90,
    height: 13,
    weight: 545,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/122.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/122.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/122.png",
    types: "psychic",
    create: false,
  },
  {
    id: "123",
    name: "scyther",
    life: 70,
    attack: 110,
    defense: 80,
    speed: 105,
    height: 15,
    weight: 560,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/123.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/123.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/123.png",
    types: "bug",
    create: false,
  },
  {
    id: "124",
    name: "jynx",
    life: 65,
    attack: 50,
    defense: 35,
    speed: 95,
    height: 14,
    weight: 406,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/124.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/124.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/124.png",
    types: "ice",
    create: false,
  },
  {
    id: "125",
    name: "electabuzz",
    life: 65,
    attack: 83,
    defense: 57,
    speed: 105,
    height: 11,
    weight: 300,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/125.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/125.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/125.png",
    types: "electric",
    create: false,
  },
  {
    id: "126",
    name: "magmar",
    life: 65,
    attack: 95,
    defense: 57,
    speed: 93,
    height: 13,
    weight: 445,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/126.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/126.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/126.png",
    types: "fire",
    create: false,
  },
  {
    id: "127",
    name: "pinsir",
    life: 65,
    attack: 125,
    defense: 100,
    speed: 85,
    height: 15,
    weight: 550,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/127.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/127.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/127.png",
    types: "bug",
    create: false,
  },
  {
    id: "128",
    name: "tauros",
    life: 75,
    attack: 100,
    defense: 95,
    speed: 110,
    height: 14,
    weight: 884,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/128.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/128.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/128.png",
    types: "normal",
    create: false,
  },
  {
    id: "129",
    name: "magikarp",
    life: 20,
    attack: 10,
    defense: 55,
    speed: 80,
    height: 9,
    weight: 100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/129.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/129.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/129.png",
    types: "water",
    create: false,
  },
  {
    id: "130",
    name: "gyarados",
    life: 95,
    attack: 125,
    defense: 79,
    speed: 81,
    height: 65,
    weight: 2350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/130.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/130.png",
    types: "water",
    create: false,
  },
  {
    id: "131",
    name: "lapras",
    life: 130,
    attack: 85,
    defense: 80,
    speed: 60,
    height: 25,
    weight: 2200,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/131.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/131.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/131.png",
    types: "water",
    create: false,
  },
  {
    id: "132",
    name: "ditto",
    life: 48,
    attack: 48,
    defense: 48,
    speed: 48,
    height: 3,
    weight: 40,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png",
    types: "normal",
    create: false,
  },
  {
    id: "133",
    name: "eevee",
    life: 55,
    attack: 55,
    defense: 50,
    speed: 55,
    height: 3,
    weight: 65,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/133.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/133.png",
    types: "normal",
    create: false,
  },
  {
    id: "134",
    name: "vaporeon",
    life: 130,
    attack: 65,
    defense: 60,
    speed: 65,
    height: 10,
    weight: 290,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/134.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/134.png",
    types: "water",
    create: false,
  },
  {
    id: "135",
    name: "jolteon",
    life: 65,
    attack: 65,
    defense: 60,
    speed: 130,
    height: 8,
    weight: 245,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/135.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/135.png",
    types: "electric",
    create: false,
  },
  {
    id: "136",
    name: "flareon",
    life: 65,
    attack: 130,
    defense: 60,
    speed: 65,
    height: 9,
    weight: 250,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/136.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/136.png",
    types: "fire",
    create: false,
  },
  {
    id: "137",
    name: "porygon",
    life: 65,
    attack: 60,
    defense: 70,
    speed: 40,
    height: 8,
    weight: 365,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/137.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/137.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/137.png",
    types: "normal",
    create: false,
  },
  {
    id: "138",
    name: "omanyte",
    life: 35,
    attack: 40,
    defense: 100,
    speed: 35,
    height: 4,
    weight: 75,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/138.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/138.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/138.png",
    types: "rock",
    create: false,
  },
  {
    id: "139",
    name: "omastar",
    life: 70,
    attack: 60,
    defense: 125,
    speed: 55,
    height: 10,
    weight: 350,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/139.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/139.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/139.png",
    types: "rock",
    create: false,
  },
  {
    id: "140",
    name: "kabuto",
    life: 30,
    attack: 80,
    defense: 90,
    speed: 55,
    height: 5,
    weight: 115,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/140.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/140.png",
    types: "rock",
    create: false,
  },
  {
    id: "141",
    name: "kabutops",
    life: 60,
    attack: 115,
    defense: 105,
    speed: 80,
    height: 13,
    weight: 405,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/141.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/141.png",
    types: "rock",
    create: false,
  },
  {
    id: "142",
    name: "aerodactyl",
    life: 80,
    attack: 105,
    defense: 65,
    speed: 130,
    height: 18,
    weight: 590,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/142.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/142.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/142.png",
    types: "rock",
    create: false,
  },
  {
    id: "143",
    name: "snorlax",
    life: 160,
    attack: 110,
    defense: 65,
    speed: 30,
    height: 21,
    weight: 4600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/143.png",
    types: "normal",
    create: false,
  },
  {
    id: "144",
    name: "articuno",
    life: 90,
    attack: 85,
    defense: 100,
    speed: 85,
    height: 17,
    weight: 554,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/144.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/144.png",
    types: "ice",
    create: false,
  },
  {
    id: "145",
    name: "zapdos",
    life: 90,
    attack: 90,
    defense: 85,
    speed: 100,
    height: 16,
    weight: 526,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/145.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/145.png",
    types: "electric",
    create: false,
  },
  {
    id: "146",
    name: "moltres",
    life: 90,
    attack: 100,
    defense: 90,
    speed: 90,
    height: 20,
    weight: 600,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/146.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/146.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/146.png",
    types: "fire",
    create: false,
  },
  {
    id: "147",
    name: "dratini",
    life: 41,
    attack: 64,
    defense: 45,
    speed: 50,
    height: 18,
    weight: 33,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/147.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/147.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/147.png",
    types: "dragon",
    create: false,
  },
  {
    id: "148",
    name: "dragonair",
    life: 61,
    attack: 84,
    defense: 65,
    speed: 70,
    height: 40,
    weight: 165,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/148.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/148.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/148.png",
    types: "dragon",
    create: false,
  },
  {
    id: "149",
    name: "dragonite",
    life: 91,
    attack: 134,
    defense: 95,
    speed: 80,
    height: 22,
    weight: 2100,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/149.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/149.png",
    types: "dragon",
    create: false,
  },
  {
    id: "150",
    name: "mewtwo",
    life: 106,
    attack: 110,
    defense: 90,
    speed: 130,
    height: 20,
    weight: 1220,
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg",
    image2:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
    image3:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png",
    image4:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/150.png",
    types: "psychic",
    create: false,
  },
];

module.exports = urlPokemons;
