import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getPictures, editPicture, deletePictureThunk } from '../../store/pictures';
import './PictureEditForm.css'

function PictureEditForm() {
    const pictureId = useParams().pictureId
    const pictures = useSelector(state => state.pictures)
    const selectedPicture = pictures[pictureId]
    const history = useHistory();
    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user);

    //state
    const [title, setTitle] = useState(selectedPicture.title || '')
    const [description, setDescription] = useState(selectedPicture.description || '')
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!sessionUser || sessionUser.id !== selectedPicture.userId) {
            history.push('/')
        }
    }, [])

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const editPic = {
            id: selectedPicture?.id,
            userId: sessionUser?.id,
            albumId: selectedPicture?.albumId,
            imageLink: selectedPicture?.imageLink,
            title,
            description,
            private: selectedPicture?.private,
            longitude: selectedPicture?.longitude,
            latitude: selectedPicture?.latitude
        }
        dispatch(editPicture(editPic))
            .then(() => history.push(`/picture/${selectedPicture.id}`))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    function delPic(picture) {
        dispatch(deletePictureThunk(picture))
            .then(() => history.push('/'))
    }

    return (
        <>
            <img id='editFormPic' src={selectedPicture?.imageLink}></img>
            <form id='pictureEditForm' onSubmit={e => handleSubmit(e)}>
                {errors && <ul>
                    {errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>}
                <label>Title:</label>
                <input
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder={selectedPicture.title}
                />
                <label>Description:</label>
                <input
                    name='description'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder={selectedPicture.description}
                />
                <div className='editPageBtn'>
                    <button id='editSubmitBtn' type='submit'>Submit</button>
                    <button className='deletePicBtn' onClick={() => delPic(selectedPicture)}>Delete Picture</button>
                </div>
            </form>
        </>
    )
}

export default PictureEditForm
