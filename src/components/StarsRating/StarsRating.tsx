import {FC} from "react";
import StarRatings from "react-star-ratings";

import css from './StarRating.module.css';

interface IProps {
    rating: number;
}


const StarsRating: FC<IProps> = ({rating}) => {


    return (
        <div>
            <div className={css.StarsRating}>

                <StarRatings
                    rating={rating / 2}
                    starRatedColor="orange"
                    starDimension="25px"
                    starSpacing="5px"
                />

            </div>
        </div>
    );

}

export {StarsRating};
