import { csrfFetch } from './csrf';
const LOAD_PICTURES = 'pictures/LOAD'
const ADD_PICTURE = 'pictures/add'
const DELETE_PICTURE = 'pictures/delete'

// Action Creators
const load = list => ({
    type: LOAD_PICTURES,
    list
})

const addPicture = picture => ({
    type: ADD_PICTURE,
    picture
})

const deletePicture = (pictureId) => {
    return {
        type: DELETE_PICTURE,
        pictureId
    }
}

//THUNK ACTION CREATORS

export const getPictures = () => async dispatch => {
    const response = await csrfFetch(`/api/pictures/`)
    if (response.ok) {
        const pictures = await response.json()
        dispatch(load(pictures))
        return pictures;
    }
}

export const editPicture = (photo) => async dispatch => {
    const response = await csrfFetch(`/api/pictures/${photo.id}`, {
        method: 'PUT',
        body: JSON.stringify(photo)
    })

    if (response.ok) {
        const editedPicture = await response.json();
        dispatch(addPicture(photo))
        return editedPicture
    }
}

export const deletePictureThunk = (selectedPic) => async dispatch => {
    console.log(JSON.stringify(selectedPic))
    const response = await csrfFetch('/api/pictures/delete', {
        method: "DELETE",
        body: JSON.stringify(selectedPic)
    })
    const deletedPic = await response.json();
    dispatch(deletePicture(deletedPic))
    return deletedPic
}

//REDUCER

const pictureReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_PICTURES:
            const allPictures = {};
            action.list.forEach(picture => {
                allPictures[picture.id] = picture;
            });
            return allPictures
        case DELETE_PICTURE:
            const deletedState = { ...state }
            delete deletedState[action.photoId]
            return deletedState
        case ADD_PICTURE:
            return { ...state, [action.picture.id]: action.picture }
        default:
            return state;
    }
}


export default pictureReducer;
