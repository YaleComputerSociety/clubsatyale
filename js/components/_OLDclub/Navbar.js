var React = require('react');
var PropTypes = React.PropTypes;

var Navbar = React.createClass({
  render: function() {
    return (
      <div className="Navbar">
        <div className="container">
          <li className="title">
            <a href="/clubsatyale">Clubs At Yale</a>
          </li>
          <li>
            <form>
              <i className="material-icons">search</i>
              <input type="text" placeholder='Search for theater, greek life, debate...' />
            </form>
          </li>
        </div>
      </div>    
    )
  }
});

Navbar.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = Navbar;