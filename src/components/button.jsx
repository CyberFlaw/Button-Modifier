import React, { Component } from "react";
import "rc-slider/assets/index.css";
import Slider, { createSliderWithTooltip } from "rc-slider";
import { SketchPicker } from "react-color";
import "./style.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 50,
      width: 100,
      color: "",
      tag: "Button",
      radius: 10,
      bgclr: "blue",
    };
  }

  sliderChange = (value) => {
    this.setState({ radius: value });
  };

  colorChangeHandler = (value) => {
    this.setState({ color: value.hex });
  };

  render() {
    return (
      <React.Fragment>
        <div className="header">
          <h1 style={{ font: "ariel", fontSize: 50 }}>Button Modifier</h1>
        </div>
        <div className="area">
          <div className="button">
            <div className="center">
              <button
                style={{
                  height: this.state.height,
                  width: this.state.width,
                  backgroundColor: this.state.color,
                  borderBlockColor: this.state.bgclr,
                  borderRadius: this.state.radius,
                  marginRight: 250,
                  marginLeft: 200,
                  marginBottom: 150,
                  marginTop: 100,
                }}
              >
                {this.state.tag}
              </button>
            </div>
          </div>
          <div className="atrs">
            <li style={{ marginLeft: 120 }}>
              <label>Height :</label>
              <input
                type="number"
                id="height"
                value={this.state.height}
                onChange={(event) =>
                  this.setState({ height: event.target.valueAsNumber })
                }
              />
            </li>
            <li style={{ marginLeft: 120 }}>
              <label>Width :</label>
              <input
                type="number"
                id="width"
                value={this.state.width}
                style={{ marginLeft: 5 }}
                onChange={(event) =>
                  this.setState({ width: event.target.valueAsNumber })
                }
              />
            </li>

            <li style={{ marginLeft: 120 }}>
              <label>Tag :</label>
              <input
                type="text"
                id="tag"
                value={this.state.tag}
                style={{ marginLeft: 25 }}
                onChange={(event) => this.setState({ tag: event.target.value })}
              />
            </li>

            <li style={{ marginLeft: 120 }}>
              <label> Border:</label>
              <input
                type="text"
                id="radius"
                value={this.state.bgclr}
                style={{ marginLeft: 6 }}
                onChange={(event) =>
                  this.setState({ bgclr: event.target.value })
                }
              />
            </li>
            <li style={{ marginLeft: 120 }}>
              <label>Radius :</label>
              <Slider
                style={{ marginLeft: 25 }}
                trackStyle={{ height: 5 }}
                handleStyle={{
                  backgroundColor: "lightgreen",
                }}
                min={0}
                max={25}
                onChange={this.sliderChange}
              />
            </li>
            <li style={{ marginLeft: 120 }}>
              <label>Color :</label>
              <SketchPicker
                color={this.state.color}
                onChange={this.colorChangeHandler}
              />
            </li>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Button;
