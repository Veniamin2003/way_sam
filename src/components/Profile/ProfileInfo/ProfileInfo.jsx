import s from './ProfileInfo.module.css'
import React from 'react';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://runews24.ru/assets/components/phpthumbof/cache/c36342ea58f1e9ff2f1fa51e0735ca75.e7b3df8d2521429058af50ff07f8cef7.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;