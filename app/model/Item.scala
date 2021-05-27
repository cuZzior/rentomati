package model

import model.RentStatus.RentStatus
import play.api.libs.json.{Json, OWrites}

case class Item(id: Long, name: String, rentStatus: RentStatus)

object Item {
  def slickApply(id: Long, name: String, rentStatus: String): Item = {
    new Item(id, name, RentStatus.withName(rentStatus))
  }

  def slickUnapply(stuff: Item): Option[(Long, String, String)] = {
    Some(stuff.id, stuff.name, stuff.rentStatus.toString)
  }
}

object ItemJson {
  implicit val itemWrites: OWrites[Item] = Json.writes[Item]
}
