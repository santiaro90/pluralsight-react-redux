import React from 'react';

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
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
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

export default CoursesPage;
