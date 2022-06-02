import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getPictures } from '../../store/pictures';
import './PictureMenu.css'

function PictureMenu() {
    const dispatch = useDispatch()
    const pictureId = useParams().pictureId
    const pictures = Object.values(useSelector(state => state.pictures))
    const selectedPicture = pictures[pictureId - 1]

    const history = useHistory();
    let sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    function editPic(picture) {
        history.push(`/picture/${selectedPicture.id}/edit/`)
    }
    function delPic(picture) {

    }

    return (
        <div className='menuImageContainer'>
            <img id='pictureMenuImage' src={selectedPicture?.imageLink}></img>
            {sessionUser.id === selectedPicture?.userId && <button onClick={() => editPic(selectedPicture)} className='editPictureBtn'>Edit Picture</button>}
            {sessionUser.id === selectedPicture?.userId && <button onClick={() => delPic(selectedPicture)} className='delPictureBtn'>Delete Picture</button>}
            <div className='pictureDetails'>
                <h2 id='pictureTitle'>{selectedPicture?.title}</h2>
                <h2 id='pictureDescription'>{selectedPicture?.description}</h2>
            </div>
        </div>
    )


}

export default PictureMenu;
