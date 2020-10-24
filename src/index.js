import './styles.scss';
import lodash from "lodash";
import apiService from './js/apiService'
import refs from './js/refs'
import creatingPhotosMarkup from './js/creatingPhotosMarkup'


function onInputQuery(e) {
    e.preventDefault()

    apiService(e.target.value).then(data =>
        creatingPhotosMarkup(data)
    )
}

refs.form.addEventListener('input', lodash.debounce(onInputQuery, 1000))

