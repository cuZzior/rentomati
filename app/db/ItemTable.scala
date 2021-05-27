package db
import model.Item
import slick.jdbc.MySQLProfile.api._
import slick.lifted.{Rep, Tag}

class ItemTable(tag: Tag) extends Table[Item](tag, Option("rentomati"), "item") {
  def id: Rep[Long] = column[Long]("id", O.PrimaryKey)
  def name: Rep[String] = column[String]("name")
  def rentStatus: Rep[String] = column[String]("rent_status")

  override def * = (id, name, rentStatus) <> ((Item.slickApply _).tupled, Item.slickUnapply)
}
