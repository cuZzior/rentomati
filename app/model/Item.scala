package model

import model.RentStatus.RentStatus

case class Item(id: Long, name: String, imageUrl: String, rentStatus: RentStatus)

object Item {
  def slickApply(id: Long, name: String, imageUrl: String, rentStatus: String): Item = {
    new Item(id, name, imageUrl, RentStatus.withName(rentStatus))
  }

  def slickUnapply(stuff: Item): Option[(Long, String, String, String)] = {
    Some(stuff.id, stuff.name, stuff.imageUrl, stuff.rentStatus.toString)
  }
}
