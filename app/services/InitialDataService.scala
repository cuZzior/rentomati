package services

import model.{Item, Reservation, User}

import java.time.Instant
import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class InitialDataService @Inject() (
    itemRepository: ItemRepository,
    userRepository: UserRepository,
    reservationRepository: ReservationRepository,
    reservationHistoryRepository: ReservationHistoryRepository
)(implicit val executionContext: ExecutionContext) {

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
      Reservation(1, 1, 6, Instant.now()),
      Reservation(2, 1, 2, Instant.now()),
      Reservation(3, 2, 8, Instant.now()),
      Reservation(4, 2, 1, Instant.now()),
      Reservation(5, 3, 5, Instant.now())
    )
  }

  private def createInitialReservationHistory: Seq[Reservation] = {
    Seq(
      Reservation(6, 1, 8, Instant.now()),
      Reservation(7, 1, 1, Instant.now()),
      Reservation(8, 2, 5, Instant.now()),
      Reservation(9, 2, 6, Instant.now())
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
