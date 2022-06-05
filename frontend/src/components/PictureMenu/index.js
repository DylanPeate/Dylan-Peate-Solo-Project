import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getPictures, deletePictureThunk } from '../../store/pictures';
import CommentCreation from '../CommentCreation';
import ShowComments from '../Comments'
import './PictureMenu.css'

function PictureMenu() {
    const dispatch = useDispatch()
    const pictureId = useParams().pictureId
    const pictures = useSelector(state => state.pictures)
    const selectedPicture = pictures[pictureId]

    const [commentCreate, setCommentCreate] = useState(false)

    const history = useHistory();
    let sessionUser = useSelector(state => state.session.user);
    if (!sessionUser) {
        sessionUser = { id: 1 }
        history.push('/')
    }

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    useEffect(() => {
        console.log('STATE CHANGED')
    }, [commentCreate])

    function editPic(picture) {
        history.push(`/picture/${selectedPicture.id}/edit/`)
    }
    function delPic(picture) {
        dispatch(deletePictureThunk(picture))
            .then(() => history.push('/'))
    }

    return (
        <div className='menuImageContainer'>
            <div className='userBtns'>
                {sessionUser.id === selectedPicture?.userId && <button onClick={() => editPic(selectedPicture)} className='editPictureBtn BTN'>Edit Picture</button>}
                {sessionUser.id === selectedPicture?.userId && <button className='deletePicBtn BTN' onClick={() => delPic(selectedPicture)}>Delete Picture</button>}
            </div>
            <div className='pictureContainer'>
                <img id='pictureMenuImage' src={selectedPicture?.imageLink}></img>
            </div>
            <div className='pictureDetails'>
                <p id='pictureTitle'>{selectedPicture?.title}</p>
                <p id='pictureDescription'>{selectedPicture?.description}</p>
            </div>
            <div className='createCommentBtnContainer'>
                <button className='createCommentBtn BTN' onClick={() => setCommentCreate(!commentCreate)}>Create Comment</button>
                {
                    commentCreate && <CommentCreation picture={selectedPicture} setCommentCreate={setCommentCreate} />
                }
            </div>
            <div id='showCommentsContainer'>
                <ShowComments />
            </div>
        </div >
    )


}

export default PictureMenu;
