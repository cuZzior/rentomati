package services

import db.ItemTable
import model.Item
import play.api.db.slick.DatabaseConfigProvider
import play.db.NamedDatabase
import slick.jdbc.JdbcProfile
import slick.lifted.TableQuery

import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class ItemRepository @Inject() (@NamedDatabase("default") databaseConfigProvider: DatabaseConfigProvider)(implicit
    val executionContext: ExecutionContext
) {
  private val itemTable = TableQuery[ItemTable]
  private val dbConfig = databaseConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  def update(item: Item): Future[Item] = {
    db.run {
      itemTable
        .insertOrUpdate(item)
        .map(_ => item)
    }
  }

  def findById(id: Long): Future[Option[Item]] = {
    db.run {
      itemTable
        .filter(_.id === id)
        .result
        .headOption
    }
  }

  def getAll: Future[Seq[Item]] = {
    db.run {
      itemTable.result
    }
  }
}
