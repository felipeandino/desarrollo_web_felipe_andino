document.addEventListener('DOMContentLoaded', () => {
    const actividades = {
      1: {
        inicio: '2025-02-20 18:00',
        termino: '2025-02-20 00:00',
        comuna: 'Santiago',
        sector: 'Beauchef 850, Cancha',
        tema: 'Final UEFA Champions League',
        nombreOrganizador: 'Gianni Infantino',
        email: 'gianni.infantino@gmail.com',
        celular: '+41 21 345 67 89',
        contactarPor: 'Instagram',
        contactoID: '@gianni_infantino',
        descripcion: 'Después de años de arduas negociaciones, se llegó al acuerdo de realizar la final de la prestigiosa UEFA Champions League en Chile, siendo la sede la cancha de la Facultad de Ciencias Físicas y Matemáticas de la Universidad de Chile. Arsenal y Barcelona reeditarán la gran final del 2006, ¿se repetirá la historia y los culés se llevarán el título, o Arsenal podrá conseguir su primer trofeo de la Orejona?',
        fotos: ['fotos/champions1.png', 'fotos/champions2.jpg', 'fotos/champions3.png', 'fotos/champions4.png', 'fotos/champions5.jpg']
      },
      2: {
        inicio: '2025-02-28 08:00',
        termino: '2025-02-28 12:00',
        comuna: 'Maipú',
        sector: 'Plaza de Maipú',
        tema: 'Carrera corriendo como Naruto',
        nombreOrganizador: 'Pamela Jiles',
        email: 'pamela.jiles@gmail.com',
        celular: '+569 23456789',
        contactarPor: 'X',
        contactoID: '@PamJiles',
        descripcion: 'Se realizará la primera maratón corriendo como Naruto. Empezaremos en Plaza de Maipú y recorreremos toda la comuna.',
        fotos: ['fotos/naruto1.jpg', 'fotos/naruto2.jpg']
      },
      3: {
        inicio: '2025-03-21 00:00',
        termino: '2025-03-22 00:00',
        comuna: 'Valparaíso',
        sector: 'Laguna Verde',
        tema: 'Cantata para celebrar la llegada del otoño',
        nombreOrganizador: 'Jaime Flores',
        email: 'jamieflowers55@gmail.com',
        celular: '+569 48484845',
        contactarPor: 'WhatsApp',
        contactoID: '+569 48484845',
        descripcion: 'Cantaremos durante 24 horas ininterrumpidas para recibir la mejor estación del año: el precioso otoño.',
        fotos: ['fotos/otoño1.jpg', 'fotos/otoño2.jpg', 'fotos/otoño3.jpg']
      },
      4: {
        inicio: '2025-04-05 22:30',
        termino: '2025-04-06 05:00',
        comuna: 'Recoleta',
        sector: 'Av. Recoleta 345, Spot Freedom',
        tema: 'Carrete Otaku Dance',
        nombreOrganizador: 'Nicolás Liñán de Ariza',
        email: 'vardoc1@gmail.com',
        celular: '+569 33333331',
        contactarPor: 'Instagram',
        contactoID: '@vardoc1',
        descripcion: 'Celebramos la quinta edición de la gran Otaku Dance. Organizador: Vardoc.',
        fotos: ['fotos/otaku1.jpg', 'fotos/otaku2.jpg']
      },
      5: {
        inicio: '2025-04-18 00:00',
        termino: '2025-04-21 00:00',
        comuna: 'Providencia',
        sector: 'Parque Bustamante',
        tema: 'Recolección de Huevitos de Pascua',
        nombreOrganizador: 'Conejo de Pascua',
        email: 'eastereggs@gmail.com',
        celular: '+1 2584848512',
        contactarPor: 'Instagram',
        contactoID: '@thebigbunny',
        descripcion: '¡Ven a la competencia de recolección de huevitos de chocolate en Parque Bustamante! Estaremos tres días juntando huevitos y ganará el que tenga más.',
        fotos: ['fotos/pascua1.jpg']
      }
    };
  
    const filas = document.querySelectorAll('.actividad');
    const detalle = document.getElementById('detalle-actividad');
    const contenido = document.getElementById('contenido-detalle');
    const tabla = document.getElementById('tabla-actividades');
    const volverListado = document.getElementById('volverListado');
    const visorFoto = document.getElementById('visor-foto');
    const fotoGrande = document.getElementById('foto-grande');
    const cerrarFoto = document.getElementById('cerrarFoto');
  
    filas.forEach(fila => {
        fila.addEventListener('click', () => {
            const id = fila.dataset.id;
            const actividad = actividades[id];
            contenido.innerHTML = `
            <p><strong>Inicio:</strong> ${actividad.inicio}</p>
            <p><strong>Término:</strong> ${actividad.termino}</p>
            <p><strong>Comuna:</strong> ${actividad.comuna}</p>
            <p><strong>Sector:</strong> ${actividad.sector}</p>
            <p><strong>Tema:</strong> ${actividad.tema}</p>
            <p><strong>Descripción:</strong> ${actividad.descripcion}</p>
            <p><strong>Organizador:</strong> ${actividad.nombreOrganizador}</p>
            <p><strong>Email:</strong> ${actividad.email}</p>
            <p><strong>Celular:</strong> ${actividad.celular}</p>
            <p><strong>Contactar por:</strong> ${actividad.contactarPor}</p>
            <p><strong>ID de Contacto:</strong> ${actividad.contactoID}</p>
            <div><strong>Fotos:</strong><br>
                ${actividad.fotos.map(src => `<img src="${src}" width="320" height="240" style="margin:5px; cursor:pointer;" class="foto-miniatura">`).join('')}
            </div>
            `;
            tabla.style.display = 'none';
            detalle.style.display = 'block';
        });
    });
  
    volverListado.addEventListener('click', () => {
        detalle.style.display = 'none';
        tabla.style.display = 'block';
    });
  
    contenido.addEventListener('click', (e) => {
        if (e.target.classList.contains('foto-miniatura')) {
            fotoGrande.src = e.target.src;
            visorFoto.style.display = 'flex';
        }
    });
  
    cerrarFoto.addEventListener('click', () => {
        visorFoto.style.display = 'none';
        fotoGrande.src = '';
    });
});