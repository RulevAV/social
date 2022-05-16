import { BeforeInsert, Column, Entity, OneToMany } from "typeorm";
import Model from "./utils/Model";
import bcrypt from "bcrypt";
import { IsEmail, Length } from "class-validator";
import { Exclude } from "class-transformer";
import Post from "./Post";

@Entity("users")
export default class User extends Model {

  @Column()
  first_name: string;

  @Column()
  las_name: string;

  @IsEmail()
  @Column({ unique: true })
  email: string

  @Length(6, 255, { message: 'Длинна пароля должна быть 6 символов.' })
  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true, })
  avatar: string;

  @Column({ nullable: true, })
  description: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 6);
  }

  async passwordCheck(password: string) {
    return bcrypt.compare(password, this.password);
  }

  @OneToMany(
    () => Post,
    post => post
  )
  posts: Post[]
}
