/* =========================================
   CODECOR
   SCRIPT PRINCIPAL
========================================= */


/* =========================================
   VARIABLES GLOBALES
========================================= */

let inmuebleActual = null;

let indiceFotoActual = 0;


/* =========================================
   DETECTAR PÁGINA ACTUAL
========================================= */

function esPaginaLocalidad() {

    return document.getElementById(
        "location-property-grid"
    ) !== null;

}


function esPaginaInmueble() {

    return document.getElementById(
        "main-property-image"
    ) !== null;

}


function esPaginaInicio() {

    return document.getElementById(
        "featured-properties"
    ) !== null ||
    document.getElementById(
        "locations-grid"
    ) !== null;

}


/* =========================================
   RUTAS
========================================= */

function obtenerRutaImagen(ruta) {

    if (!ruta) {
        return "";
    }


    /*
       inmuebles.js utiliza rutas desde
       la raíz de la web:

       images/inmuebles/foto.jpg

       Dependiendo de dónde estemos,
       tenemos que añadir ../
    */


    if (
        esPaginaLocalidad() ||
        esPaginaInmueble()
    ) {

        return "../" + ruta;

    }


    return ruta;

}
function obtenerRutaImagenLocalidad(ruta) {

    if (!ruta) {
        return "";
    }

    if (esPaginaLocalidad() || esPaginaInmueble()) {
        return "../" + ruta;
    }

    return ruta;
}

/* =========================================
   RUTA DE LA FICHA DEL INMUEBLE
========================================= */

function obtenerRutaFichaInmueble(id) {

    if (esPaginaLocalidad()) {

        return `../inmuebles/inmueble.html?id=${encodeURIComponent(id)}`;

    }


    return `inmuebles/inmueble.html?id=${encodeURIComponent(id)}`;

}


/* =========================================
   HEADER
========================================= */

const header =
    document.getElementById("header");


if (header) {

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 80) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        }
    );

}


/* =========================================
   MENÚ MÓVIL
========================================= */

const menuToggle =
    document.getElementById(
        "menu-toggle"
    );


const nav =
    document.getElementById("nav");


if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "active"
            );

        }
    );


    const navLinks =
        nav.querySelectorAll(
            ".nav-link"
        );


    navLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove(
                    "active"
                );

            }
        );

    });

}


/* =========================================
   OBTENER LOCALIDAD DESDE LA URL
========================================= */

function obtenerLocalidadURL() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    return parametros.get(
        "localidad"
    );

}


/* =========================================
   OBTENER ID DEL INMUEBLE
========================================= */

function obtenerIdInmuebleURL() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    return parametros.get(
        "id"
    );

}


/* =========================================
   OBTENER LOCALIDAD ACTUAL
========================================= */

function obtenerLocalidadActual() {

    const localidadURL =
        obtenerLocalidadURL();


    if (!localidadURL) {

        return null;

    }


    return localidadURL.trim();

}


/* =========================================
   OBTENER INMUEBLE ACTUAL
========================================= */

function obtenerInmuebleActual() {

    const id =
        obtenerIdInmuebleURL();


    if (
        !id ||
        typeof inmuebles === "undefined"
    ) {

        return null;

    }


    return inmuebles.find(
        inmueble =>
            inmueble.id === id
    );

}


/* =========================================
   CARGAR INFORMACIÓN DE LOCALIDAD
========================================= */

