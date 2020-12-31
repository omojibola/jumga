import React from "react";
import {Button} from "@material-ui/core";
import './button.css';

const ButtonName = (props) => {
    return (
        <Button variant={'contained'} className={'button'}>{props.children}</Button>
    )

};

export default ButtonName;