import { connect } from "react-redux";
import Counter from "./components/Counter";

//Powiązanie stanu z właściwością komponentu
function mapStateToProps(state) {
    return {
        countValue: state.counter.count,
        colorType: state.painter.color
    };
}

//Akcje
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };
var paintRedAction = { type: "red" };
var paintOrangeAction = { type: "orange" };
var paintGreenAction = { type: "green" };

//Powiązanie akcji z właściwością komponentu
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        },
        paintRed: function () {
            return dispatch(paintRedAction);
        },
        paintOrange: function () {
            return dispatch(paintOrangeAction);
        },
        paintGreen: function () {
            return dispatch(paintGreenAction);
        }
    };
}

//Komponent wyższego rzędu
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;