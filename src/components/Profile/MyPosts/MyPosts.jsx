import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

    console.log("RENDER")
    let postsElements = props.posts.map(p => <Post key={p.id} messages={p.message} key={p.id} likesCount={p.likesCount}/>);

    let AddNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.content}>
            <div>
                <h3>my posts</h3>
                <AddNewPostTextFormRedux onSubmit={AddNewPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPostText" placeholder="Enter your post"
            validate={[required, maxLength10]}/>
            <div>
                <button>Add posts</button>
            </div>

        </form>
    )
}

let AddNewPostTextFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;