function cargarInformacionLocalidad() {

    const localidad = obtenerLocalidadActual();

    if (!localidad) return;

    const localidadEncontrada =
        typeof localidades !== "undefined"
            ? localidades.find(
                item =>
                    item.nombre.toLowerCase() ===
                    localidad.toLowerCase()
            )
            : null;

    const nombreLocalidad =
        localidadEncontrada
            ? localidadEncontrada.nombre
            : localidad;

    const provincia =
        localidadEncontrada?.provincia || "Cádiz";

    /* =========================================
       ELEMENTOS SEO
    ========================================= */

    const title =
        document.getElementById("location-page-title");

    const metaDescription =
        document.getElementById("location-meta-description");

    const canonical =
        document.getElementById("location-canonical");

    const ogTitle =
        document.getElementById("location-og-title");

    const ogDescription =
        document.getElementById("location-og-description");


    /* =========================================
       ELEMENTOS VISIBLES DE LA PÁGINA
    ========================================= */

    const label =
        document.getElementById("location-label");

    const heading =
        document.getElementById("location-title");

    const description =
        document.getElementById("location-description");

    const captacionLabel =
        document.getElementById("captacion-label");

    const captacionDescription =
        document.getElementById("captacion-description");


    /* =========================================
       SEO
    ========================================= */

    const tituloSEO =
        `Inmobiliaria en ${nombreLocalidad} | CODECOR`;

    const descripcionSEO =
        `Descubre los inmuebles disponibles en ${nombreLocalidad}, ${provincia}. Encuentra viviendas, casas, pisos, terrenos y otras propiedades con CODECOR.`;


    if (title) {
        title.textContent = tituloSEO;
    }


    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            descripcionSEO
        );
    }


    if (ogTitle) {
        ogTitle.setAttribute(
            "content",
            tituloSEO
        );
    }


    if (ogDescription) {
        ogDescription.setAttribute(
            "content",
            descripcionSEO
        );
    }


    /* =========================================
       CANONICAL DINÁMICO
    ========================================= */

    if (canonical && localidadEncontrada) {

        const urlCanonical =
            `${window.location.origin}${window.location.pathname}?localidad=${encodeURIComponent(nombreLocalidad)}`;

        canonical.setAttribute(
            "href",
            urlCanonical
        );
    }


    /* =========================================
       CONTENIDO VISIBLE
    ========================================= */

    if (label) {
        label.textContent =
            `CODECOR · ${provincia.toUpperCase()}`;
    }


    if (heading) {
        heading.textContent =
            `Inmuebles en ${nombreLocalidad}`;
    }


    if (description) {

        if (
            localidadEncontrada &&
            localidadEncontrada.descripcion
        ) {

            description.textContent =
                localidadEncontrada.descripcion;

        } else {

            description.textContent =
                `Descubre nuestra selección de propiedades disponibles en ${nombreLocalidad}.`;
        }
    }


    if (captacionLabel) {

        captacionLabel.textContent =
            `¿TIENES UN INMUEBLE EN ${nombreLocalidad.toUpperCase()}?`;
    }


    if (captacionDescription) {

        captacionDescription.textContent =
            `Si tienes una propiedad en ${nombreLocalidad} y estás pensando en venderla, ponte en contacto con nosotros.`;
    }

}
/* =========================================
   OBTENER INMUEBLES DE UNA LOCALIDAD
========================================= */

function obtenerInmueblesLocalidad() {

    const localidad =
        obtenerLocalidadActual();


    if (
        !localidad ||
        typeof inmuebles === "undefined"
    ) {

        return [];

    }


    return inmuebles.filter(

        inmueble =>

            inmueble.localidad &&

            inmueble.localidad
                .toLowerCase() ===

            localidad.toLowerCase()

    );

}


/* =========================================
   CREAR TARJETA DE INMUEBLE
========================================= */

