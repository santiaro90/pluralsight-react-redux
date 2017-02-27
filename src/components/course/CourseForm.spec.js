import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { mount, shallow } from 'enzyme';

import CourseForm from './CourseForm';

function testUtilsSetup(saving) {
    const props = {
        course: {},
        errors: {},
        onSave: () => {},
        onChange: () => {},
        saving
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props} />);

    const output = renderer.getRenderOutput();

    return {
        output,
        props,
        renderer
    };
}

function enzymeSetup(saving) {
    const props = {
        course: {},
        errors: {},
        onSave: () => {},
        onChange: () => {},
        saving
    };

    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via React Test Utils', () => {

    it('renders form and h1', () => {
        const { output } = testUtilsSetup(false);
        const [ h1 ] = output.props.children;

        expect(output.type).toBe('form');
        expect(h1.type).toBe('h1');
    });

    it('save button is labeled "Save" when not saving', () => {
        const { output } = testUtilsSetup(false);
        const submitButton = output.props.children[5];

        expect(submitButton.props.value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const { output } = testUtilsSetup(true);
        const submitButton = output.props.children[5];

        expect(submitButton.props.value).toBe('Saving...');
    });

});

describe('CourseForm via Enzyme', () => {

    it('renders form and h1', () => {
        const output = enzymeSetup(false);

        expect(output.find('form').length).toBe(1);
        expect(output.find('h1').text()).toEqual('Manage Course');
    });

    it('save button is labeled "Save" when not saving', () => {
        const output = enzymeSetup(false);
        const submitButton = output.find('input');

        expect(submitButton.props().value).toBe('Save');
    });

    it('save button is labeled "Saving..." when saving', () => {
        const output = enzymeSetup(true);
        const submitButton = output.find('input');

        expect(submitButton.props().value).toBe('Saving...');
    });

});
