import React, { PropTypes } from 'react';

import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                label="Title"
                onChange={onChange}
                name="title"
                value={course.title}
                error={errors.title} />

            <SelectInput
                label="Author"
                onChange={onChange}
                name="authorId"
                value={course.authorId}
                options={allAuthors}
                defaultOption="Select Author"
                error={errors.authorId} />

            <TextInput
                label="Category"
                onChange={onChange}
                name="category"
                value={course.category}
                error={errors.category} />

            <TextInput
                label="Length"
                onChange={onChange}
                name="length"
                value={course.length}
                error={errors.length} />

            <input
                disabled={loading}
                type="submit"
                className="btn btn-primary"
                value={loading ? 'Saving...' : 'Save'}
                onClick={onSave} />
        </form>
    );
};

CourseForm.propTypes = {
    allAuthors: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
    errors: PropTypes.object,
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default CourseForm;
