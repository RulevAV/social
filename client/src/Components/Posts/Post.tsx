const Post = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <div className="post">
    <div className="row">
      <div className="post_avatar"><img src={src} /></div>
      <div className="col ml1">
        <h3 className="post_title m0 p1">title</h3>
        <span className="post_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint quod nostrum nulla quae? Ipsam beatae optio pariatur excepturi ut provident veniam aliquam est nobis inventore eos, neque eum sint? Nam?
        </span>
      </div>
    </div>
    <span className="post_time">2017.03.12 12:35</span>
  </div>
}

export default Post;