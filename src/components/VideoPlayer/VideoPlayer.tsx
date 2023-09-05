import {FC, useState} from "react";
import css from "../UserInfo/UserInfo.module.css";
import {MovieInfo} from "../MovieInfo";
import {IVideo} from "../../interfaces";


interface IProps {
    videoInfo: IVideo;
}

const VideoPlayer: FC<IProps> = ({videoInfo}) => {
    const keyOfFirstVideo = videoInfo.results[0]?.key;


    return (
        <div>

            {keyOfFirstVideo && <iframe
                src={`http://www.youtube.com/embed/${keyOfFirstVideo}`}
                title="YouTube video player"
                width="560"
                height="315"
                allowFullScreen
            />


            }

        </div>
    );
}

export {VideoPlayer};