function crearTarjetaInmueble(
    inmueble
) {

    const article =
        document.createElement(
            "article"
        );


    article.className =
        "property-card";


    const imagen =
        obtenerRutaImagen(
            inmueble.imagenPrincipal
        );


    const rutaFicha =
        obtenerRutaFichaInmueble(
            inmueble.id
        );


    article.innerHTML = `

        <div
            class="property-image"
            style="
                background-image:
                url('${imagen}');
            "
        ></div>


        <div class="property-card-content">

           
            <span class="property-operation">

                ${
                    inmueble.tipo === "chalet"
                        ? "CHALET"
                        : inmueble.tipo === "casa"
                            ? "CASA"
                            : inmueble.tipo === "piso"
                                ? "PISO"
                                : inmueble.tipo === "apartamento"
                                    ? "APARTAMENTO"
                                    : inmueble.tipo === "campo"
                                        ? "CAMPO"
                                        : inmueble.tipo === "garaje"
                                            ? "GARAJE"
                                            : inmueble.tipo || ""
                }

            <span class="property-status">

                ${
                    inmueble.operacion === "reservado"
                        ? "RESERVADO"
                        : "VENTA"
                }

            </span>

            <h3>
                 ${inmueble.titulo}
            </h3>


            <p class="property-location">
                ${inmueble.localidad},
                ${inmueble.provincia}
            </p>


           <div class="property-details">

                ${
                    inmueble.tipo === "campo"

                        ? `
                            <span>
                                ${inmueble.metros} m²
                            </span>
                        `

                        : inmueble.tipo === "garaje"

                            ? `
                                <span>
                                    ${inmueble.metros} m²
                                </span>
                            `

                            : `
                                <span>
                                    ${inmueble.habitaciones} hab.
                                </span>

                                <span>
                                    ${inmueble.banos} baños
                                </span>

                                <span>
                                    ${inmueble.metros} m²
                                </span>
                            `
                }

            </div>


            <div class="property-card-bottom">

                <strong>
                    ${formatearPrecio(
                        inmueble.precio
                    )}
                </strong>


                <a
                    href="${rutaFicha}"
                    class="property-link"
                >
                    Ver inmueble →
                </a>

            </div>

        </div>

    `;


    return article;

}


/* =========================================
   RENDERIZAR CATÁLOGO DE LOCALIDAD
========================================= */

function renderizarCatalogoLocalidad(
    lista = obtenerInmueblesLocalidad()
) {

    const grid =
        document.getElementById(
            "location-property-grid"
        );


    if (!grid) {

        return;

    }


    const contador =
        document.getElementById(
            "property-results"
        );


    const noProperties =
        document.getElementById(
            "no-properties"
        );


    grid.innerHTML = "";


    if (contador) {

        contador.textContent =

            `${lista.length} inmueble${
                lista.length !== 1
                    ? "s"
                    : ""
            } disponible${
                lista.length !== 1
                    ? "s"
                    : ""
            }`;

    }


    if (lista.length === 0) {

        if (noProperties) {

            noProperties.style.display =
                "block";

        }

        return;

    }


    if (noProperties) {

        noProperties.style.display =
            "none";

    }


    lista.forEach(
        inmueble => {

            const card =
                crearTarjetaInmueble(
                    inmueble
                );


            grid.appendChild(
                card
            );

        }
    );

}


/* =========================================
   FILTROS DE LOCALIDAD
========================================= */

