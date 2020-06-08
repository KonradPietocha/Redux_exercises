import React, { Component } from "react";

const style = {
    btnSize: {
        height: "10vw"
    }
};

class Pigment extends Component {
    render() {

        return (
            <>
                <button
                    style={{ ...style.btnSize, backgroundColor: this.props.colorType }}
                    className="buttons"
                    onClick={this.props.paintRed}
                >
                    red
                </button>
                <button
                    style={{ ...style.btnSize, backgroundColor: this.props.colorType }}
                    className="buttons"
                    onClick={this.props.paintOrange}
                >
                    orange
                </button>
                <button
                    style={{ ...style.btnSize, backgroundColor: this.props.colorType }}
                    className="buttons"
                    onClick={this.props.paintGreen}
                >
                    green
                </button>
            </>
        );
    }
}

export default Pigment;