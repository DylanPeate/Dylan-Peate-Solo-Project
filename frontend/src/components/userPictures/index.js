import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from '../../store/pictures';
import { useHistory } from 'react-router-dom';
import './UserPictures.css'

function UserPictures() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user);

    const pictures = Object.values(useSelector(state => state.pictures))
    console.log(pictures, 'pics')
    const reversePics = [...pictures].filter(picture => {
        return picture.userId === sessionUser.id
    }).reverse()
    console.log(reversePics, 'reverse')

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    if (sessionUser) {
        return (
            <div className='photogrid' id='userPhotoGrid'>
                {
                    reversePics && reversePics.map((picture) => {
                        return (
                            <div className='picture-container' key={picture.id}>
                                <img src={picture?.imageLink} onClick={() => history.push(`/picture/${picture.id}`)} className='picture'></img>
                                <figcaption className='pictureCaption'>{picture?.title}</figcaption>
                            </div>
                        )
                    })

                }
                {
                    reversePics.length < 1 &&
                    <div className='userNoPicsContainer'>
                        <div className='userNoPics'>
                            <h1 className='sorryMessage'>Sorry but you have no pictures.</h1>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default UserPictures
