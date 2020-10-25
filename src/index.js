import './styles.scss';
import lodash from "lodash";
import apiService from './js/apiService'
import refs from './js/refs'
import creatingPhotosMarkup from './js/creatingPhotosMarkup'

let query = '';

function onInputQuery(e) {
    e.preventDefault();

    const searchQuery = e.target.value;

    query = searchQuery;

    apiService.fetchPhoto(searchQuery).then(articles => {
        creatingPhotosMarkup(articles)
    });
}

function onButtonLoad() {
    apiService.fetchPhoto(query).then(articles => {
        creatingPhotosMarkup(articles)
    });
}

refs.form.addEventListener('input', lodash.debounce(onInputQuery, 1000))
refs.button.addEventListener('click', onButtonLoad)
