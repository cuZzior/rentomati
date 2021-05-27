package db

import model.User
import slick.jdbc.MySQLProfile.api._
import slick.lifted.{Rep, Tag}

class UserTable(tag: Tag) extends Table[User](tag, Option("rentomati"), "user") {
  def id: Rep[Long] = column[Long]("id", O.PrimaryKey)
  def name: Rep[String] = column[String]("name")

  override def * = (id, name) <> ((User.slickApply _).tupled, User.slickUnapply)
}