function inicializarFiltrosLocalidad() {

    const typeFilter =
    document.getElementById(
        "property-type-filter"
    );


    const operationFilter =
    document.getElementById(
        "property-operation-filter"
    );


    const garageFilter =
    document.getElementById(
        "property-garage-filter"
    );


    const sortFilter =
    document.getElementById(
        "property-sort"
    );


    if (
        !typeFilter &&
        !operationFilter &&
        !garageFilter &&   
        !sortFilter
    ) {

        return;

    }


    const listaActual =
        obtenerInmueblesLocalidad();


    function actualizar() {

        let resultado =
            [...listaActual];


        /* -------------------------------
           FILTRO POR TIPO
        -------------------------------- */

        if (
            typeFilter &&
            typeFilter.value !== "todos"
        ) {

            resultado =
                resultado.filter(

                    inmueble =>

                        inmueble.tipo ===
                        typeFilter.value

                );

        }
        /* -------------------------------
            FILTRO POR OPERACIÓN
        -------------------------------- */

        if (
            operationFilter &&
            operationFilter.value !== "todos"
        ) {

            resultado =
                resultado.filter(

                    inmueble =>

                        inmueble.operacion ===
                        operationFilter.value

                );

        }
        

        /* -------------------------------
        FILTRO POR GARAJE
        -------------------------------- */

        if (
            garageFilter &&
            garageFilter.value !== "todos"
        ) {

            if (
                garageFilter.value === "si"
            ) {

                resultado =
                    resultado.filter(
                        inmueble =>
                            inmueble.garaje === true
                    );

            }


            if (
                garageFilter.value === "no"
            ) {

                resultado =
                    resultado.filter(
                        inmueble =>
                            inmueble.garaje !== true
                    );

            }

        }

        /* -------------------------------
           ORDEN PRECIO MENOR
        -------------------------------- */

        if (
            sortFilter &&
            sortFilter.value ===
            "precio-menor"
        ) {

            resultado.sort(

                (a, b) =>
                    a.precio -
                    b.precio

            );

        }


        /* -------------------------------
           ORDEN PRECIO MAYOR
        -------------------------------- */

        if (
            sortFilter &&
            sortFilter.value ===
            "precio-mayor"
        ) {

            resultado.sort(

                (a, b) =>
                    b.precio -
                    a.precio

            );

        }


        /* -------------------------------
           ORDEN METROS
        -------------------------------- */

        if (
            sortFilter &&
            sortFilter.value ===
            "metros-mayor"
        ) {

            resultado.sort(

                (a, b) =>
                    b.metros -
                    a.metros

            );

        }


        /* -------------------------------
           MÁS RECIENTES
        -------------------------------- */

        if (
            sortFilter &&
            sortFilter.value ===
            "destacados"
        ) {

            resultado.sort(

                (a, b) =>

                    new Date(
                        b.fechaAlta
                    ) -

                    new Date(
                        a.fechaAlta
                    )

            );

        }


        renderizarCatalogoLocalidad(
            resultado
        );

    }


    if (typeFilter) {

        typeFilter.addEventListener(
            "change",
            actualizar
        );

    }
    if (operationFilter) {

        operationFilter.addEventListener(
            "change",
            actualizar
        );

    }


    if (garageFilter) {

        garageFilter.addEventListener(
            "change",
            actualizar
        );

    }

    if (sortFilter) {

        sortFilter.addEventListener(
            "change",
            actualizar
        );

    }


    actualizar();

}


/* =========================================
   INMUEBLES DESTACADOS
========================================= */

function renderizarDestacados() {

    const grid =
        document.getElementById(
            "featured-properties"
        );


    if (
        !grid ||
        typeof obtenerUltimosInmuebles !==
        "function"
    ) {

        return;

    }


    const destacados =
        obtenerUltimosInmuebles(3);


    grid.innerHTML = "";


    destacados.forEach(
        inmueble => {

            const card =
                crearTarjetaInmueble(
                    inmueble
                );


            grid.appendChild(
                card
            );

        }
    );

}


/* =========================================
   MOSTRAR LOCALIDADES EN INICIO
========================================= */

const locationsGrid =
    document.getElementById(
        "locations-grid"
    );


