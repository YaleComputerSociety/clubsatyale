var React = require('react');
var PropTypes = React.PropTypes;
var ClubHeader = require('./ClubHeader');
var Content = require('./Content');
var ExploreBar = require('../ExploreBar');

var clubs = [
  {
    "picture": "/static/img/yale_data_science.png",
    "name": " Yale Data Science",
    "bio": "A group of Yale undergraduates interested in data science and machine learning",
    "size": "25",
    "tag": "Research Group",
    "category": "STEM",
    "time": 5,
  }, {
    "picture": "/static/img/whaling_crew.png",
    "name": " Whaling Crew",
    "bio": "A unified, organized student group dedicated to yelling too loud and heckling too obnoxiously at Bulldog athletic events",
    "category": "athletics",
    "tag": "athletics",
    "size": 25,
    "time": 4,
  }, {
    "picture": "/static/img/federalist_party.png",
    "name": "Federalist Party",
    "bio": "A conservative debating society/member of the Yale Political Union - we believe in the values espoused in the Federalist Papers",
    "category": "politics",
    "tag": "political party",
    "size": 50,
    "time": 7,
  }, {
    "picture": "/static/img/just_add_water.png",
    "name": "Just Add Water",
    "bio": "Yale's funniest improvisational comedy troupe - we do long-form, short-form, AND musical improv",
    "category": "arts",
    "tag": "Improv Group",
    "size": 25,
    "time": 6,
  }, {
    "picture": "/static/img/aast.jpg",
    "name": "Asian American Studies Task Force",
    "bio": "Fighting for the expansion of Asian American studies at Yale",
    "size": 15,
    "tag": "Activism",
    "category": "activism",
    "time": 5,
  }, {
    "picture": "/static/img/ygm.png",
    "name": "Yale Guild of Makers",
    "bio": "Uniting makers across Yale",
    "category": "STEM",
    "tag": "STEM club",
    "new": true,
    "size": 25,
    "time": 5,
  }, {
    "picture": "https://ecd-f03lipe.c9users.io/static/img/yhack.png",
    "name": "YHack",
    "cover": "http://yaleentrepreneurship.com/wp-content/uploads/2013/12/tumblr_mw5mb2zlWY1r0cgg3o2_1280.jpg",
    "bio": "Creating an extracurricular directory for students",
    "category": "STEM",
    "tag": "STEM club",
    "new": true,
    "size": 25,
    "time": 5,
    "website": "yhack.org",
  }
];

var club = clubs[Math.floor(Math.random()*clubs.length)];

var ClubInfo = React.createClass({
  render: function() {
    return (
      <div className="ClubInfo">
        <div className="container">
          <ClubHeader club={club}/>
          <Content club={club}/>
          <ExploreBar />
        </div>
      </div>    
    )
  }
});

ClubInfo.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ClubInfo;