import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import dummy from '../db/data.json'

const DayList = () => {
    //console.log(dummy);
    
    const [days, setDays] = useState([]);
    const [count, setCount] = useState(0);

    function onclick() {
        setCount(count + 1);
    }

    function onclick2() {
        setDays([
            ...days,
            {
                id: Math.random(),
                day: 1,
            },
        ]);
    }

    // useEffect: 상태값이 바뀌었을 때 동작하는 함수
    // 랜더링 후 실행됨.
    // component mount / component unmount / component update
    useEffect(() => {
        console.log("Count Change");
    },[]); // 의존성 배열이 변경되는 경우에만 실행

    return (
        <>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li> // 반복되는 요소에 고유한 값 필요: key
                ))}
                
                {/* 다른 표현 방법 */}
                {/* {dummy.days.map(function (day) {
                    return <li>Day {day.day}</li>
                })} */}
            </ul>
            <button onClick={onclick}>{count}</button>
            <button onClick={onclick2}>Day Change</button>
        </>
    );
}

export default DayList;