import React, { useEffect, useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await fetch('http://localhost:5000/api/students');
            const data = await response.json();
            setStudents(data);
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {students.map(student => (
                    <li key={student._id}>
                        {student.name} - {student.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
