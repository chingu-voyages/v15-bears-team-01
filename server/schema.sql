
CREATE TABLE users (
  id PRIMARY SERIAL KEY,
  username VARCHAR(255) UNIQUE,
  email VARCHAR(255),
);