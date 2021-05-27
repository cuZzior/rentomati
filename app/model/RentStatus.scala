package model

object RentStatus extends Enumeration {
  type RentStatus = Value

  val AVAILABLE: model.RentStatus.Value = Value("AVAILABLE")
  val UNAVAILABLE: model.RentStatus.Value = Value("UNAVAILABLE")
}
