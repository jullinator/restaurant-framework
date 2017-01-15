import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Test from './index';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {

    it('to have three `.icon-test`s', () => {
        const wrapper = shallow(<Test />);
        expect(wrapper.find('.icon-test')).to.have.length(3);
    });

    it('simulates click events', () => {
        const buttonClick = sinon.spy();
        const wrapper = shallow(
          <Test handleClick={buttonClick} />
        );
        wrapper.find('button').simulate('click');
        expect(buttonClick.calledOnce).to.equal(true);
    });

});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {

    it('allows us to set props', () => {
        const wrapper = mount(<Test bar='baz' />);
        expect(wrapper.props().bar).to.equal('baz');
        wrapper.setProps({ bar: 'foo' });
        expect(wrapper.props().bar).to.equal('foo');
    });

    it('calls componentDidMount', () => {
        sinon.spy(Test.prototype, 'componentDidMount');
        const wrapper = mount(<Test />);
        expect(Test.prototype.componentDidMount.calledOnce).to.be.true;
        Test.prototype.componentDidMount.restore();
    });

});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {

    it('renders three `.icon-test`s', () => {
        const wrapper = render(<Test />);
        expect(wrapper.find('.icon-test').length).to.equal(3);
    });

});
