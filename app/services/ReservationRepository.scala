package services

import db.ReservationTable
import model.Reservation
import play.api.db.slick.DatabaseConfigProvider
import play.db.NamedDatabase
import slick.jdbc.JdbcProfile
import slick.lifted

import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ReservationRepository @Inject() (
    @NamedDatabase("default") databaseConfigProvider: DatabaseConfigProvider
)(implicit
    val executionContext: ExecutionContext
) {

  protected val dbConfig = databaseConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._
  val reservationTable = lifted.TableQuery[ReservationTable]

  def update(reservation: Reservation): Future[Reservation] = {
    db.run {
      reservationTable
        .insertOrUpdate(reservation)
        .map(_ => reservation)
    }
  }

  def findByUserId(userId: Long): Future[Seq[Reservation]] =
    db.run {
      reservationTable
        .filter(reservation => reservation.userId === userId)
        .result
    }

  def findByItemId(itemId: Long): Future[Option[Reservation]] =
    db.run {
      reservationTable
        .filter(reservation => reservation.itemId === itemId)
        .result
        .headOption
    }
}
