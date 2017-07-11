var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('shoud exist', () => {
        expect(Timer).toExist();
    });

    describe('handleCount', () => {
        it('should set State to started and count', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                expect(timer.state.countStatus).toBe('started');
                done();
            }, 1001);
        });

        it('should pause count on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 10});
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('paused');
                expect(timer.state.count).toBe(11);
                done();
            }, 1001);
        });

        it('should reset count on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 10})
            timer.handleStatusChange('started');

            setTimeout(() => {
                timer.handleStatusChange('stopped')
                expect(timer.state.count).toBe(0);
                done();
            }, 1001);
        });
    });
});