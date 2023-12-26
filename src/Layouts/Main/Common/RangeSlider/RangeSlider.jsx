import React, {useCallback, useEffect,useRef} from "react";
import classnames from "classnames";
import "./RangeSlider.css";

const RangeSlider = ({min, max, bounds = [0, 260], setBounds, step = 10}) => {
    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const containerRef = useRef(null);
    const range = useRef(null);

    const getPercent = useCallback(
        (value) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(bounds[0]);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [bounds, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(bounds[1]);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [bounds, getPercent]);

    const handleLeftChange = useCallback((event) => {
        const value = Math.min(+event.target.value, bounds[1] - 1);
        setBounds(prev => [Math.max(value - value % step, 0), prev[1]])
    }, [bounds, step]);
    const handleRightChange = useCallback((event) => {
        const value = Math.max(+event.target.value, bounds[0] + 1);
        setBounds(prev => [prev[0], Math.min(value - value % step, max)])
    }, [bounds, step]);
    const handleContainerClick = useCallback((event) => {
        const rect = containerRef.current.getBoundingClientRect();
        const elementWidth = rect.width;
        const offsetPix = event.clientX - rect.x;
        const currentPercent = (offsetPix / elementWidth) * 100
        const val = Math.ceil(currentPercent / 100 * max);
        if (val - bounds[0] > bounds[1] - val) {
            setBounds(prev => [prev[0], Math.min(val - val % step, max)])
        } else {
            setBounds(prev => [Math.max(val - val % step, 0), prev[1]])
        }
    }, [containerRef?.current, min, max, bounds, step])
    return (
        <div className="container" ref={containerRef}
             onClick={handleContainerClick}>
            <input
                type="range"
                min={min}
                max={max}
                value={bounds[0]}
                ref={minValRef}
                onClick={e => e.stopPropagation()}
                onChange={handleLeftChange}
                className={classnames("thumb thumb--zindex-3", {
                    "thumb--zindex-5": bounds[0] > max - 100
                })}
            />
            <input
                type="range"
                min={min}
                max={max}
                onClick={e => e.stopPropagation()}
                value={bounds[1]}
                ref={maxValRef}
                onChange={handleRightChange}
                className="thumb thumb--zindex-4"
            />
            <div className="slider">
                <div className="slider__track"/>
                <div ref={range} className="slider__range"/>
            </div>
        </div>
    );
};

export default RangeSlider;
