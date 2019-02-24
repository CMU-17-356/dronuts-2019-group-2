DROP DATABASE IF EXISTS api;
CREATE DATABASE api;

\c api;

CREATE TABLE customer(
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR
);

INSERT INTO customer(name, email)
  VALUES ('Bob', 'bob@example.com');