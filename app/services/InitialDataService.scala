package services

import model.{Item, RentStatus}

import javax.inject.{Inject, Singleton}
import scala.concurrent.Future

@Singleton
class InitialDataService @Inject() (itemRepository: ItemRepository) {

  private def createInitialItems: Seq[Item] = {
    Seq(
      Item(1, "HTC Vive VR Googles - 1", RentStatus.AVAILABLE),
      Item(2, "HTC Vive VR Googles - 2", RentStatus.UNAVAILABLE),
      Item(3, "FIFA 21 - PS4", RentStatus.AVAILABLE),
      Item(4, "Rubber duck for programming", RentStatus.UNAVAILABLE),
      Item(5, "Cards against humanity", RentStatus.UNAVAILABLE),
      Item(6, "Carcassonne", RentStatus.AVAILABLE),
      Item(7, "Mortal Kombat XL - Xbox One", RentStatus.UNAVAILABLE),
      Item(8, "Forza Motorsport 7 - Xbox One", RentStatus.UNAVAILABLE)
    )
  }

  private def addToDatabase(): Seq[Future[Item]] = {
    createInitialItems
      .map(itemRepository.update)
  }

  addToDatabase()
}
