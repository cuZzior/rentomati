package ui.dto

import model.RentStatus.RentStatus
import model.User
import play.api.libs.json.{Json, OWrites}

case class ItemDto(id: Long, name: String, status: RentStatus, rentedBy: Option[User])

object ItemDtoJson {

  implicit val userWrites: OWrites[User] = Json.writes[User]
  implicit val itemDtoWrites: OWrites[ItemDto] = Json.writes[ItemDto]
}
