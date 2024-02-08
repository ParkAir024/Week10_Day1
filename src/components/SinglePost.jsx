export default function SinglePost({ post }) {

    return (
        <p>
            <b>{post.user.username}</b> <br />
            {post.title}
        </p>
    )
}