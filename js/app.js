const grid = document.getElementById("grid");

function render(list){
    grid.innerHTML = "";

    list.forEach(p => {

        grid.innerHTML += `
            <div class="card">

                <img src="${p.image}">

                <h3>${p.name}</h3>

                <p>${p.category} | ${p.gsm}gsm</p>

                <p>${p.feature}</p>

                <a href="product.html?id=${p.id}">
                    View Details
                </a>

            </div>
        `;
    });
}

render(products);

function filterProducts(cat){

    if(cat === "All"){
        render(products);
        return;
    }

    const filtered =
        products.filter(p => p.category === cat);

    render(filtered);
}

document
.getElementById("search")
.addEventListener("input", e => {

    const value =
        e.target.value.toLowerCase();

    const filtered =
        products.filter(p =>
            p.name.toLowerCase().includes(value)
        );

    render(filtered);
});
