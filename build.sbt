name := "rentomati"

version := "1.0"

lazy val `rentomati` = (project in file(".")).enablePlugins(PlayScala)

resolvers += "Akka Snapshot Repository" at "https://repo.akka.io/snapshots/"

scalaVersion := "2.13.5"

libraryDependencies ++= Seq(ehcache, ws, specs2 % Test, guice)
libraryDependencies ++= Seq(
  "com.typesafe.play" %% "play-slick" % "5.0.0",
  "com.typesafe.play" %% "play-slick-evolutions" % "5.0.0"
)
libraryDependencies += "com.h2database" % "h2" % "1.4.200"
Docker / daemonUser := "daemon"
Docker / packageName := sys.env.getOrElse("IMAGE_NAME", packageName.value)
Docker / version := sys.env.getOrElse("IMAGE_VERSION", version.value)
dockerBaseImage := "openjdk:11"
dockerExposedPorts := Seq(9000, 9010)
dockerUpdateLatest := true
