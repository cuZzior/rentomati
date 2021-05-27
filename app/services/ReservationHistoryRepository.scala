package services

import db.{ReservationHistoryTable, ReservationTable}
import javax.inject.{Inject, Singleton}
import model.Reservation
import play.api.db.slick.DatabaseConfigProvider
import play.db.NamedDatabase
import slick.jdbc.JdbcProfile
import slick.lifted

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ReservationHistoryRepository @Inject() (
  @NamedDatabase("default") databaseConfigProvider: DatabaseConfigProvider
)(implicit
  val executionContext: ExecutionContext
) {
  protected val dbConfig = databaseConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._
  val reservationHistoryTable = lifted.TableQuery[ReservationHistoryTable]

  def save(reservation: Reservation): Future[Reservation] = {
    db.run {
      reservationHistoryTable
        .insertOrUpdate(reservation)
        .map(_ => reservation)
    }
  }

  def findByUserId(userId: Long): Future[Seq[Reservation]] =
    db.run{
      reservationHistoryTable
        .filter(reservation => reservation.userId === userId)
        .result
    }

  def findByItemId(itemId: Long): Future[Seq[Reservation]] =
    db.run{
      reservationHistoryTable
        .filter(reservation => reservation.itemId === itemId)
        .result
    }
}
