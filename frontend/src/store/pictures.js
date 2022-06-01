import { csrfFetch } from './csrf';
const LOAD_PICTURES = 'pictures/LOAD'

// Action Creators
const load = list => ({
    type: LOAD_PICTURES,
    list
})

//THUNK ACTION CREATORS

export const getPictures = () => async dispatch => {
    const response = await csrfFetch(`/api/pictures/`)

    if (response.ok) {
        const pictures = await response.json()
        dispatch(load(pictures))
    }
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
