import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0); // 初始化秒数为0
    const [isActive, setIsActive] = useState(false); // 计时器是否处于活动状态

    useEffect(() => {
        let intervalId = null;

        if (isActive) {
            intervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(intervalId); // 清除定时器
    }, [isActive]); // 依赖数组仅包含isActive

    const handleStart = () => setIsActive(true);
    const handleStop = () => setIsActive(false);
    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div>
            <h2>计时器</h2>
            <p>{seconds} 秒</p>
            <button onClick={handleStart} disabled={isActive}>
                开始
            </button>
            <button onClick={handleStop} disabled={!isActive}>
                停止
            </button>
            <button onClick={handleReset}>
                重置
            </button>
        </div>
    );
}

export default Timer;