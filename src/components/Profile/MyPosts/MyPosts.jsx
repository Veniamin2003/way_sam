import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"

console.log()
const MyPosts = (props) => {
    debugger;
    let postsElements = props.posts.map(p => <Post messages={p.message} key={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.content}>
            <div>
                <h3>my posts</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange}
                                  ref={newPostElement}
                                  value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add posts</button>
                        <button>Remove</button>
                    </div>

                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;