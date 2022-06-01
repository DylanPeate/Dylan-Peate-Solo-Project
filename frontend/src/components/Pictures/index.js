import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPictures } from '../../store/pictures';
import './pictures.css'

function Pictures() {
    const dispatch = useDispatch()
    const sessionUser = useSelector((state) => state.session.user);

    const pictures = Object.values(useSelector(state => state.pictures))

    useEffect(() => {
        dispatch(getPictures())
    }, [dispatch])

    if (sessionUser) {

        return (
            <div>
                {
                    pictures.map((picture) => {
                        return (
                            <img src={picture.imageLink}></img>
                        )
                    })
                }
            </div>
        )
    }
}

export default Pictures;
