import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createPicture } from '../../store/pictures'
import './PictureCreation.css'

function PictureCreation() {
    const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!sessionUser) {
            history.push('/signup')
        }
    }, [sessionUser, history])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPicture = {
            userId: sessionUser.id,
            imageLink,
            title,
            description,
        }

        await dispatch(createPicture(newPicture))
            .then((newPic) => history.push(`/picture/${newPic.id}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    return (
        <div className="picFormContain">
            <form id='createPictureForm' onSubmit={e => handleSubmit(e)}>
                <ul className="picFormErrors">
                    {errors.map((error, i) => <li className="errorsLiMap" key={i}>{error}</li>)}
                </ul>
                <label>Picture URL:</label>
                <input
                    name="imageLink"
                    type='text'
                    value={imageLink}
                    onChange={e => setImageLink(e.target.value)}
                    placeholder='Link to your image'
                />
                <label>Title:</label>
                <input
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Title"
                />
                <label>Description (optional):</label>
                <input
                    name="description"
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder='Description of your photo'
                />
                <div className="picFormBtnContain">
                    <button id="picCreateFormBtn" type="submit">Submit</button>
                    <button id="picCreateCancelBtn" onClick={() => (history.push('/'))}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default PictureCreation;
