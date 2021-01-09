import React, { useRef, useState } from 'react'
import styles from './search.module.scss'
import search from '../../../assets/img/search.svg'
import { useDispatch } from "react-redux";
import { filterThunk , getProducts } from '../../../store/actions/actions';
import { TiDelete } from 'react-icons/ti';

export const Search: React.FC = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')

    const filterHandler = () => {
        dispatch(filterThunk(value))
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const onDeleteHandler = () => {
        setValue('')
        dispatch(filterThunk(' '))
    }

    return (
        <div className={styles.search}>
            <button className={styles.searchBtn} onClick={filterHandler}>
                <img src={search} alt="search" />
            </button>
            <input className={styles.input} value={value} onChange={(e) => changeHandler(e)} placeholder='Поиск...' />
            {
                value.length
                    ? <div className={styles.delete} onClick={onDeleteHandler}>
                        <TiDelete />
                    </div>
                    : null
            }
        </div>
    )
}