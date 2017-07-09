var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => (
    <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
                <li className="menu-text">Nav component</li>
                <li>
                    <IndexLink to="/" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
                </li>
                <li>
                    <Link to="/countdown" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
                </li>
            </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
                <li className="menu-text">
                    Created by <a href="https://github.com/hoanghiep106">Hoang Hiep</a>
                </li>
            </ul>
        </div>
    </div>
)

module.exports = Nav; 