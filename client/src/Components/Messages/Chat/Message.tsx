const Message = () => {
  const src = "https://i.pinimg.com/originals/81/23/a7/8123a79dd47d4d8097a4c36a8a01f4d4.jpg";
  return <div className="row p2 Chat_message">
    <img className="Chat_avatar" src={src} />
    <div className="col">
      <div>User1</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum et aperiam eius possimus? Inventore voluptate eveniet nemo expedita officia, quod, sit quidem, maiores iste possimus consectetur tenetur harum dolorem. Hic.</div>
    </div>
  </div>
}

export default Message;