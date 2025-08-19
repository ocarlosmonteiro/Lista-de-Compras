const form = document.getElementById("formProducts");
const tBody = document.getElementById("tableProducts");
const totalText = document.querySelector("h3");

let listProduct = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const price = parseFloat(document.getElementById("price").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    const total = price * quantity;

    const product = {name, price, quantity, total};

    listProduct.push(product);

    console.log(listProduct);
    incrementTable(product);

    form.reset();
    
});

function incrementTable(product)
{
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price.toFixed(2)}</td>
        <td>${product.quantity}</td>
        <td>${product.total.toFixed(2)}</td>
        <td>
           <button class="btn-action" id="editItem" title="Editar" onclick="editItem()"></button>
            <button class="btn-action" id="deleteItem" title="Apagar" onclick="removeItem()"></button>
        </td>
    `;

    tBody.appendChild(row);

}

function editItem()
{
    console.log("teste")
}

function removeItem()
{
    console.log("Teste 2")
}


//totalText.textContent = `Total Geral: R$ ${}`
