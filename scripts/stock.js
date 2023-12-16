// page
const storeShown = document.querySelector("[data-filter]");
const choosenCategory = localStorage.getItem("choosen-category");

//products

const StockPro = [
  {
    _id: "657a116dd1624743e79441e6",
    Image: "/img/products/pro/branco-perolado-1.png",
    Name: "Branco Perolado",
    Category: "PRO",
    Price: 499.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/branco-perolado-1.png",
      "/img/products/pro/branco-perolado-2.png",
      "/img/products/pro/branco-perolado-3.png",
      "/img/products/pro/branco-perolado-4.png",
    ],
    Stock: 40,
  },
  {
    _id: "657a12bcd1624743e79441e9",
    Image: "/img/products/pro/black-piano-1.png",
    Name: "Black Piano",
    Category: "PRO",
    Price: 499.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/black-piano-1.png",
      "/img/products/pro/black-piano-2.png",
      "/img/products/pro/black-piano-3.png",
      "/img/products/pro/black-piano-4.png",
    ],
    Stock: 23,
  },
  {
    _id: "657a1378d1624743e79441eb",
    Image: "/img/products/pro/authentic-kirby-1.png",
    Name: "Authentic Kirby",
    Category: "PRO",
    Price: 549.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/authentic-kirby-1.png",
      "/img/products/pro/authentic-kirby-2.png",
      "/img/products/pro/authentic-kirby-3.png",
      "/img/products/pro/authentic-kirby-4.png",
      "/img/products/pro/authentic-kirby-5.png",
    ],
    Stock: 1,
  },
  {
    _id: "657a1538d1624743e79441ee",
    Image: "/img/products/pro/gudetama-1.png",
    Name: "Gudetama",
    Category: "PRO",
    Price: 549.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/gudetama-1.png",
      "/img/products/pro/gudetama-2.png",
      "/img/products/pro/gudetama-3.png",
    ],
    Stock: 12,
  },
  {
    _id: "657a1568d1624743e79441f0",
    Image: "/img/products/pro/hatsune-miku-1.png",
    Name: "Hatsune Miku",
    Category: "PRO",
    Price: 599.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/hatsune-miku-1.png",
      "/img/products/pro/hatsune-miku-2.png",
      "/img/products/pro/hatsune-miku-3.png",
      "/img/products/pro/hatsune-miku-4.png",
      "/img/products/pro/hatsune-miku-5.png",
    ],
    Stock: 8,
  },
  {
    _id: "657a1606d1624743e79441f2",
    Image: "/img/products/pro/aggretsuko-1.png",
    Name: "Aggretsuko",
    Category: "PRO",
    Price: 499.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/aggretsuko-1.png",
      "/img/products/pro/aggretsuko-2.png",
      "/img/products/pro/aggretsuko-3.png",
      "/img/products/pro/aggretsuko-4.png",
    ],
    Stock: 8,
  },
  {
    _id: "657a1831d1624743e79441f4",
    Image: "/img/products/pro/kabuki-1.png",
    Name: "Kabuki",
    Category: "PRO",
    Price: 599.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/kabuki-1.png",
      "/img/products/pro/kabuki-2.png",
      "/img/products/pro/kabuki-3.png",
      "/img/products/pro/kabuki-4.png",
    ],
    Stock: 0,
  },
  {
    _id: "657a1831d1624743e79441f5",
    Image: "/img/products/pro/lucky-cat-1.png",
    Name: "Lucky Cat",
    Category: "PRO",
    Price: 599.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/lucky-cat-1.png",
      "/img/products/pro/lucky-cat-2.png",
      "/img/products/pro/lucky-cat-3.png",
      "/img/products/pro/lucky-cat-4.png",
    ],
    Stock: 0,
  },
  {
    _id: "657a1831d1624743e79441f6",
    Image: "/img/products/pro/bear-mascot-1.png",
    Name: "Bear Mascot",
    Category: "PRO",
    Price: 599.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/pro/bear-mascot-1.png",
      "/img/products/pro/bear-mascot-2.png",
      "/img/products/pro/bear-mascot-3.png",
      "/img/products/pro/bear-mascot-4.png",
    ],
    Stock: 0,
  },
];

