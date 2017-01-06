import React, { PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) => {
    let list = courses.map(course =>
                <CourseListRow key={course.id} course={course} />
            );
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
                {list}
            </tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;