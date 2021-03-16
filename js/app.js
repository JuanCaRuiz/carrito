/******** VARIABLES *******/
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    listaCursos.addEventListener('click', agregarCurso);
}


/************ FUNCIONES **********/

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.u-pull-right').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    articulosCarrito = [...articulosCarrito, infoCurso];
    carritoHTML();
    console.log(articulosCarrito);
}

function carritoHTML() {
    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            ${curso.imagen}
        </td>
        `;

        contenedorCarrito.appendChild(row);
    })
}

function limpiarHTML(){
    /**opcion 1 */
    //contenedorCarrito.innerHTML = '';

    /**opcion 2 mas recomendada */
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}



