import { useSelector, useDispatch } from 'react-redux';
import { getNumberOfClicks } from './selectors/numberOfClicks';
import { incrementByValue } from './selectors/incrementByValue';
import { counterButtonClicked_V1, counterButtonClicked_V2 } from './actions/counterActions';
import { setIncrementBy } from './actions/incrementActions';

export const CounterButton = () => {
    const numberOfClicks = useSelector(getNumberOfClicks);
    const incrementBy = useSelector(incrementByValue);
    const dispatch = useDispatch();
   
    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <label>
                Increment By:
                <input
                    value={incrementBy}
                    onChange={(e) => dispatch(setIncrementBy(Number(e.target.value)))}
                    type="number"
                />
            </label>
            <button
                // onClick = {() => dispatch(counterButtonClicked_V1)}
                onClick={() => dispatch(counterButtonClicked_V2(incrementBy))}
            >
                Click
            </button>
        </>
    )
};