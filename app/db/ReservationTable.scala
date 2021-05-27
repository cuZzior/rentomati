package db
import java.time.Instant

import model.Reservation
import slick.jdbc.MySQLProfile.api._
import slick.lifted.{Rep, Tag}

class ReservationTable(tag: Tag) extends Table[Reservation](tag, Option("rentomati"), "reservation") {
  def id: Rep[Long] = column[Long]("id", O.PrimaryKey)
  def userId: Rep[Long] = column[Long]("user_id")
  def itemId: Rep[Long] = column[Long]("item_id")
  def startDate: Rep[Instant] = column[Instant]("start_date")
  def user =
    foreignKey(
      "fk_reservation_user",
      userId,
      TableQuery[UserTable]
    )(
      _.id,
      onDelete = ForeignKeyAction.Cascade
    )
  def item =
    foreignKey(
      "fk_reservation_item",
      itemId,
      TableQuery[ItemTable]
    )(
      _.id,
      onDelete = ForeignKeyAction.Cascade
    )

  override def * = (id, userId, itemId, startDate) <> ((Reservation.slickApply _).tupled, Reservation.slickUnapply)
}
