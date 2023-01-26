import s from './ProfileInfo.module.css'
import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import relax from '../../../assets/images/relax1.gif'
import searching from '../../../assets/images/searching1.gif'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/man_user.png";
import styles from "../../Users/Users.module.css";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })

    }

    return (
        <div>
            <div className={s.descriptionBlock}>

                <div>
                    <img src={profile.photos.large || userPhoto} className={styles.mainPhoto}/>
                </div>

                <div>
                    {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>

                { editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {setEditMode(true)}}/>}


                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>

        {isOwner && <div> <button onClick={goToEditMode}>edit</button> </div>}

        <div>
            <b>Имя:</b> {profile.fullName}
        </div>

        <div className={s.statusJob}>
            <b>Статус поиска работы:</b>
            <div className={s.imgStatusJob}>{profile.lookingForAJob ? <img src={searching}/> : <img src={relax}/>}</div>
        </div>

        {profile.lookingForAJob &&
            <div>
                <b>Мои профессиональные навыыки:</b> {profile.lookingForAJobDescription}
            </div>
        }

        <div>
            <b>Обо мне:</b> {profile.aboutMe}
        </div>

        <div>
            <b>Контакты:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={styles.contact} ><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;