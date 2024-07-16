document.addEventListener('DOMContentLoaded', () => {
    const pricesList = document.getElementById('prices');
    const socket = io();

    socket.on('stock-price', (data) => {
        console.log(data)
        const li = document.createElement('li');
        li.textContent = data;
        pricesList.appendChild(li);
    });
});
