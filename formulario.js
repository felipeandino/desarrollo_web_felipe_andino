document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("actividadForm");
    const region = document.getElementById("region");
    const comuna = document.getElementById("comuna");
    const tema = document.getElementById("tema");
    const temaInput = document.getElementById("temaInput");
    const fotosContainer = document.getElementById("fotosContainer");
    const agregarFotoBtn = document.getElementById("agregarFoto");
    const contactoCheckboxes = document.querySelectorAll("input[name='contactarPor']");
    const maxFotos = 5;
      
    // === Población dinámica de región y comuna ===
    const regionesYcomunas = {
        "Arica y Parinacota": ["Arica", "Camarones", "General Lagos", "Putre"],
        "Tarapacá": ["Alto Hospicio", "Camiña", "Colchane", "Huara", "Iquique", "Pica", "Pozo Almonte"],
        "Antofagasta": ["Antofagasta", "Calama", "María Elena", "Mejillones", "Ollagüe", "San Pedro de Atacama", "Sierra Gorda", "Taltal", "Tocopilla"],
        "Atacama": ["Alto del Carmen", "Caldera", "Chañaral", "Copiapó", "Diego de Almagro", "Freirina", "Huasco", "Tierra Amarilla", "Vallenar"],
        "Coquimbo": ["Andacollo", "Canela", "Combarbalá", "Coquimbo", "Illapel", "La Higuera", "La Serena", "Los Vilos", "Monte Patria", "Ovalle", "Paihuano", "Punitaqui", "Río Hurtado", "Salamanca", "Vicuña"],
        "Valparaíso": ["Algarrobo", "Cabildo", "Calle Larga", "Cartagena", "Casablanca", "Catemu", "Concón", "El Quisco", "El Tabo", "Hijuelas", "Isla de Pascua", "Juan Fernández", "La Calera", "La Cruz", "La Ligua", "Limache", "Llay-Llay", "Los Andes", "Nogales", "Olmué", "Panquehue", "Papudo", "Petorca", "Puchuncaví", "Putaendo", "Quillota", "Quilpué", "Quintero", "Rinconada", "San Antonio", "San Esteban", "San Felipe", "Santa María", "Santo Domingo", "Valparaíso", "Villa Alemana", "Viña del Mar", "Zapallar"],
        "Región Metropolitana": ["Alhué", "Buin", "Calera de Tango", "Cerrillos", "Cerro Navia", "Colina", "Conchalí", "Curacaví", "El Bosque", "El Monte", "Estación Central", "Huechuraba", "Independencia", "Isla de Maipo", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Lampa", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "María Pinto", "Melipilla", "Ñuñoa", "Padre Hurtado", "Paine", "Pedro Aguirre Cerda", "Peñaflor", "Peñalolén", "Pirque", "Providencia", "Pudahuel", "Puente Alto", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Bernardo", "San Joaquín", "San José de Maipo", "San Miguel", "San Pedro", "San Ramón", "Santiago", "Talagante", "Til Til", "Vitacura"],
        "O'Higgins": ["Chépica", "Chimbarongo", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "La Estrella", "Las Cabras", "Litueche", "Lolol", "Machalí", "Malloa", "Marchigüe", "Mostazal", "Nancagua", "Navidad", "Olivar", "Palmilla", "Paredones", "Peralillo", "Peumo", "Pichidegua", "Pichilemu", "Placilla", "Pumanque", "Quinta de Tilcoco", "Rancagua", "Rengo", "Requínoa", "San Fernando", "San Vicente de Tagua Tagua", "Santa Cruz"],
        "Maule": ["Cauquenes", "Chanco", "Colbún", "Constitución", "Curepto", "Curicó", "Empedrado", "Hualañé", "Licantén", "Linares", "Longaví", "Maule", "Molina", "Parral", "Pelarco", "Pelluhue", "Pencahue", "Rauco", "Retiro", "Río Claro", "Romeral", "Sagrada Familia", "San Clemente", "San Javier", "San Rafael", "Talca", "Teno", "Vichuquén", "Villa Alegre", "Yerbas Buenas"],
        "Ñuble": ["Bulnes", "Chillán Viejo", "Chillán", "Cobquecura", "Coelemu", "Coihueco", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Trehuaco", "Yungay"],
        "Biobío": ["Alto Biobío", "Antuco", "Arauco", "Cabrero", "Cañete", "Chiguayante", "Concepción", "Contulmo", "Coronel", "Curanilahue", "Florida", "Hualpén", "Hualqui", "Laja", "Lebu", "Los Álamos", "Los Ángeles", "Lota", "Mulchén", "Nacimiento", "Negrete", "Penco", "Quilaco", "Quilleco", "San Pedro de la Paz", "San Rosendo", "Santa Bárbara", "Santa Juana", "Talcahuano", "Tirúa", "Tomé", "Tucapel", "Yumbel"],
        "La Araucanía": ["Angol", "Carahue", "Cholchol", "Collipulli", "Cunco", "Curacautín", "Curarrehue", "Ercilla", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Lonquimay", "Los Sauces", "Lumaco", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Purén", "Renaico", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Traiguén", "Victoria", "Vilcún", "Villarrica"],
        "Los Ríos": ["Corral", "Futrono", "La Unión", "Lago Ranco", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Río Bueno", "Valdivia"],
        "Los Lagos": ["Ancud", "Calbuco", "Castro", "Chaitén", "Chonchi", "Cochamó", "Curaco de Vélez", "Dalcahue", "Fresia", "Frutillar", "Futaleufú", "Hualaihué", "Llanquihue", "Los Muermos", "Maullín", "Osorno", "Palena", "Puerto Montt", "Puerto Varas", "Puqueldón", "Purranque", "Puyehue", "Queilén", "Quemchi", "Quellón", "Quinchao", "Río Negro", "San Juan de la Costa", "San Pablo"],
        "Aysén": ["Aysén", "Chile Chico", "Cisnes", "Cochrane", "Coyhaique", "Guaitecas", "Lago Verde", "O'Higgins", "Río Ibáñez", "Tortel"],
        "Magallanes y la Antártica Chilena": ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Natales", "Porvenir", "Primavera", "Punta Arenas", "Río Verde", "San Gregorio", "Timaukel", "Torres del Paine"]
    
        };

    // Poblar select de regiones
    for (const regionNombre in regionesYcomunas) {
        const option = document.createElement("option");
        option.value = regionNombre;
        option.textContent = regionNombre;
        region.appendChild(option);
    }
  
     // Cuando cambia la región, actualizar comunas
    region.addEventListener("change", () => {
        const comunas = regionesYcomunas[region.value] || [];
        comuna.innerHTML = "<option value=''>Seleccione comuna</option>";
        comunas.forEach(comunaNombre => {
            const option = document.createElement("option");
            option.value = comunaNombre;
            option.textContent = comunaNombre;
            comuna.appendChild(option);
        });
    });

    // Manejar campo "tema: Otro"
    tema.addEventListener("change", () => {
        if (tema.value === "Otro") {
            temaInput.style.display = "inline-block";
        } else {
            temaInput.style.display = "none";
            temaInput.value = "";
        }
    });
      
    // Agregar campo de foto
    function agregarCampoFoto() {
        const currentFotos = fotosContainer.querySelectorAll("input[type='file']");
        if (currentFotos.length >= maxFotos) {
            alert("No puedes agregar más de 5 fotos.");
            return;
        }
      
        const input = document.createElement("input");
        input.type = "file";
        input.name = "foto";
        input.accept = "image/*";
        fotosContainer.appendChild(input);
    }
      
    agregarFotoBtn.addEventListener("click", agregarCampoFoto);

    // Validaciones
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let errores = [];
        const valor = (id) => document.getElementById(id).value.trim();
      
        // Lugar
        if (!region.value) errores.push("Debe seleccionar una región.");
        if (!comuna.value) errores.push("Debe seleccionar una comuna.");
        
        const sector = valor("sector");
        if (sector.length > 100) errores.push("El sector no puede superar los 100 caracteres.");
      
        // Organizador
        const nombre = valor("nombre");
        if (!nombre) errores.push("Debe ingresar el nombre del organizador.");
        if (nombre.length > 200) errores.push("El nombre no puede superar los 200 caracteres.");
      
        const email = valor("email");
        if (!email) errores.push("Debe ingresar un correo electrónico.");
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errores.push("Correo electrónico inválido.");
        if (email.length > 100) errores.push("El email no puede superar los 100 caracteres.");
      
        const celular = valor("celular");
        if (celular && !/^\+\d{1,3} \d{7,10}$/.test(celular)) {
            errores.push("Número de celular inválido. Ejemplo: +569 12345678");
        }
      
        // Contactar por
        let contactosSeleccionados = 0;
        contactoCheckboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                contactosSeleccionados++;
                const input = checkbox.parentElement.parentElement.querySelector("input[type='text']");
                if (input && input.style.display !== "none") {
                    if (input.value.length < 4 || input.value.length > 50) {
                        errores.push(`El campo de contacto para ${checkbox.value} debe tener entre 4 y 50 caracteres.`);
                        }
                    }
                }
            });
        if (contactosSeleccionados > 5) {
            errores.push("No puede seleccionar más de 5 formas de contacto.");
        }
      
        // Tema
        if (!tema.value) errores.push("Debe seleccionar un tema.");
        if (tema.value === "Otro") {
            const input = temaInput.value.trim();
            if (input.length < 3 || input.length > 15) {
                errores.push("Debe especificar un tema entre 3 y 15 caracteres.");
            }
        }
      
        // Fechas
        const inicio = document.getElementById("inicio").value;
        const termino = document.getElementById("termino").value;
      
        if (!inicio) errores.push("Debe indicar la fecha y hora de inicio.");
        const inicioFecha = new Date(inicio);
        let terminoFecha = termino ? new Date(termino) : null;
      
        if (termino && terminoFecha <= inicioFecha) {
            errores.push("La fecha y hora de término debe ser posterior a la de inicio.");
        }
      
        // Fotos
        const fotos = fotosContainer.querySelectorAll("input[type='file']");
        let fotosValidas = 0;
        fotos.forEach((fotoInput) => {
            if (fotoInput.files.length > 0) fotosValidas++;
        });
        
        if (fotosValidas < 1) errores.push("Debe subir al menos una foto.");
        if (fotos.length > 5) errores.push("No puede subir más de 5 fotos.");
      
        // Recuento de errores
        if (errores.length > 0) {
            alert("Errores encontrados:\n" + errores.join("\n"));
            return;
        }
      
        // Ocultar el formulario y mostrar confirmación personalizada
        form.style.display = "none";
        document.getElementById("confirmacionContainer").style.display = "block";
        document.getElementById("confirmarSi").onclick = () => {
            document.getElementById("confirmacionContainer").style.display = "none";
            document.getElementById("mensajeFinal").style.display = "block";
        };

        document.getElementById("confirmarNo").onclick = () => {
            document.getElementById("confirmacionContainer").style.display = "none";
            form.style.display = "block";
        };
    });
      
    // Carga automática de fecha
    const inicioInput = document.getElementById("inicio");
    const terminoInput = document.getElementById("termino");
      
    function formatDatetimeLocal(date) {
        const pad = n => n.toString().padStart(2, "0");
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    }
          
    const ahora = new Date();
    const tresHorasDespues = new Date(ahora.getTime() + 3 * 60 * 60 * 1000);
          
    inicioInput.value = formatDatetimeLocal(ahora);
    terminoInput.value = formatDatetimeLocal(tresHorasDespues);

    // Vuelta a la portada
    document.getElementById("volverPortada").addEventListener("click", () => {
        window.location.href = "portada.html";
    });
});