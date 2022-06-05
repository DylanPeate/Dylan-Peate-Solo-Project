import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createComment, getComments } from '../../store/comment'
import './CommentCreation.css'

function CommentCreation({ picture, setCommentCreate }) {
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const SelectedPictureId = picture.id
    const [errors, setErrors] = useState([])

    const [body, setBody] = useState('')

    useEffect(() => {
        if (!sessionUser) {
            history.push('/signup')
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (body.length < 255) {
            setErrors([]);
            setCommentCreate(false)


            const newComment = {
                userId: sessionUser.id,
                body,
                pictureId: SelectedPictureId,
                commentUser: sessionUser.username
            }

            await dispatch(createComment(newComment))
                // .then((createdComment) => history.push(`/picture/${SelectedPictureId}`))
                .catch(async (res) => {
                    const data = await res.json()
                    if (data && errors) setErrors(data.errors)
                })
        }
        return setErrors(['Comment body must be less than 255 characters.'])
        //create form, create button to make comment
    }
    let subBtnBool = () => {
        if (errors.length) {
            return false;
        } return true;
    }
    return (
        <div className="commentCreation">
            <form id='createCommentForm' onSubmit={e => handleSubmit(e)}>
                <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
                <div className="commentCreateContainer">
                    {/* <label>Comment</label> */}
                    <input
                        name="body"
                        type='text'
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        placeholder='Enter your thoughts'
                        required
                    />
                </div>
                <div className="commentButtons">
                    <button className="commentCreateSubBtn" type="submit" >Submit</button>
                    <button className="picCreateCancelBtn" onClick={() => (setCommentCreate(false))}>Cancel</button>
                </div>
            </form >
        </div >
    )
}

export default CommentCreation;
