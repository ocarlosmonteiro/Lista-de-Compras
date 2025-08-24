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
    updateTable();

    form.reset();
    
});

function updateTable()
{
    tBody.innerHTML = '';

    listProduct.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td>${item.total.toFixed(2) }</td>
        <td>
            <button class="btn-action" id="editItem" title="Editar" onclick="editItem(${index})">✏️</button>
            <button class="btn-action" id="deleteItem" title="Apagar" onclick="removeItem(${index})">🗑️</button>
        </td>
        `;

        tBody.appendChild(row);
    });

    updateTotal();
}

function updateTotal() 
{
    const total = listProduct.reduce((acc, item) => acc + item.total, 0);
    totalText.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function editItem(index)
{
    const product = listProduct[index];

    document.getElementById("name").value = product.name;
    document.getElementById("price").value = product.price;
    document.getElementById("quantity").value = product.quantity;

    listProduct.splice(index, 1);
    updateTable();
}

function removeItem(index) 
{
    listProduct.splice(index, 1);
    updateTable();
}