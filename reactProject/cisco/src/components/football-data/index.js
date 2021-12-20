
import React, { Component } from "react";
import "./index.css";
const classNames = require('classnames');

export default class FootballMatchesData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: null,
      data: []
    };
  }

  onClick = (year) => (e) => {
    console.log(year)
    // Code written in next line is to take care of adding active class to selected year for css purpose.
    fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.data })
      })
    this.setState({
      selectedYear: year
    })

  }

  render() {
    var years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    console.log("render", this.state.data)
    return (
      <div className="layout-row">
        <div className="section-title">Select Year</div>
        <ul className="sidebar" data-testid="year-list">
          {years.map((year, i) => {
            return (
              <li className={
                classNames({
                  'sidebar-item': true,
                  'active': this.state.selectedYear === year
                })
              }
                onClick={this.onClick(year)}
                key={year}>
                <a>{year}</a>
              </li>
            )
          })}
        </ul>

        <section className="content">
          <section>
            <div className="total-matches" data-testid="total-matches"></div>

            <ul className="mr-20 matches styled" data-testid="match-list">
              {this.state.data.length > 0 ? <h3> Total of Matches {this.state.data.length}</h3> : <h3>no matches found</h3>}
              {this.state.data.map(item => {
                return (
                  <li className="slide-up-fade-in">
                    <p>Match</p>{item.name}<p>won by</p>{item.winner}</li>
                )
              })}

            </ul>
          </section>

          <div data-testid="no-result" className="slide-up-fade-in no-result"></div>
        </section>
      </div>
    );
  }
}