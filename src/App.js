import React, { Component } from "react";
import styled from "styled-components";
import ReactRevealText from "react-reveal-text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Mouse from "./Mouse";
import "./App.css";
import "./circles.css";

class App extends Component {
  state = {
    showHeader: false,
    showSubHeader: false,
    size: 0,
    max: Math.max(window.innerHeight, window.innerWidth),
    start: 0
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showHeader: true });
    }, 1000);

    setTimeout(() => {
      this.setState({ showSubHeader: true });
    }, 2000);
  }

  onScroll = e => {
    this.state.size / this.state.max >= 0.7
      ? this.setState({ start: 1 })
      : this.state.start !== 1 && this.setState({ start: 0 });
    this.setState({
      size:
        this.state.size > -1
          ? this.state.size <= this.state.max
            ? this.state.size + e.deltaY
            : e.deltaY < 0
              ? this.state.size + e.deltaY
              : this.state.size
          : 0
    });
  };

  render() {
    const run = this.state.size;
    return (
      <Mouse>
        <div
          className="App"
          onWheel={this.onScroll}
          style={{ height: this.state.max * 3 }}
        >
          <div id="body">
            <header className="header">
              <ReactRevealText show={this.state.showHeader} className="script">
                Joseph Silverman
              </ReactRevealText>
              <ReactRevealText
                show={this.state.showSubHeader}
                className="script sub-header"
              >
                Eat Sleep Breath Code
              </ReactRevealText>
            </header>
            <div className="animation__wrap">
              <div className="animation">
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
                <span className="circle" />
              </div>
            </div>
            <svg
              className="mouse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 76 130"
              preserveAspectRatio="xMidYMid meet"
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  className="scroll"
                  cx="37.5"
                  cy="31.5"
                  r="7.5"
                  fill="#FFF"
                />
              </g>
            </svg>
            <div className="links">
              <a className="phone" href="tel:+14167046000">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a className="email" href="mailto:joseph@jsilverman.ca">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
          <div
            id="fade"
            style={{
              width: this.state.size + "px",
              height: this.state.size + "px",
              opacity: this.state.size / this.state.max
            }}
          />
          <div
            id="fade_2"
            style={{
              width: this.state.size + "px",
              height: this.state.size + "px",
              opacity: this.state.size / this.state.max
            }}
          />
          <div
            id="fade_3"
            style={{
              width: this.state.size + "px",
              height: this.state.size + "px",
              opacity: this.state.size / this.state.max
            }}
          />
          <div
            id="fade_4"
            style={{
              width: this.state.size + "px",
              height: this.state.size + "px",
              opacity: this.state.size / this.state.max
            }}
          />
          <div
            id="fade_5"
            style={{
              opacity: this.state.size / this.state.max
            }}
          >
            <svg
              className="mouse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 76 130"
              preserveAspectRatio="xMidYMid meet"
              style={{ bottom: window.innerHeight - 44 }}
            >
              <g fill="none" fillRule="evenodd">
                <circle
                  className="scroll_2"
                  cx="37.5"
                  cy="31.5"
                  r="7.5"
                  fill="#000"
                />
              </g>
            </svg>
            <div className="links">
              <a className="phone" href="tel:+14167046000">
                <FontAwesomeIcon icon={faPhone} />
              </a>
              <a className="email" href="mailto:joseph@jsilverman.ca">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <Birds start={this.state.start}>
              <div class="bird-container bird-container--one">
                <div class="bird bird--one" />
              </div>

              <div class="bird-container bird-container--two">
                <div class="bird bird--two" />
              </div>

              <div class="bird-container bird-container--three">
                <div class="bird bird--three" />
              </div>

              <div class="bird-container bird-container--four">
                <div class="bird bird--four" />
              </div>
            </Birds>
          </div>
        </div>
      </Mouse>
    );
  }
}

export default App;

const Birds = styled.div`
  .bird-container {
    animation-play-state: ${props => (props.start ? "running" : "paused")};
  }
`;
