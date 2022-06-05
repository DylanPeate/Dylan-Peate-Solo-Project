import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getComments, deleteCommentThunk } from '../../store/comment'
import './Comments.css'

function ShowComments(picture) {
    const dispatch = useDispatch()
    const pictureId = useParams().pictureId
    const pictures = useSelector(state => state.pictures)
    const selectedPicture = pictures[pictureId]
    let sessionUser = useSelector(state => state.session.user);
    const comments = Object.values(useSelector(state => state.comments))
    const reversedComments = [...comments].reverse()

    useEffect(() => {
        const stiliFunc = async () => {
            if (selectedPicture) {
                await dispatch(getComments(selectedPicture))
            }
        }
        stiliFunc()
    }, [dispatch])

    const delComment = comment => {
        dispatch(deleteCommentThunk(comment))
    }

    return (
        <div>
            {
                comments.length > 0 && reversedComments.map(comment => {
                    return (
                        <div className='comment' key={comment.id}>
                            <div className='commentUser'>
                                {comment.commentUser}
                            </div>
                            <div className='commentBody'>
                                {comment.body}
                            </div>
                            <div className='commentDelBtnDiv'>
                                <button className='commentDelBtn' onClick={() => delComment(comment)}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowComments;
