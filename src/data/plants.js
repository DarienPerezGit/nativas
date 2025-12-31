// Datos de plantas ancestrales
// Los iconos se agregan en el componente para mantener los datos puros (sin JSX)

export const ancestralPlants = [
    {
        id: 1,
        name: "Jarilla",
        scientific: "Larrea divaricata",
        origin: "Precordillera Andina",
        element: "Fuego",
        iconName: "Sun", // Nombre del icono de lucide-react
        description: "Conocida como la farmacia del monte. Sus hojas resinosas contienen el calor del sol andino. Usada ancestralmente para fortalecer los huesos y limpiar la piel de impurezas.",
        image: "/jarilla-larrea-divaricata.jpg"
    },
    {
        id: 2,
        name: "Marcela",
        scientific: "Achyrocline satureioides",
        origin: "Litoral Húmedo",
        element: "Aire",
        iconName: "Wind", // Nombre del icono de lucide-react
        description: "Sagrada para los guaraníes, recolectada tradicionalmente en Viernes Santo. Su suavidad dorada calma el sistema digestivo y aquieta los pensamientos turbulentos.",
        image: "/Achyrocline satureioides.jpg"
    },
    {
        id: 3,
        name: "Carqueja",
        scientific: "Baccharis trimera",
        origin: "Montes del Norte",
        element: "Tierra",
        iconName: "Leaf", // Nombre del icono de lucide-react
        description: "El gran depurador. Una planta de carácter fuerte y amargo que limpia el hígado y renueva la sangre. Representa la fuerza de voluntad y la limpieza profunda.",
        image: "/Baccharis trimera.jpg"
    }
];
