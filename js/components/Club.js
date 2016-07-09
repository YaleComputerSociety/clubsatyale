
var React = require('react');
var $ = require('jquery');
var Footer = require('./Footer');
var ExploreBar = require('./ExploreBar');

(function (jQuery) {
  jQuery.eventEmitter = {
    _JQInit: function() {
      this._JQ = jQuery(this);
    },
    emit: function(evt, data) {
      !this._JQ && this._JQInit();
      this._JQ.trigger(evt, data);
    },
    once: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.one(evt, handler);
    },
    on: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.bind(evt, handler);
    },
    off: function(evt, handler) {
      !this._JQ && this._JQInit();
      this._JQ.unbind(evt, handler);
    }
  };
}($));


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


class Content extends React.Component {
  render() {
    var club = this.props.club;
    
    return (
      <div className="Content">
        <div className="row">
          <div className="col-md-5">
            <div className="ClubStats">
              <li>
                <i className="material-icons">group</i>
                <label>Size</label>
                <div className="answer">
                  +{club.size} members
                </div>
              </li>
              <li>
                <i className="material-icons">beach_access</i>
                <label>Commitment</label>
                <div className="answer">
                  {club.commit} hs/month
                </div>
              </li>
              <li>
                <i className="material-icons">fitness_center</i>
                <label>Tryouts required</label>
                <div className="answer">
                  {
                  club.tryReq?
                  (<span><i className="material-icons">done</i><span>YES</span></span>):
                  (<span><i className="material-icons">close</i><span>NOPE</span></span>)
                  }
                </div>
              </li>
              <li className="strip"></li>
              { club.website &&
              <li>
                <i className="material-icons">launch</i>
                <label>Website</label>
                <div className="answer">
                  <a href={ club.website }>{ club.website }</a>
                </div>
              </li> }
              { club.facebook &&
              <li>
                <i className="material-icons">share</i>
                <label>Social</label>
                <div className="answer">
                  <a href={"http://facebook.com/"+club.facebook }>facebook.com/{ club.facebook }</a>
                </div>
              </li> }
              { club.birth &&
              <li>
                <i className="material-icons">cake</i>
                <label>Created in</label>
                <div className="answer">
                  { club.birth }
                </div>
              </li> }
            </div>
          </div>
      
          <div className="col-md-7">
            <div className="About">
              <p dangerouslySetInnerHTML={{ __html: club.description }} />
            </div>
          </div>
        </div>
      </div>    
    )
  }
}


class ClubHeader extends React.Component {
  render() {
    var club = this.props.club;

    return (
      <div className="ClubHeader">
        <div className="row-picture" style={{ backgroundImage: "url("+this.props.club.cover+")" }}></div>
        <header>
          <div className="picture">
            <img src={club.picture} />
          </div>
          <div className="content">
            <div className="name">{club.name} {club.abbr?"("+club.abbr+")":club.abbr}</div>
            <div className="bio">{club.blurb}</div>
            <p>
              <span className="tag tag-background" data-category={club.category}>
                {club.tag}
              </span>
            </p>
          </div>
        </header>
      </div>    
    )
  }
}

var ClubInfo = React.createClass({
  render: function() {
    return (
      <div className="ClubInfo">
        <div className="container">
          <ClubHeader {...this.props} />
          <Content {...this.props} />
        </div>
      </div>    
    )
  }
});


var Navbar = React.createClass({
  render: function() {
    return (
      <div className="Navbar">
        <div className="container">
          <li className="title">
            <a href="/clubsatyale">Clubs At Yale</a>
          </li>
          <li>
            <form>
              <i className="material-icons">search</i>
              <input type="text" placeholder='Search for theater, greek life, debate...' />
            </form>
          </li>
        </div>
      </div>    
    )
  }
});

class ClubPage extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { club: null, is404: false }
  }

  componentDidMount() {
    var slug = this.props.params.id;
    if (clubData[slug]) {
      this.setState({ club: clubData[slug] })
    } else {
      this.setState({ is404: true })
    }
  }

  render() {
    if (this.state.club) {
      return (
        <div className="ClubPage">
          <Navbar club={this.state.club} />
          <ClubInfo club={this.state.club} />
          <div className="container">
            <ExploreBar />
          </div>
          <Footer club={this.state.club} />
        </div>
      )
    } else if (this.state.is404) {
      return (
        <div className="ClubPage">
          <Navbar />
          Club could not be found.
          <ExploreBar />
          <Footer />
        </div>
      )
    } else {
      return (
        <div className="ClubPage">
          <Navbar />
          Wait for it.
          <Footer />
        </div>
      )
    }
  }
}

module.exports = ClubPage;