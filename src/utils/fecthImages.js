// Define la clave de acceso a la API de Unsplash
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

// Función para obtener imágenes desde Unsplash según los filtros
const fetchImages = async (keyword, color = "", orientation = "", page = 1, per_page = 20) => {
    // Construye la URL de la petición con los parámetros recibidos
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${keyword}&client_id=${ACCESS_KEY}`;
    if (color) { url += `&color=${color}` };
    if (orientation) { url += `&orientation=${orientation}` };

    // Realiza la petición a la API
    const res = await fetch(url);
    if (!res.ok) throw new Error("Error fetching images");
    const data = await res.json();

    // Devuelve un array con los datos relevantes de cada foto
    return data.results.map(photo => ({
        alt: photo.alt_description,
        photo: photo.urls.regular,
        original_photo: photo.urls.raw,
        color: photo.color,
    }));
};

export default fetchImages;