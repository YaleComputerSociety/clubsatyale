var React = require('react');
var PropTypes = React.PropTypes;
var RenderIf = require('render-if');

var ClubList = React.createClass({
  render: function() {

    var results = clubs.map((club) => {
      return (
        <div className="Club">
          <ul>
            <li className="picture">
              <img src={club.icon} />
            </li>
            <li>
              <div className="name">
                { club.name }
                {RenderIf(club.new === true)(
                  <div className="tag tag-new">new</div>
                )}
                <div className="tag" data-category-bg={club.category}>{club.tag}</div>
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
    
    return (
      <div className="ClubList">
        {results}
      </div>
    )
  }
});

ClubList.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ClubList;