import f from "../Friends/Friends.module.css";
import React from "react";

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount + 10; i++) {
        pages.push(i);
    }
    //
    // let portionSize = 10;
    // let portionCount = Math.ceil(pagesCount / portionSize)
    return (
        <div className={f.div_pages}>

            {pages.map(p => {
                return (
                    <span
                        style={{
                            border: '3px solid grey',
                            borderRadius: 10,
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            padding: 5,
                            margin: 2,
                        }}
                    key={p}
                    className={props.currentPage === p && f.selectedPage}
                    onClick={(e) => {
                        props.setFriendsPage(p)
                    }}>
                         {p}
                     </span>)

            })}
        </div>
    );
}

export default Paginator;