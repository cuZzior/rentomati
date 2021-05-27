-- Stuff schema
-- !Ups
create schema if not exists rentomati;
CREATE TABLE rentomati.item
(
    id          INT UNSIGNED PRIMARY KEY NOT NULL,
    name        VARCHAR(256) NOT NULL,
    image_url   VARCHAR(256) NOT NULL,
    rent_status TEXT         NOT NULL
);
-- !Down
DROP TABLE rentomati.item;