function mostrarLocalidades(
    localidadesMostrar = null
) {

    if (
        !locationsGrid ||
        typeof localidades === "undefined"
    ) {

        return;

    }


    const lista =
        localidadesMostrar ||
        localidades;


    locationsGrid.innerHTML = "";


    if (lista.length === 0) {

        locationsGrid.innerHTML = `

            <div class="no-locations">

                <h3>
                    No hemos encontrado esa localidad
                </h3>

                <p>
                    Prueba a buscar otra localidad.
                </p>

            </div>

        `;

        return;

    }


    lista.forEach(
        localidad => {

            const tarjeta =
                document.createElement(
                    "a"
                );


            tarjeta.className =
                "location-card";


            /*
                Si localidades.js ya tiene
                una página definida la usamos.

                Si no, generamos automáticamente
                la nueva URL dinámica.
            */

            tarjeta.href =
                localidad.pagina ||

                `ubicaciones/localidad.html?localidad=${
                    encodeURIComponent(
                        localidad.nombre
                    )
                }`;


            tarjeta.dataset.location =
                localidad.nombre;


            tarjeta.innerHTML = `

                <div
                    class="location-image"
                    style="
                        background-image:
                        url('${obtenerRutaImagenLocalidad(localidad.imagen)}');
                    "
                >
                </div>


                <div class="location-content">

                    <span>
                         
                        ${localidad.provincia}
                    </span>


                    <h3>
                        ${localidad.nombre}
                    </h3>


                    <p>
                        ${localidad.descripcion}
                    </p>


                    <strong>
                        Ver inmuebles →
                    </strong>

                </div>

            `;


            locationsGrid.appendChild(
                tarjeta
            );

        }
    );

}


/* =========================================
   MOSTRAR LOCALIDADES
========================================= */

mostrarLocalidades();


/* =========================================
   BUSCADOR DE UBICACIONES
========================================= */

const locationSearch =
    document.getElementById(
        "location-search"
    );


const searchResult =
    document.getElementById(
        "search-result"
    );


if (locationSearch) {

    locationSearch.addEventListener(
        "input",
        () => {

            const searchValue =
                locationSearch.value
                    .toLowerCase()
                    .trim();


            if (
                typeof localidades ===
                "undefined"
            ) {

                return;

            }


            if (searchValue === "") {

                mostrarLocalidades();


                if (searchResult) {

                    searchResult.textContent =
                        "Mostrando nuestras ubicaciones disponibles";

                }


                return;

            }


            const resultados =
                localidades.filter(

                    localidad =>

                        localidad.nombre
                            .toLowerCase()
                            .includes(
                                searchValue
                            )

                );


            mostrarLocalidades(
                resultados
            );


            if (!searchResult) {

                return;

            }


            if (
                resultados.length === 0
            ) {

                searchResult.textContent =
                    "No hemos encontrado esa localidad.";

            } else {

                searchResult.textContent =

                    `${resultados.length} ubicación${
                        resultados.length !== 1
                            ? "es"
                            : ""
                    } encontrada${
                        resultados.length !== 1
                            ? "s"
                            : ""
                    }.`;

            }

        }
    );

}


/* =========================================
   FICHA INDIVIDUAL DEL INMUEBLE
========================================= */

