import { langActionTypes } from '../actions/langAction'

const initialState = {
    selectedLang: '',
}

const langReducer = (state = initialState, action) => {
    switch (action.type){
        case langActionTypes.SELECTED_LANGUAGE_SUCCESS:
            return {
                selectedLang: action.payload
            }
        case langActionTypes.SELECTED_LANGUAGE_FAIL:
            return ''
        default:
            return state
    }

}

export default langReducer