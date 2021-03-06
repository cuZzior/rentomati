-- Stuff schema
-- !Ups
create schema if not exists rentomati;
CREATE TABLE rentomati.item
(
    id   INT UNSIGNED PRIMARY KEY NOT NULL,
    name VARCHAR(256) NOT NULL
);

CREATE TABLE rentomati.user
(
    id   INT UNSIGNED PRIMARY KEY NOT NULL,
    name VARCHAR(256) NOT NULL
);

CREATE TABLE rentomati.reservation
(
    id         INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id    INT UNSIGNED NOT NULL,
    item_id    INT UNSIGNED NOT NULL,
    start_date TEXT NOT NULL,
    end_date   TEXT NOT NULL,
    CONSTRAINT fk_reservation_user FOREIGN KEY (user_id)
        REFERENCES rentomati.user (id)
        ON DELETE CASCADE,
    CONSTRAINT fk_reservation_item FOREIGN KEY (item_id)
        REFERENCES rentomati.item (id)
        ON DELETE CASCADE
);

CREATE TABLE rentomati.reservation_history
(
    id         INT UNSIGNED PRIMARY KEY NOT NULL,
    user_id    INT UNSIGNED NOT NULL,
    item_id    INT UNSIGNED NOT NULL,
    start_date TEXT NOT NULL,
    end_date   TEXT NOT NULL
);

-- !Downs
DROP TABLE rentomati.reservation;
DROP TABLE rentomati.item;
DROP TABLE rentomati.user;
DROP TABLE rentomati.reservation_history;
