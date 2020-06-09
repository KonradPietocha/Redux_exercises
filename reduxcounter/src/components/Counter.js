import React, { Component } from "react";
import Pigment from "./Pigment";

const style = {
    flex: {
        display: "flex",
        flexDirection: "column"
    },
    btnSize: {
        width: "10vw",
        height: "10vw"
    },
    numberFont: {
        fontSize: "7vw"
    }
};

class Counter extends Component {
    render() {
        
        return (
            <div className="container" style={style.flex}>
                <div>
                    <button
                        style={{ ...style.btnSize, backgroundColor: this.props.colorType }}
                        className="buttons"
                        onClick={this.props.decreaseCount}
                    >
                        -
                    </button>
                    <span style={style.numberFont}>{this.props.countValue}</span>
                    <button
                        style={{ ...style.btnSize, backgroundColor: this.props.colorType }}
                        className="buttons"
                        onClick={this.props.increaseCount}
                    >
                        +
                    </button>
                </div>
                <Pigment
                    paintRed={this.props.paintRed}
                    paintOrange={this.props.paintOrange}
                    paintGreen={this.props.paintGreen}
                    colorType={this.props.colorType}
                />
            </div>
        );
    }
}

export default Counter;