package ui

import model.RentStatus
import services.{ItemRepository, ReservationRepository, UserRepository}
import ui.dto.ItemDto

import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ItemService @Inject() (
    itemRepository: ItemRepository,
    reservationRepository: ReservationRepository,
    userRepository: UserRepository
)(implicit
    val executionContext: ExecutionContext
) {
  def getAll: Future[Seq[Option[ItemDto]]] = {
    itemRepository.getAll
      .flatMap { seq =>
        Future.sequence(
          seq.map { item =>
            reservationRepository
              .findByItemId(item.id)
              .flatMap {
                case Some(reservation) =>
                  userRepository
                    .getUserBy(reservation.userId)
                    .map(ItemDto(item.id, item.name, RentStatus.UNAVAILABLE, _))
                    .map(Some(_))
                case None => Future.successful(Some(ItemDto(item.id, item.name, RentStatus.AVAILABLE, None)))
              }
          }
        )
      }
  }

  def get(id: Long): Future[Option[ItemDto]] = {
    itemRepository
      .findById(id)
      .flatMap {
        case Some(item) =>
          reservationRepository
            .findByItemId(item.id)
            .flatMap {
              case Some(reservation) =>
                userRepository
                  .getUserBy(reservation.userId)
                  .map(ItemDto(item.id, item.name, RentStatus.UNAVAILABLE, _))
                  .map(Some(_))
              case None => Future.successful(Some(ItemDto(item.id, item.name, RentStatus.AVAILABLE, None)))
            }
        case None => Future.successful(None)
      }
  }
}
