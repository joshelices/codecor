/* =========================================
   CODECOR
   CATÁLOGO DE INMUEBLES
========================================= */

const inmuebles = [


    {
        id: "piso-veracruz-001",

        titulo: "piso veracruz",

        localidad: "Rota",

        provincia: "Cádiz",

        tipo: "piso",

        precio: 260000,

        habitaciones: 2,

        banos: 2,

        metros: 98,

        operacion: "venta",

        garaje: false,

        estado: "Disponible",

        fechaAlta: "2026-09-05",

        descripcion:
            "Fantástico piso. situada en el centro, cerca de todas las comodidades.",

        imagenPrincipal:
            "images/inmuebles/piso-veracruz-001-1.jpg",

        fotos: [

            "images/inmuebles/piso-veracruz-001-1.jpg",

            "images/inmuebles/piso-veracruz-001-2.jpg",

            "images/inmuebles/piso-veracruz-001-3.jpg",

            "images/inmuebles/piso-veracruz-001-4.jpg"

        ]

    },
    {
    id: "campo-Cavales-002",

    titulo: "Terreno rotonda Los Cavales",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 295000,

    habitaciones: 2,

    banos: 1,

    metros: 10400,
    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-06",

    descripcion:
        "Bonito terreno situado en Rota, con una amplia superficie de terreno y múltiples posibilidades.",

    imagenPrincipal:
        "images/inmuebles/Campo-Cavales-002-1.jpg",

    fotos: [
        "images/inmuebles/Campo-Cavales-002-1.jpg",
        "images/inmuebles/Campo-Cavales-002-2.jpg",
        "images/inmuebles/Campo-Cavales-002-3.jpg",
        "images/inmuebles/Campo-Cavales-002-4.jpg"
    ]
},
{
    id: "casa-chiclana-003",

    titulo: "Casa adosada con patio",

    localidad: "Chiclana",

    provincia: "Cádiz",

    tipo: "casa",

    precio: 245000,

    habitaciones: 3,

    banos: 2,

    metros: 110,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-06",

    descripcion:
        "Bonito terreno situado en Rota, con una amplia superficie de terreno y múltiples posibilidades.",

    imagenPrincipal:
        "images/inmuebles/Finc-La-Marquesa-001-1.jpg",

    fotos: [
        "images/inmuebles/Finc-La-Marquesa-001-1.jpg",
        "images/inmuebles/Finc-La-Marquesa-001-2.jpg",
        "images/inmuebles/Finc-La-Marquesa-001-3.jpg",
        "images/inmuebles/Finc-La-Marquesa-001-4.jpg"
    ]
},
{
    id: "casa-jerez-004",

    titulo: "Casa adosada con patio",

    localidad: "Jerez",

    provincia: "Cádiz",

    tipo: "casa",

    precio: 245000,

    habitaciones: 3,

    banos: 2,

    metros: 90,
    
    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-06",

    descripcion:
        "Bonita casa adosada situada en Rota...",

    imagenPrincipal:
        "images/inmuebles/casa-jerez-004-1.jpg",

    fotos: [
        "images/inmuebles/casa-jerez-004-1.jpg",
        "images/inmuebles/casa-jerez-004-2.jpg",
        "images/inmuebles/casa-jerez-004-3.jpg",
        "images/inmuebles/casa-jerez-004-4.jpg"
    ]
},
{
    id: "finca-la-marquesa-005",

    titulo: "Finca La Marquesa",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 85000,

    habitaciones: 0,

    banos: 0,

    metros: 4472,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Finca rústica situada en Rota, con una amplia superficie de terreno y múltiples posibilidades.",

    imagenPrincipal:
        "images/inmuebles/finca-la-marquesa-1.jpg",

    fotos: [

        "images/inmuebles/finca-la-marquesa-1.jpg",

        "images/inmuebles/finca-la-marquesa-2.jpg",

        "images/inmuebles/finca-la-marquesa-3.jpg"

    ]
},
{
    id: "garaje-cerrado-006",

    titulo: "Garaje cerrado ",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "garaje",

    precio: 49000,

    habitaciones: 0,

    banos: 0,

    metros: 23,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Garaje cerrado en Rota, ideal como plaza de aparcamiento o espacio de almacenamiento.",

    imagenPrincipal:
        "images/inmuebles/garaje-cerrado-006-1.jpg",

    fotos: [

        "images/inmuebles/garaje-cerrado-006-1.jpg",

        "images/inmuebles/garaje-cerrado-006-2.jpg",

    ]
},
{
    id: "terreno-rustico-007",

    titulo: "Terreno rústico",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 75000,

    habitaciones: 0,

    banos: 0,

    metros: 3000,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Terreno rústico en Rota, ideal para construcción o uso agrícola.",

    imagenPrincipal:
        "images/inmuebles/terreno-rustico-007-1.jpg",

    fotos: [

        "images/inmuebles/terreno-rustico-007-1.jpg",

        "images/inmuebles/terreno-rustico-007-2.jpg",

        "images/inmuebles/terreno-rustico-007-3.jpg",

        "images/inmuebles/terreno-rustico-007-4.jpg"

    ]
},
{
    id: "terreno-algodones-008",

    titulo: "Terreno Amplio ",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 220000,

    habitaciones: 0,

    banos: 0,

    metros: 40000,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Terreno amplio en Rota, ideal para construcción o uso agrícola.",

    imagenPrincipal:
        "images/inmuebles/terreno-algodones-008-1.jpg",

    fotos: [

        "images/inmuebles/terreno-algodones-008-1.jpg",

        "images/inmuebles/terreno-algodones-008-2.jpg",

        "images/inmuebles/terreno-algodones-008-3.jpg",

        "images/inmuebles/terreno-algodones-008-4.jpg"

    ]
},
{
    id: "Piso-fernandoIII-009",

    titulo: "Piso Fernando III",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "piso",

    precio: 238000,

    habitaciones: 3,

    banos: 1,

    metros: 102,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Piso en Rota, ideal para vivir, a 200 metros de la playa.",

    imagenPrincipal:
        "images/inmuebles/Piso-fernandoIII-009-1.jpg",

    fotos: [

        "images/inmuebles/Piso-fernandoIII-009-1.jpg",

        "images/inmuebles/Piso-fernandoIII-009-2.jpg",

        "images/inmuebles/Piso-fernandoIII-009-3.jpg",

        "images/inmuebles/Piso-fernandoIII-009-4.jpg"

    ]
},
{
    id: "terreno-cultivo-010",

    titulo: "Terreno para cultivo",

    localidad: "Rota",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 50000,

    habitaciones: 0,

    banos: 0,

    metros: 2800,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Terreno para cultivo en Rota, ideal para uso agrícola.",

    imagenPrincipal:
        "images/inmuebles/terreno-cultivo-010-1.jpg",

    fotos: [

        "images/inmuebles/terreno-cultivo-010-1.jpg",

        "images/inmuebles/terreno-cultivo-010-2.jpg",

        "images/inmuebles/terreno-cultivo-010-3.jpg",

        "images/inmuebles/terreno-cultivo-010-4.jpg"

    ]
},
{
    id: "terreno-5escrituras-011",

    titulo: "Terreno amplio",

    localidad: "chipiona",

    provincia: "Cádiz",

    tipo: "campo",

    precio: 400000,

    habitaciones: 0,

    banos: 0,

    metros: 60000,

    operacion: "venta",

    garaje: false,

    estado: "Disponible",

    fechaAlta: "2026-09-08",

    descripcion:
        "Terreno muy amplio para cultivo en Chipiona, ideal para uso agrícola y construcción.",

    imagenPrincipal:
        "images/inmuebles/terreno-5escrituras-011-1.jpg",

    fotos: [

        "images/inmuebles/terreno-5escrituras-011-1.jpg",

        "images/inmuebles/terreno-5escrituras-011-2.jpg",

        "images/inmuebles/terreno-5escrituras-011-3.jpg",

        "images/inmuebles/terreno-5escrituras-011-4.jpg"

    ]
}
];


/* =========================================
   FORMATEAR PRECIO
========================================= */

function formatearPrecio(precio) {

    return new Intl.NumberFormat(
        "es-ES",
        {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0
        }
    ).format(precio);

}


/* =========================================
   OBTENER LOS 3 ÚLTIMOS INMUEBLES
========================================= */

function obtenerUltimosInmuebles(cantidad = 3) {

    return [...inmuebles]

        .sort(
            (a, b) =>
                new Date(b.fechaAlta) -
                new Date(a.fechaAlta)
        )

        .slice(0, cantidad);

}