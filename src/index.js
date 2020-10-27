import './styles.scss';
import refs from './js/refs'
import lodash from "lodash";
import apiService from './js/apiService'
import creatingPhotosMarkup from './js/creatingPhotosMarkup'



function onInputQuery(e) {
    e.preventDefault();

    clearListItem();

    const searchQuery = e.target.value;

    apiService.searchQuerry = searchQuery;

    apiService.resetPage();

    apiService.fetchPhoto().then(creatingPhotosMarkup);

    e.target.value = '';
}

function onButtonLoad(e) {

    let scrollWindowData = window.scrollY;

    apiService.fetchPhoto().then(data => {
        creatingPhotosMarkup(data);
        window.scrollTo(0, scrollWindowData);
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    });
}

function clearListItem() {
    refs.gallery.innerHTML = '';
}

refs.form.addEventListener('input', lodash.debounce(onInputQuery, 1000))
refs.button.addEventListener('click', onButtonLoad)
