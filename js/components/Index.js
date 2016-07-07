var React = require('react');

var IndexHeader = require('./index/IndexHeader');
var ResultsContainer = require('./index/ResultsContainer');
var Footer = require('./Footer');

var Index = React.createClass({
  render: function() {
    var hasQuery = this.props.route.hasQuery;
    return (
      <div className="IndexPage">
        <IndexHeader />
        <ResultsContainer initialQuery={hasQuery ? this.props.params.id : ""}/>
        <Footer />
      </div>
    )
  }
});

module.exports = Index;