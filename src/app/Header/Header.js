import React from 'react';
import './Header.scss';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPath} from "../../assets/store/CurrentPathReducer";

function Header() {
    let dispatch = useDispatch();
    const paths = useSelector(store => store.paths);

    function getPathNumbers() {
        let pathCount = Object.keys(paths).length;
        let result = [];
        for (let i = 0; i < pathCount; i++) {
            result.push(<th key={Math.random()} className={'table-map__headline_item'}>Точка {1 + i}</th>);
        }
        return result
    }
    function getPaths() {
        let result = [];
        let pathCount = 0;
        console.log(paths);
        for (let key in paths) {
            let pointsArray = paths[key];
            let jsxPoints = (
                <tr key={key} className={'table-map__row'} onClick={(event)=>rowClickHandler(key, event)}>
                    <td className={'table-map__row_item'}>Маршрут №{++pathCount}</td>
                    {pointsArray.map((item, index) => {
                        return (
                            <td key={item.lat + item.lng} className={'table-map__row_item'}>{item.lat}, {item.lng}</td>
                        )
                    })}
                </tr>)
            result.push(jsxPoints);
        }
        return result;
    }
    function rowClickHandler(key, event) {
        const rows = document.querySelectorAll('.table-map__row');
        rows.forEach(row => {
            row.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        dispatch(setCurrentPath(paths[key]));
    }



    return (
        <header className={'header'}>
            <table className="header__table table-map">
                <caption className={'table-map__title'}>Таблица 1</caption>
                <thead className={'table-map__header'}>
                <tr className={"table-map__headline"}>
                    <th className={'table-map__headline_item'}>Маршрут</th>
                    {getPathNumbers()}
                </tr>
                </thead>
                <tbody className={'table-map__body'}>
                    {getPaths()}
                </tbody>
            </table>
        </header>
    );
}

export default Header;