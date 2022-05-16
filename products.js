const products = [{
        title: "Uva Crimson",
        price: 8.99,
        category: "Frutas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Banana",
        price: 5.69,
        category: "Frutas",
        image: "./img/products/product_2.svg",
        imageDescription: "",
    },
    {
        title: "Mamão",
        price: 4.99,
        category: "Frutas",
        image: "./img/products/product_3.svg",
        imageDescription: "",
    },
    {
        title: "Maçã",
        price: 9.22,
        category: "Frutas",
        image: "./img/products/product_4.svg",
        imageDescription: "",
    },
    {
        title: "Refrigerante",
        price: 8.99,
        category: "Bebidas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Vinho",
        price: 8.99,
        category: "Bebidas",
        image: "./img/products/product_6.svg",
        imageDescription: "",
    },
    {
        title: "Água Tônica",
        price: 8.99,
        category: "Bebidas",
        image: undefined,
        imageDescription: "",
    },
    {
        title: "Água de coco",
        price: 8.99,
        category: "Bebidas",
        image: "./img/products/product_8.svg",
        imageDescription: "",
    },

    {
        title: "Sabonete",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_9.svg",
        imageDescription: "",
    },

    {
        title: "Detergente",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_10.svg",
        imageDescription: "",
    },

    {
        title: "Limpa superfícies",
        price: 8.99,
        category: "Higiene",
        image: "./img/products/product_11.svg",
        imageDescription: "",
    },

    {
        title: "Lustra Móveis",
        price: 8.99,
        category: "Higiene",
        image: undefined,
        imageDescription: "",
    },
];

function criaItem(item) {
    // Puxa as inf
    const nome = item.title;
    const preco = item.price;
    const categoria = item.category;
    const image = item.image;

    // Tags
    const productMain = document.createElement("main");
    const ul = document.createElement("ul");
    const productCard = document.createElement("li");
    const productImg = document.createElement("img");
    const productTitle = document.createElement("h1");
    const productCategory = document.createElement("h5");
    const productPrice = document.createElement("strong");


    const frutas = document.getElementById("frutas");
    const bebidas = document.getElementById("bebidas");
    const higiene = document.getElementById("higiene");


    // Descrição
    if (image == undefined) {
        productImg.src = "./img/products/no-img.svg";
    } else {
        productImg.src = `${image}`;
    }
    productImg.alt = nome;
    productTitle.innerText = `${nome}`;
    productCategory.innerText = `${categoria}`;
    productPrice.innerText = `${preco}`;

    // Categorias
    if (item.category === "Frutas") {
        frutas.appendChild(ul);
        ul.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productMain);
        productMain.appendChild(productTitle);
        productMain.appendChild(productCategory);
        productMain.appendChild(productPrice);
    } else if (item.category === "Bebidas") {
        bebidas.appendChild(ul);
        ul.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productMain);
        productMain.appendChild(productTitle);
        productMain.appendChild(productCategory);
        productMain.appendChild(productPrice);
    } else if (item.category === "Higiene") {
        higiene.appendChild(ul);
        ul.appendChild(productCard);
        productCard.appendChild(productImg);
        productCard.appendChild(productMain);
        productMain.appendChild(productTitle);
        productMain.appendChild(productCategory);
        productMain.appendChild(productPrice);
    }

    productCard.classList.add("product");
    productImg.classList.add("product-img");
    productMain.classList.add("product-main");
    productTitle.classList.add("product-title");
    productCategory.classList.add("product-category");
    productPrice.classList.add("product-price");

    return productCard;
}

function carregarProduto(mostrar) {
    for (let i = 0; i < mostrar.length; i++) {
        const item = mostrar[i];

        const cardProduto = criaItem(item);
    }
}

carregarProduto(products);