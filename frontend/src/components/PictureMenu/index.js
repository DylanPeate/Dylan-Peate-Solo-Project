import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import './PictureMenu.css'

function PictureMenu() {
    const pictureId = useParams().pictureId
    const pictures = Object.values(useSelector(state => state.pictures))
    const selectedPicture = pictures[pictureId]
    console.log(pictures)

    const dispatch = useDispatch();
    const history = useHistory();
    let sessionUser = useSelector(state => state.session.user);

    return (

        <div>
            <img id='pictureMenuImage' src={selectedPicture.imageLink}></img>
        </div>
    )


}

export default PictureMenu;