function cargarFichaInmueble() {

    if (!esPaginaInmueble()) {

        return;

    }


    const id =
        obtenerIdInmuebleURL();


    if (!id) {

        mostrarErrorInmueble(
            "No se ha especificado ningún inmueble."
        );

        return;

    }


    const inmueble =
        obtenerInmuebleActual();


    if (!inmueble) {

        mostrarErrorInmueble(
            "No hemos encontrado este inmueble."
        );

        return;

    }


    inmuebleActual =
        inmueble;
    const visitProperty =
        document.getElementById("visit-property");

    if (visitProperty) {
        visitProperty.value =
            inmueble.titulo +
            " - " +
            inmueble.localidad +
            " (" +
            inmueble.id +
            ")";
        }

   /* =========================================
    SEO DINÁMICO DEL INMUEBLE
    ========================================= */

    const pageTitle = document.getElementById("property-page-title");

    const metaDescription = document.getElementById(
        "property-meta-description"
    );

    const canonical = document.getElementById(
        "property-canonical"
    );

    const ogTitle = document.getElementById(
        "property-og-title"
    );

    const ogDescription = document.getElementById(
        "property-og-description"
    );

    const ogImage = document.getElementById(
        "property-og-image"
    );


    /* ---------- TÍTULO ---------- */

    const tituloSEO = `${inmueble.titulo} | CODECOR`;

    if (pageTitle) {
        pageTitle.textContent = tituloSEO;
    }


    /* ---------- DESCRIPCIÓN ---------- */

    const descripcionSEO =
        `${inmueble.titulo}. ` +
        `${inmueble.localidad}, ${inmueble.provincia}. ` +
        `${inmueble.metros} m². ` +
        `${inmueble.habitaciones} habitaciones. ` +
        `${formatearPrecio(inmueble.precio)}. ` +
        `CODECOR.`;

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            descripcionSEO
        );
    }


    /* ---------- CANONICAL ---------- */

    if (canonical) {

        const urlCanonical =
            `${window.location.origin}` +
            `${window.location.pathname}` +
            `?id=${encodeURIComponent(inmueble.id)}`;

        canonical.setAttribute(
            "href",
            urlCanonical
        );
    }


    /* ---------- OPEN GRAPH: TÍTULO ---------- */

    if (ogTitle) {
        ogTitle.setAttribute(
            "content",
            tituloSEO
        );
    }


    /* ---------- OPEN GRAPH: DESCRIPCIÓN ---------- */

    if (ogDescription) {
        ogDescription.setAttribute(
            "content",
            descripcionSEO
        );
    }


    /* ---------- OPEN GRAPH: IMAGEN ---------- */

    if (ogImage) {

        const imagenOg =
            new URL(
                inmueble.imagenPrincipal,
                `${window.location.origin}/`
            ).href;

        ogImage.setAttribute(
            "content",
            imagenOg
        );
    }


    const location =
        document.getElementById(
            "property-location"
        );


    if (location) {

        location.textContent =
            `${inmueble.localidad.toUpperCase()} · ${inmueble.provincia.toUpperCase()}`;

    }


    const title =
        document.getElementById(
            "property-title"
        );


    if (title) {

        title.textContent =
            inmueble.titulo;

    }


    const price =
        document.getElementById(
            "property-price"
        );


    if (price) {

        price.textContent =
            formatearPrecio(
                inmueble.precio
            );

    }


    const description =
    document.getElementById(
        "property-description"
    );


if (description) {

    description.textContent =
        inmueble.descripcion;

}


/* =========================================
   TIPO
========================================= */

const type =
    document.getElementById(
        "property-type"
    );


if (type) {

    type.textContent =
        inmueble.tipo;

}


/* =========================================
   SUPERFICIE
========================================= */

const metros =
    document.getElementById(
        "property-metros"
    );


if (metros) {

    metros.textContent =
        `${inmueble.metros} m²`;

}


/* =========================================
   HABITACIONES
========================================= */

const rooms =
    document.getElementById(
        "property-rooms"
    );


/* =========================================
   BAÑOS
========================================= */

const bathrooms =
    document.getElementById(
        "property-bathrooms"
    );


/* =========================================
   ADAPTAR CARACTERÍSTICAS
========================================= */

if (
    inmueble.tipo === "campo" ||
    inmueble.tipo === "garaje"
) {

    /*
       Campo y garaje no necesitan
       habitaciones ni baños.
    */

    if (rooms) {

        rooms.parentElement.style.display =
            "none";

    }

    if (bathrooms) {

        bathrooms.parentElement.style.display =
            "none";

    }

} else {

    /*
       Viviendas:
       mostramos habitaciones y baños.
    */

    if (rooms) {

        rooms.parentElement.style.display =
            "";

        rooms.textContent =
            inmueble.habitaciones;

    }

    if (bathrooms) {

        bathrooms.parentElement.style.display =
            "";

        bathrooms.textContent =
            inmueble.banos;

    }

}


/* =========================================
   UBICACIÓN
========================================= */

const city =
    document.getElementById(
        "property-city"
    );


if (city) {

    city.textContent =
        inmueble.localidad;

}


/* =========================================
   ESTADO
========================================= */

const status =
    document.getElementById(
        "property-status"
    );


