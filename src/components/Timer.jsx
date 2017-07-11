var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countStatus: 'stopped'
        }
    },
    componentWillUnmount: function() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.countStatus !== prevState.countStatus) {
            switch(this.state.countStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({
                        count: 0
                    });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount
            });;
        }, 1000);
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            countStatus: newStatus
        })
    },
    render: function() {
        return (
            <div>
                <h1 className="page-title">Timer Page</h1>  
                <Clock totalSeconds={this.state.count}/>
                <Controls countdownStatus={this.state.countStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
});

module.exports = Timer;