package model

import java.time.Instant
import play.api.libs.json.{Json, OWrites}

case class Reservation(id: Long, userId: Long, itemId: Long, startDate: Instant, endDate: Instant)

object Reservation {
  def slickApply(id: Long, userId: Long, itemId: Long, startDate: Instant, endDate: Instant): Reservation = {
    new Reservation(id, userId, itemId, startDate, endDate)
  }

  def slickUnapply(reservation: Reservation): Option[(Long, Long, Long, Instant, Instant)] = {
    Some(reservation.id, reservation.userId, reservation.itemId, reservation.startDate, reservation.endDate)
  }
}

object ReservationJson {
  implicit val reservationWrites: OWrites[Reservation] = Json.writes[Reservation]
}
