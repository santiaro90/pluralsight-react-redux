import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as courseActions from '../../actions/courseActions';

import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.saveCourse = this.saveCourse.bind(this);
        this.updateCourseState = this.updateCourseState.bind(this);
    }

    componentWillReceiveProps(props) {
        if (this.props.course.id !== props.course.id) {
            this.setState({
                course: Object.assign({}, props.course)
            });
        }
    }

    saveCourse(event) {
        event.preventDefault();

        this.setState({ saving: true });

        this.props.actions
            .saveCourse(this.state.course)
            .then(() => this.redirect());
    }

    updateCourseState(event) {
        const field = event.target.name;
        const course = Object.assign({}, this.state.course, {
            [field]: event.target.value
        });

        return this.setState({ course });
    }

    redirect() {
        this.setState({ saving: false });
        this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving}
                onChange={this.updateCourseState}
                onSave={this.saveCourse} />
        );
    }
}

ManageCoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if (course.length) {
        return course[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const authors = state.authors.map(author => {
        return { value: author.id, text: `${author.firstName} ${author.lastName}` };
    });
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };
    const courseId = ownProps.params.id;

    if (courseId && state.courses.length) {
        course = getCourseById(state.courses, courseId);
    }


    return { course, authors };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
