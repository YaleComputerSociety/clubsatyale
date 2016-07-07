var React = require('react');
var PropTypes = React.PropTypes;

var Query = React.createClass({
  render: function() {
    return (
      <div className="Query">
        <div className="container">
          <form onSubmit={this.props.onSubmitQuery}>
            <i className="material-icons">search</i>
            <input 
              onChange={this.props.onUpdateSearchQuery}
              type="text" 
              placeholder='Search for theater, greek life, debate...' 
              value = {this.props.query} />
          </form>
        </div>
      </div>
    )
  }
});

Query.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = Query;