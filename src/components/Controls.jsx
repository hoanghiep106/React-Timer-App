var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div className="controls">
                (this.props.countdownStatus === 'started' ?
                    <button className="button secondary">Pause</button>
                    :
                    <button className="button primary">Start</button>
                )
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
});

module.exports = Controls;