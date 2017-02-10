import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

import CourseList from './CourseList';

class CoursesPage extends React.Component {
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Add Course"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);
