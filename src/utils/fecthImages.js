const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

const fetchImages = async (keyword, color = "", page = 1) => {
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=20&query=${keyword}&client_id=${ACCESS_KEY}`;
    if (color) { url += `&color=${color}` };

    color_input.value = "";


    const res = await fetch(url);
    if (!res.ok) throw new Error("Error fetching images");
    const data = await res.json();

    return data.results.map(photo => ({
        alt: photo.alt_description,
        photo: photo.urls.regular,
        original_photo: photo.urls.raw,
        color: photo.color,
    }));

};

export default fetchImages;
