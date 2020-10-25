import refs from './refs'
import createArticle from '../templates/createArticle.hbs'

function creatingPhotosMarkup(articles) {
    const markup = createArticle(articles)

    refs.gallery.insertAdjacentHTML('beforeend', markup)
}

export default creatingPhotosMarkup;