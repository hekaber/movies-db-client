import React from "react";
import { GrImage } from 'react-icons/gr';

export interface IImageProps {
    path: string,
    emptyStyle: React.CSSProperties,
    active: boolean
}

const ImageContainer = (props: IImageProps) => {

    const { active, path, emptyStyle } = props;

    if (active && path) {

        return (
            <React.Fragment>
                <img className="poster" src={path} alt="poster" />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className={active ? 'no_image' : 'no_image animate'}>
                <GrImage style={emptyStyle} />
            </div>
        </React.Fragment>
    );
}

export default ImageContainer;