import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;

        this.setState({ course });
    }

    onClickSave() {
        this.props.dispatch(courseActions.createCourse(this.state.course));
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}

                <h2>Add Course</h2>

                <input
                    onChange={this.onTitleChange}
                    type="text"
                    value={this.state.course.title} />

                <input
                    onClick={this.onClickSave}
                    type="submit"
                    value="Save" />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses
    };
}

export default connect(mapStateToProps)(CoursesPage);
