import React, { Component } from "react";
import Query from "../../components/Query";
import ABOUT_QUERY from "../../queries/about/about";
import ReactMarkdown from "react-markdown";

export class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Query query={ABOUT_QUERY} id={null}>
          {({ data: { about } }) => {
            return (
              <div className="about--container">
                <div className="about--hero"></div>
                <ReactMarkdown>{about.content}</ReactMarkdown>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default About;
