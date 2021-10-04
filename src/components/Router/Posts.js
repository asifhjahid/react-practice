import {useParams} from 'react-router-dom'

export default function Posts() {
    const {category,topic} = useParams();
    return (
        <div>
            <h1>This is a Post Page -{category} / {topic}</h1>
        </div>
    )
}
