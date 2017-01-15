import React, { PropTypes } from 'react';

import CourseRow from './CourseRow';

const courseRow = course => <CourseRow key={course.id} course={course} />;

const CourseList = ({ courses }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                { courses.map(courseRow) }
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;
