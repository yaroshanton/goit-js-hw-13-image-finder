const baseUrl = 'https://pixabay.com/api/';


export default {

    page: 1,

    fetchPhoto(searchQuery) {

        const requestParams = `?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=18828859-930db298be4f18593f67074f1`;

        return fetch(baseUrl + requestParams).then(res => res.json().then(data => {

            this.page += 1;

            return data.hits;
        })
        );
    }
}