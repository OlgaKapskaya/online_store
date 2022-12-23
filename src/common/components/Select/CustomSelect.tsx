import React, {useState, KeyboardEvent, useEffect} from "react";
import {OptionsSelectType} from '../../../bll/types';
import s from './CustomSelect.module.css'
import img from './chevron-down.svg'


type SelectProps = {
    value: string
    options: OptionsSelectType[]
    onChange: (value: string) => void
}
export const CustomSelect = (props: SelectProps) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [hoverElement, setHoverElement] = useState<string>(props.value)
    useEffect( () => {
        setHoverElement(props.value)
    }, [props, props.value])
    const onClickHandler = () => {
        setIsVisible(!isVisible)
    }
    const onChangeSelectItem = (value: string) => {
        props.onChange(value)
        setIsVisible(false)
    }
    const onKeyUpItemHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.options.length; i++) {
            if (hoverElement === props.options[i].value) {
                if (props.options[i + 1] || props.options[i - 1]) {
                    if (event.key === 'ArrowDown') {
                        props.onChange(props.options[i + 1].value);
                        break
                    }
                    if (event.key === 'ArrowUp') {
                        props.onChange(props.options[i - 1].value);
                        break
                    }
                    if (event.key === 'Enter') {
                        props.onChange(props.options[i].value);
                        setIsVisible(false)
                        break
                    }
                }
            } else props.onChange(props.options[0].value)
        }

    }

    return (
        <div className={s.container}>
            <div className={s.select}
                 onClick={onClickHandler}
                 tabIndex={1}
                 onKeyUp={onKeyUpItemHandler}
            >
                <span>{props.value}</span>
                <img src={img} className={isVisible ? s.imgUp : s.imgDown} alt={'arrow'}/>
            </div>
            <div className={s.optionsContainer}>
            {isVisible && props.options.map(elem => {
                const itemClass = s.options + ' ' + (elem.value === hoverElement ? s.selected : "")
                const onMouseEnterHandler = () => {
                    setHoverElement(elem.value)
                }

                return (
                    <div className={itemClass}
                         onMouseEnter={onMouseEnterHandler}
                         key={elem.id}
                         onClick={() => onChangeSelectItem(elem.value)}>

                        {elem.value}
                    </div>
                )
            })}
        </div>
        </div>
    )
}