package ui.controllers

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import services.{ReservationHistoryRepository, ReservationRepository}
import ui.ItemService
import javax.inject.{Inject, Singleton}

import scala.concurrent.ExecutionContext

@Singleton
class MainController @Inject() (
    controllerComponents: ControllerComponents,
    itemService: ItemService,
    reservationRepository: ReservationRepository,
    reservationHistoryRepository: ReservationHistoryRepository
)(implicit
    val executionContext: ExecutionContext
) extends AbstractController(controllerComponents) {

  def getAllItems: Action[AnyContent] = {
    Action.async { implicit request =>
      import ui.dto.ItemDtoJson._
      itemService.getAll
        .map(seq => Ok(Json.toJson(seq)))
    }
  }
  def getItem(id: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import ui.dto.ItemDtoJson._
      itemService
        .get(id)
        .map {
          case Some(itemDto) => Ok(Json.toJson(itemDto))
          case None          => NotFound
        }
    }
  }

  def getReservationsByUserId(userId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository
        .findByUserId(userId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def getReservationsByItemId(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository
        .findByItemId(itemId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def cancelReservation(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      reservationRepository.findByItemId(itemId)
        .map {
          case Some(reservation) =>
            reservationHistoryRepository.save(reservation)
              .map(archivedReservation => reservationRepository.delete(archivedReservation))
            Ok(Json.toJson(s"Successfully canceled reservation for item: $itemId"))
          case None =>
            NotFound(Json.toJson(s"Cannot find active reservation for item: $itemId"))
        }
    }
  }
}
