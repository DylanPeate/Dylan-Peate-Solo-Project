import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getPictures, editPicture } from '../../store/pictures';
import './PictureEditForm.css'

function PictureEditForm() {
    console.log("HIT EDIT FORM")
    const pictureId = useParams().pictureId
    const pictures = Object.values(useSelector(state => state.pictures))
    const selectedPicture = pictures[pictureId - 1]
    const history = useHistory();
    const dispatch = useDispatch();
    let sessionUser = useSelector(state => state.session.user);

    //state
    const [title, setTitle] = useSelector(selectedPicture.title || '')
    const [description, setDescription] = useSelector(selectedPicture.description || '')
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

        const selectedPicture = {
            id: selectedPicture.id,
            userId: sessionUser.id,
            albumId: selectedPicture.albumId,
            imageLink: selectedPicture.imageLink,
            title,
            description,
            private: selectedPicture.private,
            longitude: selectedPicture.longitude,
            latitude: selectedPicture.latitude
        }
        dispatch(editPicture(selectedPicture))
            .then(() => history.push('/'))
            .catch(async (res) => {
                const data = await res.json()
                if (data && errors) setErrors(data.errors)
            })
    }

    return (
        <>
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
            </form>
        </>
    )
}

export default PictureEditForm