if (status) {

    status.textContent =
        inmueble.operacion === "reservado"
            ? "RESERVADO"
            : "VENTA";

}

    /* =====================================
       GALERÍA
    ===================================== */

    const thumbnails =
        document.getElementById(
            "property-thumbnails"
        );


    const mainImage =
        document.getElementById(
            "main-property-image"
        );


    if (
        !thumbnails ||
        !mainImage
    ) {

        return;

    }


    if (
        !inmueble.fotos ||
        inmueble.fotos.length === 0
    ) {

        return;

    }


    thumbnails.innerHTML =
        "";


    /* =====================================
       CREAR MINIATURAS
    ===================================== */

    inmueble.fotos.forEach(
        (foto, index) => {

            const thumb =
                document.createElement(
                    "div"
                );


            thumb.className =
                "property-thumb";


            if (index === 0) {

                thumb.classList.add(
                    "active"
                );

            }


            thumb.dataset.image =
                index + 1;


            thumb.setAttribute(
                "role",
                "button"
            );


            thumb.setAttribute(
                "tabindex",
                "0"
            );


            thumb.setAttribute(
                "aria-label",
                `Ver fotografía ${
                    index + 1
                }`
            );


            thumb.style.backgroundImage =

                `url("${obtenerRutaImagen(
                    foto
                )}")`;


            thumb.addEventListener(
                "click",
                () => {

                    cambiarImagenFicha(
                        inmueble,
                        index
                    );

                }
            );


            thumb.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                        "Enter" ||
                        event.key ===
                        " "
                    ) {

                        event.preventDefault();

                        cambiarImagenFicha(
                            inmueble,
                            index
                        );

                    }

                }
            );


            thumbnails.appendChild(
                thumb
            );

        }
    );


    /* =====================================
       MOSTRAR IMAGEN
    ===================================== */

    indiceFotoActual =
        0;


    function mostrarImagen() {

        const foto =
            inmueble.fotos[
                indiceFotoActual
            ];


        mainImage.style.backgroundImage =

            `url("${obtenerRutaImagen(
                foto
            )}")`;


        document
            .querySelectorAll(
                ".property-thumb"
            )
            .forEach(
                (
                    thumb,
                    index
                ) => {

                    thumb.classList.toggle(

                        "active",

                        index ===
                        indiceFotoActual

                    );

                }
            );

    }


    mostrarImagen();


    /* =====================================
       ANTERIOR
    ===================================== */

    const prev =
        document.getElementById(
            "gallery-prev"
        );


    if (prev) {

        prev.addEventListener(
            "click",
            () => {

                indiceFotoActual--;


                if (
                    indiceFotoActual < 0
                ) {

                    indiceFotoActual =
                        inmueble.fotos.length - 1;

                }


                mostrarImagen();

            }
        );

    }


    /* =====================================
       SIGUIENTE
    ===================================== */

    const next =
        document.getElementById(
            "gallery-next"
        );


    if (next) {

        next.addEventListener(
            "click",
            () => {

                indiceFotoActual++;


                if (
                    indiceFotoActual >=
                    inmueble.fotos.length
                ) {

                    indiceFotoActual =
                        0;

                }


                mostrarImagen();

            }
        );

    }


    /* =====================================
       TECLADO
    ===================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key ===
                "ArrowLeft"
            ) {

                indiceFotoActual--;


                if (
                    indiceFotoActual < 0
                ) {

                    indiceFotoActual =
                        inmueble.fotos.length - 1;

                }


                mostrarImagen();

            }


            if (
                event.key ===
                "ArrowRight"
            ) {

                indiceFotoActual++;


                if (
                    indiceFotoActual >=
                    inmueble.fotos.length
                ) {

                    indiceFotoActual =
                        0;

                }


                mostrarImagen();

            }

        }
    );

}


/* =========================================
   ERROR DE INMUEBLE
========================================= */

