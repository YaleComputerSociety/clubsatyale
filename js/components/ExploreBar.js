var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var ExploreBar = React.createClass({
  render: function() {
    return (
      <div className="ExploreBar">
        
        <label>Explore:</label>
        <ul className="categories">
        
          <Link to={"/test/" + "politics"} params={{id: "123"}}>  
            <li><a data-category-bg="politics" href="">politics</a></li>
          </Link>  
          <Link to={"/test/" + "greek"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="greek" href="">greek</a></li>
          </Link>
          <Link to={"/test/" + "arts"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="arts" href="">arts</a></li>
          </Link>
          <Link to={"/test/" + "STEM"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="STEM" href="">STEM</a></li>
          </Link>
          <Link to={"/test/" + "business"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="business" href="">business</a></li>
          </Link>
          <Link to={"/test/" + "activism"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="activism" href="">activism</a></li>
          </Link>
          <Link to={"/test/" + "outreach"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="outreach" href="">outreach</a></li>
          </Link>
          <Link to={"/test/" + "athletics"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="athletics" href="">athletics</a></li>
          </Link>
          <Link to={"/test/" + "others"} params={{id: "123"}}>  
            <li onClick={this.props.onUpdateExploreQuery}><a data-category-bg="others" href="">others</a></li>
          </Link>
        </ul>
      </div>
    )
  }
});

module.exports = ExploreBar;