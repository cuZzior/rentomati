package services

import db.UserTable
import model.User
import play.api.db.slick.DatabaseConfigProvider
import play.db.NamedDatabase
import slick.jdbc.JdbcProfile
import slick.lifted

import javax.inject.{Inject, Singleton}
import scala.concurrent.{ExecutionContext, Future}

@Singleton
class UserRepository @Inject() (@NamedDatabase("default") databaseConfigProvider: DatabaseConfigProvider)(implicit
    val executionContext: ExecutionContext
) {
  private val dbConfig = databaseConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  private val userTable = lifted.TableQuery[UserTable]

  def getUserBy(id: Long): Future[Option[User]] = {
    db.run {
      userTable
        .filter(_.id === id)
        .result
        .headOption
    }
  }

  def update(user: User): Future[User] = {
    db.run {
      userTable
        .insertOrUpdate(user)
        .map(_ => user)
    }
  }
}
