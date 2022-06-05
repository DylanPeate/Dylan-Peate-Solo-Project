import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComments } from '../../store/comment'
import './CommentCreation.css'

function CommentCreation({ picture, setCommentCreate }) {
    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser, '< SessionUser')
    const history = useHistory();
    const dispatch = useDispatch();
    const SelectedPictureId = picture.id
    const [errors, setErrors] = useState([])

    // const [userId, setUserId] = useState(sessionUser.id)
    const [body, setBody] = useState('')
    // const [pictureId, setPictureId] = useState(SelectedPictureId)

    useEffect(() => {
        if (!sessionUser) {
            history.push('/signup')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCommentCreate(false)

        const newComment = {
            userId: sessionUser.id,
            body,
            pictureId: SelectedPictureId,
            commentUser: sessionUser.username
        }

        await dispatch(createComment(newComment))
            .then((createdComment) => history.push(`/picture/${SelectedPictureId}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
        //create form, create button to make comment
    }

    return (
        <div>
            <form id='createCommentForm' onSubmit={e => handleSubmit(e)}>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
                <label>Comment</label>
                <input
                    name="body"
                    type='text'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    placeholder='Enter your thoughts'
                />
                <button id="commentCreateSubBtn" type="submit">Submit</button>
            </form>
            <div>
                <button id="picCreateCancelBtn" onClick={() => (setCommentCreate(false))}>Cancel</button>
            </div>
        </div>
    )
}

export default CommentCreation;
