import clickToRegister from '../../utilities/clickToRegister';
import convertDate from '../../utilities/convertDate';
import { Link } from 'react-router-dom'; // Change import to use 'Router'

const AcademyClass = (classData) => {
    
      const registrationButton = (url) =>{
        <button onClick={() => clickToRegister(url)}>Register</button>
    console.log(classData);
    }
    
    return(
            <article className="class-container" key={classData.class_id}>
            <div className="class-title"><h3><Link to={`/classes/${classData.class_id}`}>{classData.class_name}</Link></h3></div>
            <div className="class-sidebar">
            <img className="avatar" src={`${import.meta.env.VITE_REACT_APP_BASE_URL}images/headshots/${classData.person_photo}`} alt={classData.full_name} />
            <p>{classData.person_name}</p>
            </div>
            <div className="class-details">
            <p>{classData.full_name}</p>
            <table>
                <tbody>
                <tr>
                    <td className="left-column">Instructor:</td>
                    <td>{classData.person_name}</td>
                </tr>
                <tr>
                    <td className="left-column">Dates:</td>
                    <td>{convertDate(classData.start_date)} - {convertDate(classData.end_date)}</td>
                </tr>
                <tr>
                    <td className="left-column">Location:</td>
                    <td>{classData.location_name}</td>
                </tr>
                <tr>
                    <td className="left-column">Cost:</td>
                    <td>{classData.class_cost} {classData.class_registration === 0 ? " -- registration is required" : null}</td>
                </tr>
                <tr>
                    <td className="left-column">Open to:</td>
                    <td>{classData.audience_description}</td>
                </tr>
                </tbody>
            </table>
            {/* {console.log(classData.current_term)} */}
            {classData.current_term === 1 && (
                <button onClick={() => clickToRegister(classData.class_enrollment_link)}>Register</button>
            )}
            <p>{classData.class_description}</p>
            </div>
        </article>
    )
};

export default AcademyClass;