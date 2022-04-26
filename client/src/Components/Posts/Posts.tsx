import Post from "./Post";

type PropsType = {
}

const Posts: React.FC<PropsType> = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <div>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
}

export default Posts;