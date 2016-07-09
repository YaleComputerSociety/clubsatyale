var React = require('react');
var PropTypes = React.PropTypes;
var RenderIf = require('render-if');

var ResultsList = React.createClass({
  render: function() {
    var results;
    if(this.props.results.length === 0){
      results = (
        <div className="no-results">
          <h2>Sorry. No results were found (._.) ( l: ) ( .-. ) ( :l ) (._.)</h2>
        </div>
      )
    } else {
      results = this.props.results.map(function (club){
        var tag;
        if(Array.isArray(club.category)) {
          tag = club.category.map(function (cat) {
            var index = club.category.indexOf(cat);
            return (
              <div className="tag" data-category-bg={cat}>{club.tag[index]}</div>
            )
          });
        } else {
          tag = (
            <div className="tag" data-category-bg={club.category}>{club.tag}</div>
          )
        }
        
        var gotoClubk = () => {
          window.location = club.slug;
        }
        
        return (
          <div className="Club" onClick={gotoClubk}>
            <ul>
              <li className="picture">
                <img src={club.picture} />
              </li>
              <li>
                <div className="name">
                  { club.name }
                  {RenderIf(club.new === true)(
                    <div className="tag tag-new">new</div>
                  )}
                  {tag}
                </div>
                <div className="blurb">{club.bio}</div>
              </li>
              
              {/*<li className="stats">
              </li>*/}
              <ul className="right">
                <li className="size">
                  <span>+{club.size}</span> <i className="material-icons orange600">face</i>
                </li>
                <li>
                  {/*<ul className="tags">
                    {% for tag in result.tags %}
                    <li><a href="#">{{ tag }}</a></li>
                    {% endfor %}
                  </ul>*/}
                </li>
              </ul>
            </ul>
          </div>
        )
      });      
    }

    return (
      <div className="ResultsList">
          {results}
      </div>
    )
  }
});

ResultsList.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ResultsList;