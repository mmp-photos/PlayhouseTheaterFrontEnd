import React, { useEffect, useState } from 'react';

export const displayInstructorClasses = (instructorClasses) => {
    return instructorClasses.map(classItem => {
        // console.log(classItem.class_name)
        return(
            <li key={classItem.class_id}>
                <a href={`/classes/${classItem.class_id}`}>{classItem.class_name}</a>
            </li>
        )
    })
};