const StockFun = [
  {
    _id: "657a287ed1624743e79441fa",
    Image: "/img/products/fun/preto-1.png",
    Name: "Preto",
    Category: "FUN",
    Price: 99.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/preto-1.png",
      "/img/products/fun/preto-2.png",
      "/img/products/fun/preto-3.png",
      "/img/products/fun/preto-4.png",
      "/img/products/fun/preto-5.png",
    ],
    Stock: 16,
  },
  {
    _id: "657a287ed1624743e79441fb",
    Image: "/img/products/fun/amarelo-1.png",
    Name: "Amarelo",
    Category: "FUN",
    Price: 99.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/amarelo-1.png",
      "/img/products/fun/amarelo-2.png",
      "/img/products/fun/amarelo-3.png",
      "/img/products/fun/amarelo-4.png",
    ],
    Stock: 22,
  },
  {
    _id: "657a287ed1624743e79441fc",
    Image: "/img/products/fun/aquamarine-1.png",
    Name: "Aquamarine",
    Category: "FUN",
    Price: 99.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/aquamarine-1.png",
      "/img/products/fun/aquamarine-2.png",
      "/img/products/fun/aquamarine-3.png",
      "/img/products/fun/aquamarine-4.png",
    ],
    Stock: 21,
  },
  {
    _id: "657a287ed1624743e79441fd",
    Image: "/img/products/fun/azul-1.png",
    Name: "Azul",
    Category: "FUN",
    Price: 99.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/azul-1.png",
      "/img/products/fun/azul-2.png",
      "/img/products/fun/azul-3.png",
      "/img/products/fun/azul-4.png",
    ],
    Stock: 13,
  },
  {
    _id: "657a287ed1624743e7944200",
    Image: "/img/products/fun/hello-kitty-1.png",
    Name: "Hello Kitty",
    Category: "FUN",
    Price: 149.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/hello-kitty-1.png",
      "/img/products/fun/hello-kitty-2.png",
      "/img/products/fun/hello-kitty-3.png",
      "/img/products/fun/hello-kitty-4.png",
    ],
    Stock: 25,
  },
  {
    _id: "657a287ed1624743e79441fe",
    Image: "/img/products/fun/rosa-1.png",
    Name: "Rosa",
    Category: "FUN",
    Price: 99.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/rosa-1.png",
      "/img/products/fun/rosa-2.png",
      "/img/products/fun/rosa-3.png",
      "/img/products/fun/rosa-4.png",
    ],
    Stock: 0,
  },
  {
    _id: "657a287ed1624743e79441ff",
    Image: "/img/products/fun/duotone-1.png",
    Name: "Duotone",
    Category: "FUN",
    Price: 129.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/fun/duotone-1.png",
      "/img/products/fun/duotone-2.png",
      "/img/products/fun/duotone-3.png",
      "/img/products/fun/duotone-4.png",
    ],
    Stock: 0,
  },
];

const StockMini = [
  {
    _id: "657a29a6d1624743e7944202",
    Image: "/img/products/mini/preto-1.png",
    Name: "Preto",
    Category: "Mini",
    Price: 39.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/preto-1.png",
      "/img/products/mini/preto-2.png",
      "/img/products/mini/preto-3.png",
      "/img/products/mini/preto-4.png",
      "/img/products/mini/preto-5.png",
    ],
    Stock: 10,
  },
  {
    _id: "657a29a6d1624743e7944203",
    Image: "/img/products/mini/vermelho-1.png",
    Name: "Vermelho",
    Category: "Mini",
    Price: 39.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/vermelho-1.png",
      "/img/products/mini/vermelho-2.png",
      "/img/products/mini/vermelho-3.png",
      "/img/products/mini/vermelho-4.png",
    ],
    Stock: 13,
  },
  {
    _id: "657a29a6d1624743e7944204",
    Image: "/img/products/mini/branco-1.png",
    Name: "Branco",
    Category: "Mini",
    Price: 39.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/branco-1.png",
      "/img/products/mini/branco-2.png",
      "/img/products/mini/branco-3.png",
      "/img/products/mini/branco-4.png",
      "/img/products/mini/branco-5.png",
    ],
    Stock: 22,
  },
  {
    _id: "657a29a6d1624743e7944205",
    Image: "/img/products/mini/amarelo-1.png",
    Name: "Amarelo",
    Category: "Mini",
    Price: 39.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/amarelo-1.png",
      "/img/products/mini/amarelo-2.png",
      "/img/products/mini/amarelo-3.png",
    ],
    Stock: 13,
  },
  {
    _id: "657a29a6d1624743e7944206",
    Image: "/img/products/mini/azul-1.png",
    Name: "Azul",
    Category: "Mini",
    Price: 39.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: ["/img/products/mini/azul-1.png", "/img/products/mini/azul-2.png"],
    Stock: 13,
  },
  {
    _id: "657a29a6d1624743e7944207",
    Image: "/img/products/mini/duotone-1.png",
    Name: "Duotone",
    Category: "Mini",
    Price: 49.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/duotone-1.png",
      "/img/products/mini/duotone-2.png",
      "/img/products/mini/duotone-3.png",
      "/img/products/mini/duotone-4.png",
      "/img/products/mini/duotone-5.png",
    ],
    Stock: 3,
  },
  {
    _id: "657a29a6d1624743e7944208",
    Image: "/img/products/mini/melody-z-1.png",
    Name: "Melody-Z",
    Category: "Mini",
    Price: 49.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/melody-z-1.png",
      "/img/products/mini/melody-z-2.png",
      "/img/products/mini/melody-z-3.png",
      "/img/products/mini/melody-z-4.png",
      "/img/products/mini/melody-z-5.png",
    ],
    Stock: 0,
  },
  {
    _id: "657a29a6d1624743e7944209",
    Image: "/img/products/mini/kirby-1.png",
    Name: "Kirby",
    Category: "Mini",
    Price: 49.9,
    Description:
      "O instrumento perfeito para os apaixonados por música e inovação. Destaque-se com um dos instrumentos musicais mais invoadores do Japão.",
    Gallery: [
      "/img/products/mini/kirby-1.png",
      "/img/products/mini/kirby-2.png",
      "/img/products/mini/kirby-3.png",
      "/img/products/mini/kirby-4.png",
      "/img/products/mini/kirby-5.png",
    ],
    Stock: 0,
  },
];

