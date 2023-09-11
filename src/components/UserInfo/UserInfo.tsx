import css from './UserInfo.module.css'
import {useState} from "react";


const UserInfo = () => {
    const [activeTab, setActiveTab] = useState('tab1');




    const handleTabClick = (tab:any) => {
        setActiveTab(tab);
    };

    return (
        <div className={css.userInfoContainer}>
            <div className={css.userInfoCard}>
                <div className={css.userInfoContent}>
                    <img src="/images/img_3.png" alt="userPage" className={css.userImage}/>

                    <div className={css.userInfoDetails}>
                        <div className={css.userInfoName}>Name:John Doe</div>
                        <div className={css.userInfoInfo}>
                            Location: New York
                        </div>
                        <div className={css.userInfoInfo}>
                            Date of Registration: 01.01.2020
                        </div>


                    </div>
                </div>
                <div className={css.userInfoTabs}>
                    <div
                        className={`${css.userInfoTab} ${
                            activeTab === 'tab1' ? css.active : ''
                        }`}
                        onClick={() => handleTabClick('tab1')}
                    >
                        Tab 1
                    </div>
                    <div
                        className={`${css.userInfoTab} ${
                            activeTab === 'tab2' ? css.active : ''
                        }`}
                        onClick={() => handleTabClick('tab2')}
                    >
                        Tab 2
                    </div>
                    <div
                        className={`${css.userInfoTab} ${
                            activeTab === 'tab3' ? css.active : ''
                        }`}
                        onClick={() => handleTabClick('tab3')}
                    >
                        Tab 3
                    </div>
                </div>
                <div className={css.tabContent}>
                    {activeTab === 'tab1' && (
                        <p>This is Tab 1 content.</p>
                    )}
                    {activeTab === 'tab2' && (
                        <p>This is Tab 2 content.</p>
                    )}
                    {activeTab === 'tab3' && (
                        <p>This is Tab 3 content.</p>
                    )}
                </div>
            </div>
        </div>
    );

}

export {UserInfo};
