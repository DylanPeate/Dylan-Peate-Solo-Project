import { csrfFetch } from './csrf';
const LOAD_PICTURES = 'pictures/LOAD'
const ADD_PICTURE = 'pictures/add'

// Action Creators
const load = list => ({
    type: LOAD_PICTURES,
    list
})

const addPicture = picture => ({
    type: ADD_PICTURE,
    picture
})

//THUNK ACTION CREATORS

export const getPictures = () => async dispatch => {
    const response = await csrfFetch(`/api/pictures/`)
    console.log(response, '<----RESP')
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

export const deletePicture = (photo) => async dispatch => {
    const res = await csrfFetch('/api/pictures/', {
        method: "DELETE",
        body: JSON.stringify(deletedPic)
    })
    const deletedPic = await res.json();
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
        default:
            return state;
    }
}


export default pictureReducer;
