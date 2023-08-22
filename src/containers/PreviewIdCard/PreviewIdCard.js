import './PreviewIdCard.css';
import { useParams } from 'react-router-dom';

const PreviewIdCard = ({data, ...props}) => {
    let { id } = useParams();
    return (
        <div>Chosen product is: ${id}</div>
    )
}

export default PreviewIdCard;