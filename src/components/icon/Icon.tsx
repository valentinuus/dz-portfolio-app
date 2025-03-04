// import React from 'react';
import iconsSprite from '../../assets/images/sprite.svg'


type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    fill?: string
    stroke?: string
}

export const Icon = (props: IconPropsType) => {
    return (

        <svg width={props.width || "70"} height={props.height || "70"} viewBox={props.viewBox || "0 0 70 70"} fill={props.fill || 'none'} stroke={props.stroke || "white"}  xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>

    );
};

