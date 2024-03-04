import { useParams } from 'react-router-dom';
// import GetAllClasses from './utilities/get_classes.jsx'

const Classes = () => {
    const { classId } = useParams();

    return (
        <h1>Class ID: {classId}</h1>
    )
}

export default Classes