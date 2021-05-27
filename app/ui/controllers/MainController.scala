package ui.controllers

import model.Reservation
import play.api.libs.json.Json
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import services.{ReservationHistoryRepository, ReservationRepository}
import ui.ItemService
import ui.dto.ReserveDto

import java.time.{Instant, Period}
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

  def getReservationByUserId(userId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository
        .findByUserId(userId)
        .map(activeReservationOption => Ok(Json.toJson(activeReservationOption)))
    }
  }

  def getReservationByItemId(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository
        .findByItemId(itemId)
        .map(activeReservationOption => Ok(Json.toJson(activeReservationOption)))
    }
  }

  def getHistoricalReservationsByUserId(userId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationHistoryRepository
        .findByUserId(userId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def getHistoricalReservationsByItemId(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationHistoryRepository
        .findByItemId(itemId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def cancelReservation(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      reservationRepository
        .findByItemId(itemId)
        .map {
          case Some(reservation) =>
            reservationHistoryRepository
              .save(reservation)
              .map(archivedReservation => reservationRepository.delete(archivedReservation))
            Ok(Json.toJson(s"Successfully canceled reservation for item: $itemId"))
          case None =>
            NotFound(Json.toJson(s"Cannot find active reservation for item: $itemId"))
        }
    }
  }

  def reserve: Action[AnyContent] = {
    Action.async { implicit request =>
      import ui.dto.ReserveDtoJson._
      val reserveDto = request.body.asJson.get.as[ReserveDto]

      val reservationStartDate = Instant.now()
      val reservationEndDate = reservationStartDate.plus(Period.ofWeeks(2))
      val reservation =
        Reservation(None, reserveDto.userId, reserveDto.itemId, reservationStartDate, reservationEndDate)
      reservationRepository
        .update(reservation)
        .map(_ => Ok)
    }
  }
}
