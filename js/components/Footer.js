var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <div className="Footer">
        <div className="container">
          <ul className="right">
            <li>
            A <a href="http://makersatyale.com">Makers At Yale</a> project by Dennis, John, Will, Lily, Brian, and Felipe
            </li>
          </ul>

          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Add Your Club</a></li>
            <li><a href="">Get In Touch</a></li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = Footer;