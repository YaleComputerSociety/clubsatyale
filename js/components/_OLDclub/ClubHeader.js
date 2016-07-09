
var React = require('react');
var PropTypes = React.PropTypes;

var ClubHeader = React.createClass({
  render: function() {
    return (
      <div className="ClubHeader">
        <div className="row-picture" style={{ backgroundImage: "src("+this.props.club.cover+")" }}></div>
        <header>
          <div className="picture">
            <img src={this.props.club.picture} />
          </div>
          <div className="content">
            <div className="name">{this.props.club.name}</div>
            <div className="bio">{this.props.club.bio}</div>
            <p>
              <span className="tag tag-background" data-category={this.props.club.category}>
                {this.props.club.tag}
              </span>
            </p>
          </div>
        </header>
      </div>    
    )
  }
});

ClubHeader.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ClubHeader;