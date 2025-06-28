
// script Index 2
const amenazas = [
    { titulo: 'Phishing', descripcion: 
        'Suplantación de identidad mediante correos o mensajes falsos para robar credenciales.', 
        imagen: 'assets/img/phishing.png' },
    { titulo: 'Malware', descripcion: 
        'Software malicioso instalado sin consentimiento que daña o controla tu dispositivo.', 
        imagen: 'assets/img/Malware.jpg' },
    { titulo: 'Ransomware', descripcion: 
        'Secuestro de datos mediante cifrado, exigiendo rescate para recuperarlos.', 
        imagen: 'assets/img/Ramsomware.jpg' },
    { titulo: 'DDoS', descripcion: 
        'Ataques de denegación de servicio que colapsan servidores con tráfico masivo.', 
        imagen: 'assets/img/DDoS.png' }
];


    // Insertar tarjetas de amenazas en el contenedor
const cardsContainer = document.getElementById('cardsContainer');
amenazas.forEach(amenaza => {
    const col = document.createElement('div');
    col.className = 'col-md-3';
    col.innerHTML = `
        <div class="card h-100 clickable-card" style="cursor:pointer;">
            <img src="${amenaza.imagen}" class="card-img-top" alt="${amenaza.titulo}">
            <div class="card-body">
                <h5 class="card-title">${amenaza.titulo}</h5>
                <p class="card-text d-none">${amenaza.descripcion}</p>
            </div>
        </div>
    `;
    cardsContainer.appendChild(col);

    // Interacción: mostrar/ocultar descripción y efecto hover (dentro del bucle para acceder a col)
    const card = col.querySelector('.card');
    card.addEventListener('click', () => {
        const desc = card.querySelector('.card-text');
        desc.classList.toggle('d-none');
    });
    card.addEventListener('mouseover', () => {
        card.classList.add('shadow-lg');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('shadow-lg');
    });
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
