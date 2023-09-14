import {useState} from "react";
import {useAppSelector} from "../../hooks";

import css from './UserInfo.module.css'


const UserInfo = () => {
    const {style} = useAppSelector(state => state.movieReducer);

    const [info, setInfo] = useState("");

    const displayInfo1 = () => {
        setInfo("Favorite movies of user");
    };

    const displayInfo2 = () => {
        setInfo("Movies that user wants to watch later");
    };

    const displayInfo3 = () => {
        setInfo("List of films for the user that he is likely to like");
    };

    return (
        <div className={`${css.userInfoContainer} ${style ? css.userInfoContainerLight : css.userInfoContainerDark}`}>
            <div className={css.userInfoCard}>
                <div className={css.userInfoTitle}><p>Fake user card</p></div>
                <div className={css.userInfoContent}>
                    <img src="./images/img_3.png" alt="userPage" className={css.userImage}/>

                    <div className={css.userInfoDetails}>
                        <div className={css.userInfo}>
                            <p>Name:John Doe</p>
                            <p> Date of Registration: 01.01.2020</p>
                            <p>Location: New York</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus deserunt facere
                                hic minima molestias possimus quod ullam voluptates! Aliquid animi ducimus enim fugit
                                iste nihil odio omnis quam quisquam quo rem, reprehenderit rerum saepe sed similique
                                suscipit vero. Deserunt ea magni tenetur. Aut blanditiis culpa dolores, ipsum magni
                                necessitatibus veniam? A accusamus ad asperiores at cum cupiditate, delectus doloribus
                                est expedita id iste laboriosam magnam mollitia, neque nesciunt odio quasi quibusdam
                                quis quo sapiente sed similique tenetur ut voluptate voluptatem. Obcaecati, porro,
                                voluptatem. Alias aut deleniti dolore dolores ea eum ex, iusto laborum minus nihil porro
                                sapiente ut, voluptatum.</p>
                        </div>


                    </div>
                </div>
                <div className={css.buttonInfoApp}>

                    <button onClick={displayInfo1} className={css.userButton}>Favorite movies</button>
                    <button onClick={displayInfo2} className={css.userButton}>Watch later list</button>
                    <button onClick={displayInfo3} className={css.userButton}>You might like it</button>
                    <div id="info-container">
                        <p>{info}</p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export {UserInfo};
