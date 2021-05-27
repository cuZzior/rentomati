package controllers

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import services.{ItemRepository, ReservationRepository}
import javax.inject.{Inject, Singleton}

import scala.concurrent.ExecutionContext

@Singleton
class MainController @Inject() (
  controllerComponents: ControllerComponents,
  itemRepository: ItemRepository,
  reservationRepository: ReservationRepository
)(implicit
    val executionContext: ExecutionContext
) extends AbstractController(controllerComponents) {

  def getAllItems: Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ItemJson._
      itemRepository.getAll
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def getReservationsByUserId(userId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository.findByUserId(userId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }

  def getReservationsByItemId(itemId: Long): Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ReservationJson._
      reservationRepository.findByItemId(itemId)
        .map(seq => Ok(Json.toJson(seq)))
    }
  }
}
