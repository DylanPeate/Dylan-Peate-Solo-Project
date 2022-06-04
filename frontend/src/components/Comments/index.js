import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getComments } from '../../store/comment'
import './Comments.css'

function ShowComments(picture) {
    const dispatch = useDispatch()
    const pictureId = useParams().pictureId
    const pictures = useSelector(state => state.pictures)
    const selectedPicture = pictures[pictureId]
    let sessionUser = useSelector(state => state.session.user);
    const comments = Object.values(useSelector(state => state.comments))
    // const [comments, setComments] = useState([])

    useEffect(() => {
        const stiliFunc = async () => {
            if (selectedPicture) {
                await dispatch(getComments(selectedPicture))
            }
        }
        stiliFunc()
    }, [dispatch])

    return (
        <div>
            {
                comments.length > 0 && comments.map(comment => {
                    return (
                        <div className='commentBody' key={comment.id}>
                            {comment.body}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowComments;
