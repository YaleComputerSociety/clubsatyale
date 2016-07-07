var React = require('react');
var PropTypes = React.PropTypes;

var ClubStats = React.createClass({
  render: function() {
    return (
      <div className="ClubStats">
        <li>
          <i className="material-icons">group</i>
          <label>Size</label>
          <div className="answer">
            30-40 members
          </div>
        </li>
        <li>
          <i className="material-icons">beach_access</i>
          <label>Commitment</label>
          <div className="answer">
            20 hs/month
          </div>
        </li>
        <li>
          <i className="material-icons">fitness_center</i>
          <label>Tryouts required</label>
          <div className="answer">
            <i className="material-icons">done</i>YES
          </div>
        </li>
        <li className="strip"></li>
        <li>
          <i className="material-icons">launch</i>
          <label>Website</label>
          <div className="answer">
            <a href="#">yhack.org</a>
          </div>
        </li>
        <li>
          <i className="material-icons">share</i>
          <label>Social</label>
          <div className="answer">
            <a href="#">facebook/yhack</a>
          </div>
        </li>
        <li>
          <i className="material-icons">cake</i>
          <label>Created in</label>
          <div className="answer">
            2008
          </div>
        </li>
      </div>
    )
  }
});

ClubStats.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ClubStats;