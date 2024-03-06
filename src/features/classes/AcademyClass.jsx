import clickToRegister from '../../utilities/clickToRegister';

const AcademyClass = (classData) => {

    const convertDate = (dateString) => {
        const dateOnly = dateString.split('T')[0];
        const dateParts = dateOnly.split('-');
        const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
        // Get day, month, and year from the Date object
        const day = date.getDate();
        const month = date.getMonth() + 1; // Month is zero-based, so we add 1
        const year = date.getFullYear() % 100; // Get last two digits of the year
    
        // Pad day and month with leading zeros if necessary
        const formattedMonth = String(day).padStart(2, '0');
        const formattedDay = String(month).padStart(2, '0');
    
        // Return formatted date in dd/mm/yy format
        return `${formattedDay}/${formattedMonth}/${year}`;
      };
    
      const registrationButton = (url) =>{
        <button onClick={() => clickToRegister(url)}>Register</button>
    }

    return(
            <article className="class-container" key={classData.class_id}>
            <div className="class-title"><h3>{classData.class_name}</h3></div>
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