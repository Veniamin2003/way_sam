import React, {useState} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChanged = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>{ props.isOwner
            ?
            <div>
                {!editMode &&
                    <div>
                        <b>Статус: </b><span onDoubleClick={activateEditMode}>{props.status || "Статус отсутствует"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChanged} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
            :
            <div>
                <b>Статус: </b><span>{props.status || "Статус отсутствует"}</span>
            </div>
        }
        </div>
    )
}



export default ProfileStatusWithHooks