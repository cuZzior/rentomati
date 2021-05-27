package model

import play.api.libs.json.{Json, OWrites}

import java.time.Instant

case class Reservation(id: Option[Long], userId: Long, itemId: Long, startDate: Instant, endDate: Instant)

object ReservationJson {
  implicit val reservationWrites: OWrites[Reservation] = Json.writes[Reservation]
}
