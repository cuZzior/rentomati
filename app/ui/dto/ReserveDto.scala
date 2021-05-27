package ui.dto

import play.api.libs.json.{Json, Reads}

case class ReserveDto(itemId: Long, userId: Long)

object ReserveDtoJson {
  implicit val reserveDtoReads: Reads[ReserveDto] = Json.reads[ReserveDto]
}