const accessories = [
  {
    _id: "657a2b9cd1624743e794420b",
    Image: "/img/products/accessories/case-paiyule-1.png",
    Name: "Case Paiyule",
    Category: "Acessórios",
    Price: 69.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/case-paiyule-1.png",
      "/img/products/accessories/case-paiyule-2.png",
      "/img/products/accessories/case-paiyule-3.png",
      "/img/products/accessories/case-paiyule-4.png",
      "/img/products/accessories/case-paiyule-5.png",
    ],
    Stock: 14,
  },
  {
    _id: "657a2b9cd1624743e794420c",
    Image: "/img/products/accessories/mchoi-black-1.png",
    Name: "Mchoi Black",
    Category: "Acessórios",
    Price: 49.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/mchoi-black-1.png",
      "/img/products/accessories/mchoi-black-2.png",
      "/img/products/accessories/mchoi-black-3.png",
      "/img/products/accessories/mchoi-black-4.png",
    ],
    Stock: 14,
  },
  {
    _id: "657a2b9cd1624743e794420d",
    Image: "/img/products/accessories/portable-case-1.png",
    Name: "Portable Case",
    Category: "Acessórios",
    Price: 39.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/portable-case-1.png",
      "/img/products/accessories/portable-case-2.png",
      "/img/products/accessories/portable-case-3.png",
      "/img/products/accessories/portable-case-4.png",
    ],
    Stock: 38,
  },
  {
    _id: "657a2b9cd1624743e794420e",
    Image: "/img/products/accessories/paiyule-black-1.png",
    Name: "Paiyule Black",
    Category: "Acessórios",
    Price: 59.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/paiyule-black-1.png",
      "/img/products/accessories/paiyule-black-2.png",
      "/img/products/accessories/paiyule-black-3.png",
    ],
    Stock: 38,
  },
  {
    _id: "657a2b9cd1624743e794420f",
    Image: "/img/products/accessories/hardcase-pink-1.png",
    Name: "Pink Hardcase",
    Category: "Acessórios",
    Price: 59.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/hardcase-pink-1.png",
      "/img/products/accessories/hardcase-pink-2.png",
      "/img/products/accessories/hardcase-pink-3.png",
    ],
    Stock: 38,
  },
  {
    _id: "657a2b9cd1624743e7944210",
    Image: "/img/products/accessories/mchoi-pink-1.png",
    Name: "Mchoi Pink",
    Category: "Acessórios",
    Price: 49.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/mchoi-pink-1.png",
      "/img/products/accessories/mchoi-pink-2.png",
      "/img/products/accessories/mchoi-pink-3.png",
      "/img/products/accessories/mchoi-pink-4.png",
    ],
    Stock: 38,
  },
  {
    _id: "657a2b9cd1624743e7944211",
    Image: "/img/products/accessories/rummyluck-1.png",
    Name: "Rummyluck",
    Category: "Acessórios",
    Price: 69.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/rummyluck-1.png",
      "/img/products/accessories/rummyluck-2.png",
      "/img/products/accessories/rummyluck-3.png",
      "/img/products/accessories/rummyluck-4.png",
    ],
    Stock: 38,
  },
  {
    _id: "657a2b9cd1624743e7944212",
    Image: "/img/products/accessories/soft-case-1.png",
    Name: "Soft Case",
    Category: "Acessórios",
    Price: 39.9,
    Description:
      "A melhor forma de proteger seu Otamatone. Um case para você guardar e transportar seu insturmento com segurança e praticidade.",
    Gallery: [
      "/img/products/accessories/soft-case-1.png",
      "/img/products/accessories/soft-case-2.png",
      "/img/products/accessories/soft-case-3.png",
      "/img/products/accessories/soft-case-4.png",
    ],
    Stock: 38,
  },
];

