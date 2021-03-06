import { csrfFetch } from './csrf'

const ADD_COMMENT = 'comments/add'
const LOAD_COMMENTS = 'comments/load'
const DELETE_COMMENT = 'comments/delete'

const addComment = newComment => ({
    type: ADD_COMMENT,
    newComment
})
const load = list => ({
    type: LOAD_COMMENTS,
    list
})
const deleteComment = commentId => {
    return {
        type: DELETE_COMMENT,
        commentId
    }
}

export const getComments = (picture) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${picture.id}`)
    if (response.ok) {
        const comments = await response.json()
        dispatch(load(comments))
        return comments;
    }
}

export const createComment = comment => async (dispatch) => {
    const res = await csrfFetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment)
    })
    if (res.ok) {
        const newComment = await res.json()
        dispatch(addComment(newComment))
        return newComment
    }
}

export const deleteCommentThunk = comment => async (dispatch) => {
    const response = await csrfFetch('/api/comments', {
        method: 'DELETE',
        body: JSON.stringify(comment)
    })
    const deletedComment = await response.json()
    dispatch(deleteComment(comment.id))
    return deletedComment
}

const commentReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newState = { ...state }
            newState[action.newComment.id] = action.newComment
            return newState
        case LOAD_COMMENTS:
            const allComments = {};
            action.list.forEach(comment => {
                allComments[comment.id] = comment;
            });
            return allComments
        case DELETE_COMMENT:
            const deletedState = { ...state }
            delete deletedState[action.commentId]
            return deletedState
        default:
            return state
    }

}

export default commentReducer;
