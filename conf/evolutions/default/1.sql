-- Stuff schema
-- !Ups
create schema if not exists rentomati;
CREATE TABLE rentomati.item
(
    id          INT UNSIGNED PRIMARY KEY NOT NULL,
    name        VARCHAR(256) NOT NULL,
    rent_status TEXT         NOT NULL
);

CREATE TABLE rentomati.user
(
    id          INT UNSIGNED PRIMARY KEY NOT NULL,
    name        VARCHAR(256) NOT NULL
);

CREATE TABLE rentomati.reservation
(
    id          INT UNSIGNED PRIMARY KEY NOT NULL,
    user_id     INT UNSIGNED NOT NULL,
    item_id     INT UNSIGNED NOT NULL,
    start_date  TEXT         NOT NULL,
    CONSTRAINT fk_reservation_user FOREIGN KEY (user_id)
        REFERENCES rentomati.user (name)
        ON DELETE CASCADE,
    CONSTRAINT fk_reservation_item FOREIGN KEY (item_id)
        REFERENCES rentomati.item (id)
        ON DELETE CASCADE
);

-- !Down
DROP TABLE rentomati.reservation;
DROP TABLE rentomati.item;
DROP TABLE rentomati.user;