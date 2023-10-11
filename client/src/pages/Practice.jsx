import { useCallback, useMemo, useReducer, useRef } from "react"

// React reducer function is a function with 2 params like this 
function counterReducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            {
                if (state == 0) {
                    return 0;
                }

                return state - 1;
            }

        case "RESET":
            return 0;

        default:
            return state;
    }
}

// The initial counter state to be passed to useReducer second arg
const initialCounter = 0;

export default function Practice() {
    // Working with useReducer
    const [counter, counterDispatch] = useReducer(counterReducer, initialCounter);
    const componentId10Ref = useRef();

    // Only recreates this function on deps change: will return the funtion to the assignee
    const cachedFunction = useCallback(function (counter) {
        if (counter >= 10) {
            return counter;
        }

        // This is the p element of the ComponentToRef component
        componentId10Ref.current?.addEventListener("click", () => alert("You clicked the p element now"));
        return "count is less than 10";
    }, []);

    // This ensures that the function is called only with respect to the dependency array
    // :will return the value which the callback returns to the assignee
    const cachedValue = useMemo(() => cachedFunction(counter), [counter]);

    return (
        <div className="h-[50vh] ml-7">
            <p>{counter}</p>
            <h1>Cached value: {cachedValue}</h1>
            <button className="mr-3" onClick={() => counterDispatch({ type: "DECREASE" })}>-Minus</button>
            <button className="mr-3" onClick={() => counterDispatch({ type: "INCREASE" })}>Add+</button>
            <button onClick={() => counterDispatch({ type: "RESET" })}>Reset</button>
            <ComponentToRef refId10={componentId10Ref}/>
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const ComponentToRef = ({ refId10 }) => {
    return (
        <p ref={refId10} id="10">
            Hello I am the visibility Component
        </p>
    )

}