function mostrarErrorInmueble(
    mensaje
) {

    const title =
        document.getElementById(
            "property-title"
        );


    const description =
        document.getElementById(
            "property-description"
        );


    if (title) {

        title.textContent =
            "Inmueble no encontrado";

    }


    if (description) {

        description.textContent =
            mensaje;

    }


    const mainImage =
        document.getElementById(
            "main-property-image"
        );


    if (mainImage) {

        mainImage.style.backgroundImage =
            "none";

    }

}


/* =========================================
   CAMBIAR IMAGEN DE FICHA
========================================= */

function cambiarImagenFicha(
    inmueble,
    indice
) {

    const mainImage =
        document.getElementById(
            "main-property-image"
        );


    if (
        !mainImage ||
        !inmueble ||
        !inmueble.fotos ||
        !inmueble.fotos[indice]
    ) {

        return;

    }


    indiceFotoActual =
        indice;


    mainImage.style.backgroundImage =

        `url("${obtenerRutaImagen(
            inmueble.fotos[indice]
        )}")`;


    document
        .querySelectorAll(
            ".property-thumb"
        )
        .forEach(
            (
                thumb,
                index
            ) => {

                thumb.classList.toggle(

                    "active",

                    index === indice

                );

            }
        );

}


/* =========================================
   INICIAR CODECOR
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        /*
           LOCALIDADES
        */

        if (
            esPaginaLocalidad()
        ) {

            cargarInformacionLocalidad();

            inicializarFiltrosLocalidad();

        }


        /*
           INMUEBLES DESTACADOS
        */

        renderizarDestacados();


        /*
           FICHA DE INMUEBLE
        */

        if (
            esPaginaInmueble()
        ) {

            cargarFichaInmueble();

        }

    }
);
/* =========================================
   FORMULARIO SOLICITAR VISITA
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const requestVisitButton =
        document.getElementById("request-visit-button");

    const visitFormContainer =
        document.getElementById("visit-form-container");

    if (
        requestVisitButton &&
        visitFormContainer
    ) {

        requestVisitButton.addEventListener(
            "click",
            function () {

                // Mostrar formulario
                visitFormContainer.style.display = "block";

                // Desplazarse hasta el formulario
                visitFormContainer.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }
        );

    }

});
/* =====================================
   AVISO DE COOKIES
====================================== */

document.addEventListener("DOMContentLoaded", function () {

    const cookieBanner =
        document.getElementById("cookie-banner");

    const acceptButton =
        document.getElementById("cookie-accept");

    const rejectButton =
        document.getElementById("cookie-reject");

    const configButton =
        document.getElementById("cookie-config");


    if (!cookieBanner) {
        return;
    }


    const cookieChoice =
        localStorage.getItem("codecorCookies");


    /* ---------------------------------
       SI YA HAY UNA ELECCIÓN
    --------------------------------- */

    if (cookieChoice) {

        cookieBanner.style.display = "none";

    }


    /* ---------------------------------
       ACEPTAR
    --------------------------------- */

    if (acceptButton) {

        acceptButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "codecorCookies",
                    "accepted"
                );

                cookieBanner.style.display = "none";

            }
        );

    }


    /* ---------------------------------
       RECHAZAR
    --------------------------------- */

    if (rejectButton) {

        rejectButton.addEventListener(
            "click",
            function () {

                localStorage.setItem(
                    "codecorCookies",
                    "rejected"
                );

                cookieBanner.style.display = "none";

            }
        );

    }


    /* ---------------------------------
       CONFIGURAR
    --------------------------------- */

   if (configButton) {

        configButton.addEventListener(
            "click",
            function () {

                if (
                    window.location.pathname.includes("/ubicaciones/") ||
                    window.location.pathname.includes("/inmuebles/")
                ) {

                    window.location.href =
                        "../politica-cookies.html";

                } else {

                    window.location.href =
                        "politica-cookies.html";

                }

            }
        );

    }

});

/* =========================================
   FIN CODECOR
========================================= */
