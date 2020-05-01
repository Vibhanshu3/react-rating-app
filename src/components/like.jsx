import React from 'react';

const Like = (props) => {
    let classes;
    if (props.liked) {
        let filled = "fa fa-heart"
        classes = filled

    } else {
        let empty = "fa fa-heart-o"
        classes = empty

    }
    return <i className={classes} onClick={ props.onClick }
    ></i>
}

export default Like;