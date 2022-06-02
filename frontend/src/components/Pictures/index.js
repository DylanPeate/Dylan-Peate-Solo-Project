import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from '../../store/pictures';
import { useHistory } from 'react-router-dom';
import './pictures.css'

function Pictures() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector((state) => state.session.user);

    const pictures = Object.values(useSelector(state => state.pictures))

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    if (sessionUser) {
        return (
            <div className='photogrid'>
                {
                    pictures.map((picture) => {
                        return (
                            <div className='picture-container' key={picture.id}>
                                <img src={picture?.imageLink} onClick={() => history.push(`/picture/${picture.id}`)} className='picture'></img>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Pictures;