// sending accessories to main

let sortedNumbers = [];
function sortAccessoriesAndPush() {
  let sortedNumbers = [];
  let multiple = accessories.length;

  //first number
  let firstNumber = parseInt(Math.random() * multiple);

  firstNumber = parseInt(Math.random() * multiple);

  sortedNumbers.push(firstNumber);

  //second number
  let secondNumber = parseInt(Math.random() * multiple);

  while (sortedNumbers.includes(secondNumber)) {
    secondNumber = parseInt(Math.random() * multiple);
  }
  sortedNumbers.push(secondNumber);

  //third number
  let thirdNumber = parseInt(Math.random() * multiple);

  while (sortedNumbers.includes(thirdNumber)) {
    thirdNumber = parseInt(Math.random() * multiple);
  }
  sortedNumbers.push(thirdNumber);

  //fourth number
  let fourthNumber = parseInt(Math.random() * multiple);

  while (sortedNumbers.includes(fourthNumber)) {
    fourthNumber = parseInt(Math.random() * multiple);
  }
  sortedNumbers.push(fourthNumber);

  // adding to local store

  let accessoriesToMainPage = [];

  sortedNumbers.forEach((item) => {
    accessoriesToMainPage.push(accessories[item]);
  });

  localStorage.setItem(
    "accessories-main-page",
    JSON.stringify(accessoriesToMainPage)
  );
}
sortAccessoriesAndPush();

// store interface
function setStoreInterface() {
  if (choosenCategory == "pro") {
    //selects products
    stockFilter = StockPro;
  } else if (choosenCategory == "fun") {
    //selects products
    stockFilter = StockFun;
  } else if (choosenCategory == "mini") {
    //selects products
    stockFilter = StockMini;
  } else if (choosenCategory == "acessorios") {
    //selects products
    stockFilter = accessories;
  } else {
    //selects ALL products
    let stockAll = [...StockPro, ...StockFun, ...StockMini, ...accessories];
    stockAllPositive = stockAll.filter((item) => item.Stock > 0);

    stockFilter = stockAllPositive;
  }
}

setStoreInterface();

// generate cards

function generateCards() {
  if (storeShown) {
    storeShown.innerHTML = "";

    stockFilter.forEach((item) => {
      const itemId = item._id;
      const itemName = item.Name;
      const itemPrice = item.Price;
      const itemStock = item.Stock;
      const itemImage = item.Image;
      const itemCategory = item.Category;
      const itemGallery = item.Gallery;

      if (itemStock > 0) {
        storeShown.innerHTML += `
       <div class="store-products__product store-products__product__stock" >
              <img src="${itemImage}" alt="Otamatone ${itemName} ">
              <div class="store-products__product__info"
                     data-id = "${itemId}"
                     data-category = "${itemCategory}"
                     data-name = "${itemName}"
                     data-price = "${itemPrice}"
                     data-image = ${itemImage}"
                     data-gallery = ${JSON.stringify(itemGallery)}
  
                     >
                 <h6>${itemCategory}</h6>    
                <h5>${itemName}</h5>
                <p>R$ ${parseFloat(itemPrice).toFixed(2).replace(".", ",")}</p>
              </div>
            </div>`;
      } else {
        storeShown.innerHTML += `
       <div class="store-products__product store-products__product__out-of-stock">
              <img src="${itemImage}" alt="Otamatone ${itemName} ">
              <div class="store-products__product__info">
              <h6>${itemCategory}</h6>  
                <h5>${itemName}</h5>
                <p>Esgotado</p>
              </div>
            </div>`;
      }
    });
  }
}

generateCards();
