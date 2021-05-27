package model

case class User(id: Long, name: String)

object User {
  def slickApply(id: Long, name: String): User = {
    new User(id, name)
  }

  def slickUnapply(user: User): Option[(Long, String)] = {
    Some(user.id, user.name)
  }
}
