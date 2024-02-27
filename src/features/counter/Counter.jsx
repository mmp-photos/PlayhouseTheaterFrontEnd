import { useSelector, useDispatch } from "react-redux";
import { increment, decrement} from './counterSlice';
const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <section>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </section>
    )
}

export default Counter;