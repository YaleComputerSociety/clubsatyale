var React = require('react');
var PropTypes = React.PropTypes;
var ClubStats = require('./ClubStats');

var About = React.createClass({
  render: function() {
    return (
      <div className="About">
        <p>
          We are an international hackathon hosted by and held at Yale, bringing 1500 like-minded hackers and creatives from all over the world.
        </p>
        <p>
          YHack is a festival of innovation, an arena of tech warriors, and astage to present your big idea. Jam packed into 36 hours is a rainbow ofevents (talks, food, rap battles) that go on through the night while caffeinated teams hack on a Python app or program arduino-driven pumpkinsto battle over Twitch.
        </p>
        <p>
          Hack at YHack because you can get more done in a weekend of hacking than weeks of working at an office.
        </p>
      </div>
    )
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className="Content">
        <div className="row">
          <div className="col-md-5">
            <ClubStats />
          </div>
      
          <div className="col-md-7">
            <About />
          </div>
        </div>
      </div>    
    )
  }
});

Content.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = Content;