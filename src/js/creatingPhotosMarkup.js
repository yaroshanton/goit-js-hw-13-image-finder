import refs from './refs'
import createArticle from '../templates/createArticle.hbs'

function creatingPhotosMarkup(data) {
    const markup = createArticle(data)

    refs.gallery.insertAdjacentHTML('beforeend', markup)
}

export default creatingPhotosMarkup;