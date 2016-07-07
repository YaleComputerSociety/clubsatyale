var React = require('react');
var PropTypes = React.PropTypes;
var ExploreBar = require('../ExploreBar');
var ResultsList = require('./ResultsList');
var Query = require('./Query');

var Results = React.createClass({
  render: function() {
    return (
      <div className="Results">
        <Query 
          onUpdateSearchQuery={this.props.onUpdateSearchQuery} 
          onSubmitQuery={this.props.onSubmitQuery} 
          query={this.props.query}/>
        <div className='container'>
          <ExploreBar 
            onUpdateExploreQuery={this.props.onUpdateExploreQuery} 
            query={this.props.query}/>
          <ResultsList results={this.props.results}/>
        </div>
      </div>
    )
  }
});

Results.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = Results;