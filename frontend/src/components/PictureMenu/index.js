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
            <img id='pictureMenuImage' src={selectedPicture?.imageLink}></img>
            {sessionUser.id === selectedPicture?.userId && <button onClick={() => editPic(selectedPicture)} className='editPictureBtn'>Edit Picture</button>}
            {sessionUser.id === selectedPicture?.userId && <button className='deletePicBtn' onClick={() => delPic(selectedPicture)}>Delete Picture</button>}
            <div className='pictureDetails'>
                <h2 id='pictureTitle'>{selectedPicture?.title}</h2>
                <h2 id='pictureDescription'>{selectedPicture?.description}</h2>
            </div>
            <div className='createCommentBtnContainer'>
                <button id='createCommentBtn' onClick={() => setCommentCreate(!commentCreate)}>Create Comment</button>
                {
                    commentCreate && <CommentCreation picture={selectedPicture} setCommentCreate={setCommentCreate} />
                }
            </div>
            <div id='showCommentsContainer'>
                <ShowComments />
            </div>
        </div>
    )


}

export default PictureMenu;
