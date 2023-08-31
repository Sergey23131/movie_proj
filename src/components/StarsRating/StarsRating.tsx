import {FC} from "react";
import {IMovie} from "../../interfaces";

interface IProps {
    rating: number;
}


const StarsRating: FC<IProps> = ({rating}) => {


    return (
        <div>
            {rating}
        </div>
    );

}

export {StarsRating};
