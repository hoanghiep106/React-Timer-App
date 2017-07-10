var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        }
    },
    componentDidUpdate: function(prevProps, prevState) {
        if(this.state.countdownStatus !== prevState.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started': 
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            if(newCount >= 0) {
                this.setState({
                    count: newCount
                });
            } else {
                this.setState({
                    count: 0,
                    countdownStatus: 'stopped'
                });
            }
        }, 1000);
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function() {
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                {this.state.countdownStatus === 'stopped' ?
                    <CountdownForm onSetCountdown={this.handleSetCountdown}/>
                    :
                    <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this.handleStatusChange}/>
                }

            </div>
        )
    }
});

module.exports = Countdown;