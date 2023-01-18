import s from './ProfileInfo.module.css'
import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import relax from '../../../assets/images/relax1.gif'
import searching from '../../../assets/images/searching1.gif'
import preloader from "../../../assets/images/loader.gif";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/man_user.png";
import styles from "../../Users/Users.module.css";


const ProfileInfo = ({profile, status, updateStatus }) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large != null ? profile.photos.large : userPhoto} className={styles.userPhoto}/>
                </div>
                <div>{profile.fullName}</div>
                <div>{profile.aboutMe}</div>
                <div>{profile.contacts.vk}</div>
                <div>
                    <div>Статус поиска работы: </div>
                    <div className={s.statusJob}>{profile.lookingForAJob === true ? <img src={searching} /> : <img src={relax} />}</div>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;