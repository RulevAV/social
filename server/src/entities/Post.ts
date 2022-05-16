import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne } from "typeorm";
import Model from "./utils/Model";
import User from "./User";

@Entity("Post")
export default class Post extends Model {

  @Column()
  @IsNotEmpty({ message: "заголовок не должно быть пустым" })
  title: string;

  @Column()
  img: string;

  @Column()
  @IsNotEmpty({ message: "описание не должно быть пустым" })
  description: string;

  @ManyToOne(
    () => User,
    user => user.posts,
  )
  @Exclude()
  user: User
}
