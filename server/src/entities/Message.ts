import { Exclude } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne } from "typeorm";
import Model from "./utils/Model";
import User from "./User";

@Entity("Message")
export default class Message extends Model {

  @Column()
  @IsNotEmpty({ message: "заголовок не должно быть пустым" })
  message: string;

  @Column({ nullable: false })
  addressee: number;

  @ManyToOne(
    () => User,
    user => user.posts,
  )
  @Exclude()
  user: User
}
