package services

import model.{Item, Reservation, User}

import java.time.Instant
import java.time.temporal.ChronoUnit
import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class InitialDataService @Inject() (
    itemRepository: ItemRepository,
    userRepository: UserRepository,
    reservationRepository: ReservationRepository,
    reservationHistoryRepository: ReservationHistoryRepository
)(implicit val executionContext: ExecutionContext) {

  private val startDate = Instant.now()
  private val endDate = startDate.plus(14, ChronoUnit.DAYS)

  private def createInitialItems: Seq[Item] = {
    Seq(
      Item(1, "HTC Vive VR Googles - 1"),
      Item(2, "HTC Vive VR Googles - 2"),
      Item(3, "FIFA 21 - PS4"),
      Item(4, "Rubber duck for programming"),
      Item(5, "Cards against humanity"),
      Item(6, "Carcassonne"),
      Item(7, "Mortal Kombat XL - Xbox One"),
      Item(8, "Forza Motorsport 7 - Xbox One")
    )
  }

  private def createInitialUsers: Seq[User] = {
    Seq(
      User(1, "bogzio"),
      User(2, "rafgas"),
      User(3, "pionec")
    )
  }

  private def createInitialReservations: Seq[Reservation] = {
    Seq(
      Reservation(Some(1), 1, 6, startDate, endDate),
      Reservation(Some(2), 1, 2, startDate, endDate),
      Reservation(Some(3), 2, 8, startDate, endDate),
      Reservation(Some(4), 2, 1, startDate, endDate),
      Reservation(Some(5), 3, 5, startDate, endDate)
    )
  }

  private def createInitialReservationHistory: Seq[Reservation] = {
    Seq(
      Reservation(Some(6), 1, 8, startDate, endDate),
      Reservation(Some(7), 1, 1, startDate, endDate),
      Reservation(Some(8), 2, 5, startDate, endDate),
      Reservation(Some(9), 2, 6, startDate, endDate)
    )
  }

  private def addToDatabase(): Future[Seq[Reservation]] = {
    Future.sequence {
      createInitialUsers
        .map(userRepository.update)
      createInitialItems
        .map(itemRepository.update)
      createInitialReservations
        .map(reservationRepository.update)
      createInitialReservationHistory
        .map(reservationHistoryRepository.save)
    }
  }

  addToDatabase()
}
