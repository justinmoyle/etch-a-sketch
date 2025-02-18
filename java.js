const container = document.getElementById('gridContainer');

for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridContainer.appendChild(gridItem);
}

