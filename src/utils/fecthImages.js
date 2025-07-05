const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY; // la clave que pongas en tu .env

export const fetchImages = async ({
    query = 'nature',
    page = 1,
    per_page = 20,
    orientation = 'landscape',
    color = ''
} = {}) => {
    try {
        const params = new URLSearchParams({
            query,
            page,
            per_page,
            orientation,
        });
        if (color) params.append('color', color);

        const url = `https://api.unsplash.com/search/photos?${params.toString()}&client_id=${ACCESS_KEY}`;

        const res = await fetch(url);

        if (!res.ok) throw new Error('Error en la petición a Unsplash');

        const data = await res.json();

        return data.results; // array de imágenes

    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
};
