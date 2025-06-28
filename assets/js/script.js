const amenazas = [
    { titulo: 'Phishing', descripcion: 'Suplantación de identidad mediante correos o mensajes falsos para robar credenciales.' },
    { titulo: 'Malware', descripcion: 'Software malicioso instalado sin consentimiento que daña o controla tu dispositivo.' },
    { titulo: 'Ransomware', descripcion: 'Secuestro de datos mediante cifrado, exigiendo rescate para recuperarlos.' },
    { titulo: 'DDoS', descripcion: 'Ataques de denegación de servicio que colapsan servidores con tráfico masivo.' }
];

    // Insertar tarjetas de amenazas en el contenedor
const cardsContainer = document.getElementById('cardsContainer');
    amenazas.forEach(amenaza => {
        const col = document.createElement('div');
        col.className = 'col-md-3';
        col.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                <h5 class="card-title">${amenaza.titulo}</h5>
                <p class="card-text">${amenaza.descripcion}</p>
                </div>
            </div>
            `;
        cardsContainer.appendChild(col);
    });

    // Datos de casos reales
const casosReales = [
    { titulo: 'Salt Typhoon (2024)', descripcion: 'Grupo vinculado a China interceptó llamadas y mensajes en redes de telecomunicaciones en EE.UU.' },
    { titulo: 'Marks & Spencer (2025)', descripcion: 'Interrupción del sistema de ventas online y filtración de datos de clientes.' }
];

    // Insertar elementos del carrusel
const carouselInner = document.getElementById('carouselInner');
    casosReales.forEach((caso, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        item.innerHTML = `
        <div class="p-4 bg-light">
            <h5>${caso.titulo}</h5>
            <p>${caso.descripcion}</p>
        </div>
        `;
        carouselInner.appendChild(item);
});

    // Inicializar el carrusel
const carouselElement = document.querySelector('#carouselCasos');
    new bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: true
});

