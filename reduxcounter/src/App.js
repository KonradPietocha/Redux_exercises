import { connect } from "react-redux";
import Counter from "./components/Counter";

//Powiązanie stanu z właściwością komponentu
const mapStateToProps = state => {
    return {
        countValue: state.counter.count,
        colorType: state.painter.color
    };
}

//Akcje
const actions = {
    increaseAction: { type: "increase" },
    decreaseAction: { type: "decrease" },
    paintRedAction: { type: "red" },
    paintOrangeAction: { type: "orange" },
    paintGreenAction: { type: "green" }
};

//Powiązanie akcji z właściwością komponentu
const mapDispatchToProps = dispatch => {
    return {
        increaseCount: function () {
            return dispatch(actions.increaseAction);
        },
        decreaseCount: function () {
            return dispatch(actions.decreaseAction);
        },
        paintRed: function () {
            return dispatch(actions.paintRedAction);
        },
        paintOrange: function () {
            return dispatch(actions.paintOrangeAction);
        },
        paintGreen: function () {
            return dispatch(actions.paintGreenAction);
        }
    };
}

//Komponent wyższego rzędu
const connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;