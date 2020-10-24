function fetchPhoto(searchQuery) {

    const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=18828859-930db298be4f18593f67074f1`;

    return fetch(baseUrl).then(res => res.json()).then(data => data.hits);
}
export default fetchPhoto;