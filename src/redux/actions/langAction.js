const langActionTypes = {
    SELECTED_LANGUAGE_SUCCESS: 'SELECTED_LANGUAGE_SUCCESS',
    SELECTED_LANGUAGE_FAIL: 'SELECTED_LANGUAGE_FAIL',
}

const SelectLanguageAction = (userState) => {
    return (dispatch) => {
        try{
            const language  = userState
            console.log(language)
            dispatch({type:langActionTypes.SELECTED_LANGUAGE_SUCCESS, payload: language})

        }catch (err){
            console.log(err)
            dispatch({type:langActionTypes.SELECTED_LANGUAGE_FAIL, payload: ''})
        }

    }
}

export { 
    SelectLanguageAction,
    langActionTypes
}