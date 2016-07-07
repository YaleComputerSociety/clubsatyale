var React = require('react');
var PropTypes = React.PropTypes;

var IndexHeader = React.createClass({
  render: function() {
    return (
      <div className="IndexHeader">
        {/*<header>*/}
          <div className="container">
            <h1>
              Clubs At Yale
            </h1>
            <h2>
              Curated directory of opportunities at Yale University
            </h2>
          </div>
        {/*</header>*/}
      </div>    
    )
  }
});

IndexHeader.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = IndexHeader;