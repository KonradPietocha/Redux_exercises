import { connect } from "rect-redux";
import Counter from "./Counter";

//Powiązanie stanu z właściwością komponentu
function mapStateToProps(state) {
    return {
        countValue: state.count
    };
}

//Akcje
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

//Powiązanie akcji z właściwością komponentu
function mapDispatchToProps(dispatch) {
    return {
        increaseCount: function () {
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            return dispatch(decreaseAction);
        }
    };
}

//Komponent wyższego rzędu
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default connectedComponent;