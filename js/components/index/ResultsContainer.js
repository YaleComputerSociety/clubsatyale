var React = require('react');
var $ = require('jquery');
var Results = require('./Results');
var PropTypes = React.PropTypes;

var fake = [
  {
    "icon": "/static/img/yale_data_science.png",
    "name": " Yale Data Science",
    "bio": "A group of Yale undergraduates interested in data science and machine learning",
    "size": "25",
    "category": "STEM",
    "tag": "Research Group",
    "time": 5,
  },
  {
    "icon": "/static/img/whaling_crew.png",
    "name": "Yale Science Magazine",
    "bio": "Magazine about STEM issues",
    "category": ["arts", "STEM"], 
    "tag": ["journalism", "STEM Club"],
    "size": 25,
    "time": 4,
  },
  {
    "icon": "/static/img/whaling_crew.png",
    "name": " Whaling Crew",
    "bio": "A unified, organized student group dedicated to yelling too loud and heckling too obnoxiously at Bulldog athletic events",
    "category": "athletics",
    "tag": "athletics",
    "size": 25,
    "time": 4,
  }, {
    "icon": "/static/img/federalist_party.png",
    "name": "Federalist Party",
    "bio": "A conservative debating society/member of the Yale Political Union - we believe in the values espoused in the Federalist Papers",
    "category": "politics",
    "tag": "political party",
    "size": 50,
    "time": 7,
  }, {
    "icon": "/static/img/just_add_water.png",
    "name": "Just Add Water",
    "bio": "Yale's funniest improvisational comedy troupe - we do long-form, short-form, AND musical improv",
    "category": "arts",
    "tag": "Improv Group",
    "size": 25,
    "time": 6,
  }, {
    "icon": "/static/img/aast.jpg",
    "name": "Asian American Studies Task Force",
    "bio": "Fighting for the expansion of Asian American studies at Yale",
    "size": 15,
    "tag": "Activism",
    "category": "activism",
    "time": 5,
  }, {
    "icon": "/static/img/ygm.png",
    "name": "Yale Guild of Makers",
    "bio": "Uniting makers across Yale",
    "category": "STEM",
    "tag": "STEM club",
    "new": true,
    "size": 25,
    "time": 5,
  }, {
    "icon": "/static/img/ygm.png",
    "name": "The Yale Spizzwinks(?)",
    "bio": "",
    "category": "arts",
    "tag": "acapella",
    "new": true,
    "size": 35,
    "time": 5,
  }, {
    "icon": "/static/img/ygm.png",
    "name": "Society of Orpheus and Bacchus",
    "bio": "",
    "category": "arts",
    "tag": "acapella",
    "new": true,
    "size": 25,
    "time": 5,
  }, {
    "icon": "/static/img/ygm.png",
    "name": "The Duke's Men of Yale",
    "bio": "",
    "category": "arts",
    "tag": "acapella",
    "new": true,
    "size": 25,
    "time": 5,
  }, {
    "icon": "/static/img/ygm.png",
    "name": "Lux et Improvitas",
    "bio": "",
    "category": "arts",
    "tag": "Improv Group",
    "new": true,
    "size": 25,
    "time": 5,
  }
] 

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      clubs: [],
      results: [],
      query: "",
      test: 0
    }
  },
  componentDidMount: function() {
    this.setState({
      clubs: fake,
      results: fake,
    });
    
    {/*$.ajax({
      url: '/api/clubs/all',
      dataType: 'json',
      success: function(data) {
        this.setState({clubs: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/clubs/all', status, err.toString());
      }.bind(this)
    });*/}
  },
  componentWillReceiveProps: function(nextProps) {
    if(nextProps.initialQuery != "") {
      this.setState({query: nextProps.initialQuery}, function() {
        this.handleSubmitQuery();
      })          
    }
  },
  handleUpdateSearchQuery: function(event) {
    this.setState({
      query: event.target.value
    })
  },
  handleUpdateExploreQuery: function(event) {
    event.preventDefault();
    this.setState({query: event.target.text}, function() {
      this.handleSubmitQuery(event);
    });
  },
  handleSubmitQuery: function(event) {
    if(typeof event != "undefined") {
      event.preventDefault();
    }

    var matches = [], dirMatches = [], indirMatches = [];
    this.state.clubs.forEach(function(club) {
      var score = 0;
      if (this.matchFound(this.state.query, club.name)) score += 5;  
      
      if (Array.isArray(club.tag)) {  
        var tagStr = this.arrayToString(club.tag);
        if (this.matchFound(this.state.query, tagStr)) score += 2;  
      } else {  
        if (this.matchFound(this.state.query, club.tag)) score += 2;  
      }
      
      if (Array.isArray(club.category)) {  
        var categoryStr = this.arrayToString(club.category);
        if (this.matchFound(this.state.query, categoryStr)) score += 1;  
      } else {  
        if (this.matchFound(this.state.query, club.category)) score += 1;  
      }  
      
      if (score > 0) {  
        club.score = score;  
        dirMatches.push(club);
      } 
    }.bind(this));
    
    dirMatches = this.sortOnScores(dirMatches);
    
    if(dirMatches.length > 0) {
      const topClub = dirMatches[0];
      const topTag = Array.isArray(dirMatches[0].tag) ? 
      this.arrayToString(dirMatches[0].tag) : dirMatches[0].tag;
      const topCatg = Array.isArray(dirMatches[0].category) ? 
      this.arrayToString(dirMatches[0].category) : dirMatches[0].category; 
      
      this.state.clubs.forEach(function(club) {
        var score = 0;
        if (Array.isArray(club.tag)) {  
          var tagStr = this.arrayToString(club.tag);
          if (this.matchFound(topTag, tagStr)) score += 2;  
        } else {  
          if (this.matchFound(topTag, club.tag)) score += 2;  
        }
        
        if (Array.isArray(club.category)) {  
          var categoryStr = this.arrayToString(club.category);
          if (this.matchFound(topCatg, categoryStr)) score += 1;  
        } else {  
          if (this.matchFound(topCatg, club.category)) score += 1;  
        }
        
        if (score > 0 && !this.isInArray(dirMatches, club)) {
          club.score = score;
          indirMatches.push(club);
        }
      }.bind(this));
      
      indirMatches = this.sortOnScores(indirMatches);      
    }
    
    matches.push(...dirMatches);
    matches.push(...indirMatches);
    
    this.setState({
      results: matches
    })
  },
  /* return true or false depending on whether pattern is a substring of text*/
  matchFound: function(pattern, text) {
    pattern = pattern.toLowerCase();
    text = text.toLowerCase();
    for (var i=0; i <= text.length - pattern.length; i++) {
      for (var j=0; j < pattern.length && i + j < text.length; j++) {
        if (pattern[j] != text[i + j]) {
          break;
        }
      }
      if (j == pattern.length) {
        return true;
      }
    }
    return false;
  },
  /* compare function that sorts clubs in descending order of their query 
  match score*/
  descending: function(x,y) {
    return x.score < y.score;
  }, 
  /* sort clubs in descending order of scores and return sorted array*/
  sortOnScores: function(clubs) {
    return clubs.sort(this.descending);
  },
  /* combine array elements into a string, each element separated by a space*/
  arrayToString: function(arr) {
    var str = "";
    arr.forEach(function(elem) {
      str += (elem + " ");
    });
    return str;
  },
  isInArray : function(arr, value) {
    return arr.indexOf(value) > -1;
  },
  render: function() {
    return (
      <Results 
        onUpdateSearchQuery={this.handleUpdateSearchQuery}
        onUpdateExploreQuery={this.handleUpdateExploreQuery}
        onSubmitQuery={this.handleSubmitQuery}
        query={this.state.query}
        results={this.state.results} />
    )
  }
});

ResultsContainer.propTypes = {
  /*propName: PropTypes.dataType.isRequired;*/
}

module.exports = ResultsContainer;
