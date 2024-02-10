// const url_base = "https://platzi-avo.vercel.app";

// const mountNode = document.getElementById("js-mount");

// // WEB API
// // Conectarnos al servidor
// window
//   .fetch(`${url_base}/api/avo`)
//   // Procesar la respuesta y convertirla a JSON
//   .then(res => res.json())
//   // JSON => Data => Rendering la información de los elements en el browser
//   .then(responseJson => {
//     console.table(responseJson.data);

//     const items = [];

//     responseJson.data.forEach(item => {
//       // crear imagen
//       const image = document.createElement('img');
//       image.src = `${url_base}/${item.image}`;

//       // crear titulo
//       const title = document.createElement('h2');
//       title.textContent = item.name;

//       // crear precio
//       const price = document.createElement('div');
//       price.textContent = `${item.price}$`;

//       const container = document.createElement('div');
//       container.append(image, title, price);
//       items.push(container);
//     });

//     mountNode.append(...items);
//   });





const baseUrl = "https://platzi-avo.vercel.app";
const mountNode = document.getElementById("js-mount");

// const formatPrice = (price) =>
//   new Intl.NumberFormat("en-EN", {
//     style: "currency",
//     currency: "USD",
//   }).format(price);

const formatPrice = (price) => {
  return window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "EUR",
  }).format(price);
}

!(async function () {
  const response = await fetch(`${baseUrl}/api/avo`);
  // 💡 More about Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const { data: allAvos } = await response.json();

  // Create the HTML Nodes for each avocado we receive from the API
  // 💡 More about Array.map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const nodeArray = allAvos.map((avocado) => {
    // Create image node
    // <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
    const image = document.createElement("img");
    image.className =
      "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
    image.src = `${baseUrl}${avocado.image}`;

    // Create heading
    // <h2 class="text-lg">Erin Lindford</h2>
    const title = document.createElement("h2");
    title.className = "text-lg";
    title.textContent = avocado.name;

    // Create Price
    // <div class="text-gray-600">(555) 765-4321</div>
    const price = document.createElement("div");
    price.className = "text-gray-600";
    price.textContent = formatPrice(avocado.price);

    // Wrap price & title
    // <div class="text-center md:text-left"><price ><title ></div>
    const priceAndTitle = document.createElement("div");
    priceAndTitle.className = "text-center md:text-left";
    priceAndTitle.appendChild(title);
    priceAndTitle.appendChild(price);

    // Wrap Img and priceAndTitle
    // <div class="md:flex bg-white rounded-lg p-6">
    const card = document.createElement("div");
    card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    card.appendChild(image);
    card.appendChild(priceAndTitle);

    return card;
  });

  // Trick: Apply an array as a list of arguments
  mountNode.append(...nodeArray);
})();
