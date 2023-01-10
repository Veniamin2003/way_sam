import s from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import relax from '../../../assets/images/relax1.gif'
import searching from '../../../assets/images/searching1.gif'
import preloader from "../../../assets/images/loader.gif";
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img
                    src='https://runews24.ru/assets/components/phpthumbof/cache/c36342ea58f1e9ff2f1fa51e0735ca75.e7b3df8d2521429058af50ff07f8cef7.jpg'></img>
            </div>*/}
            <div className={s.descriptionBlock}>
                <div><img src={props.profile.photos.large} /></div>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>
                    <div>Статус поиска работы: </div>
                    <div className={s.statusJob}>{props.profile.lookingForAJob === true ? <img src={searching} /> : <img src={relax} />}</div>
                </div>



                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}
export default ProfileInfo;