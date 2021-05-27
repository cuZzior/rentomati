package model

import java.time.Instant

case class Reservation(id: Long, userId: Long, itemId: Long, startDate: Instant)

object Reservation {
  def slickApply(id: Long, userId: Long, itemId: Long, startDate: Instant): Reservation = {
    new Reservation(id, userId, itemId, startDate)
  }

  def slickUnapply(reservation: Reservation): Option[(Long, Long, Long, Instant)] = {
    Some(reservation.id, reservation.userId, reservation.itemId, reservation.startDate)
  }
}

