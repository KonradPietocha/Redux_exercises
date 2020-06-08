//Reduktor
function painter(state, action) {
    if (state === undefined) {
        return { color: "red" };
    }
    switch (action.type) {
        case "red":
            return { color: "red" };
        case "orange":
            return { color: "orange" };
        case "green":
            return { color: "green" };
        default:
            return state;
    }
}

export default painter;
