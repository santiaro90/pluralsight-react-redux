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
            errors: {}
        };
    }

    render() {
        return (
            <CourseForm
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.errors} />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    const course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    return { course };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps)(ManageCoursePage);
