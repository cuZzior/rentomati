package controllers

import play.api.libs.json.Json
import play.api.mvc.{AbstractController, Action, AnyContent, ControllerComponents}
import services.ItemRepository

import javax.inject.{Inject, Singleton}
import scala.concurrent.ExecutionContext

@Singleton
class MainController @Inject() (controllerComponents: ControllerComponents, itemRepository: ItemRepository)(implicit
    val executionContext: ExecutionContext
) extends AbstractController(controllerComponents) {

  def getAllItems: Action[AnyContent] = {
    Action.async { implicit request =>
      import model.ItemJson._
      itemRepository.getAll
        .map(seq => Ok(Json.toJson(seq)))
    }
  }
}
