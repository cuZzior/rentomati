package model

import play.api.libs.json.{Json, OWrites}

case class Item(id: Long, name: String)

object Item {
  def slickApply(id: Long, name: String): Item = {
    new Item(id, name)
  }

  def slickUnapply(stuff: Item): Option[(Long, String)] = {
    Some(stuff.id, stuff.name)
  }
}

object ItemJson {
  implicit val itemWrites: OWrites[Item] = Json.writes[Item]
}
