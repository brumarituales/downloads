const grid = document.getElementById('contenedor-principal');

// Función para agrupar en bloques de 6
const chunk = (arr, size) => 
  Array.from({length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const bloques = chunk(data, 6);

bloques.forEach(bloque => {
  const bloqueDiv = document.createElement('div');
  bloqueDiv.className = 'bloque-gatito-6';
  
  bloque.forEach(ritual => {
    const mosaico = document.createElement('div');
    mosaico.className = 'celda-ritual'; 
    // Clase para posicionamiento (relative)
    
    if (ritual.acuarela) {

      // 1. Añadimos la imagen
      const img = document.createElement('img');
      img.src = ritual.imagenCompleta;
      img.alt = ritual.nombre;
      mosaico.appendChild(img);
      
      // 2. Añadimos el botón
      const btn = document.createElement('a'); 
      btn.className = 'boton-ritual';
      if (ritual.descarga) {
        btn.href = ritual.url;
        btn.target = "_blank";
        btn.title = ritual.nombre;
      } else {
        btn.title ="próximamente..."
      }
      btn.innerText = ritual.nombre;
      btn.style.textDecoration = 'none';      
      mosaico.appendChild(btn);

    } else {
    
      // Si no hay acuarela, quizás una celda vacía o clase 'oculta'
      mosaico.classList.add('celda-vacia');
    
    }
    console.log (mosaico);    
    bloqueDiv.appendChild(mosaico);
  });
  
  grid.appendChild(bloqueDiv);
});