package db
import model.Reservation
import slick.jdbc.MySQLProfile.api._
import slick.lifted.{Rep, Tag}

import java.time.Instant

class ReservationHistoryTable(tag: Tag) extends Table[Reservation](tag, Option("rentomati"), "reservation_history") {
  def id: Rep[Long] = column[Long]("id", O.PrimaryKey)
  def userId: Rep[Long] = column[Long]("user_id")
  def itemId: Rep[Long] = column[Long]("item_id")
  def startDate: Rep[Instant] = column[Instant]("start_date")
  def endDate: Rep[Instant] = column[Instant]("end_date")

  override def * = (id.?, userId, itemId, startDate, endDate) <> (Reservation.tupled, Reservation.unapply)
}
