var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        return (
            <div className="controls text-center">
                {this.props.countdownStatus === 'started' ?
                    <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
                    :
                    <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
                }
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        )
    }
});

module.exports = Controls;