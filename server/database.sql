/* Database schema. */
CREATE DATABASE todos;

CREATE TABLE Lists (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    list_id INT NOT NULL,
    description VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (list_id) REFERENCES Lists(id)
);

/* Sample lists and items. */
INSERT INTO Lists (name) VALUES ('travel');

INSERT INTO Lists (name) VALUES ('hobbies');

INSERT INTO Lists (name) VALUES ('home');

INSERT INTO Lists (name) VALUES ('work');

INSERT INTO Lists (name) VALUES ('dog');

INSERT INTO Items (list_id, description)
SELECT id, 'Book a flight.'
FROM Lists
WHERE name = 'travel';

INSERT INTO Items (list_id, description)
SELECT id, 'Book hotel room.'
FROM Lists
WHERE name = 'travel';

INSERT INTO Items (list_id, description)
SELECT id, 'Register for conference.'
FROM Lists
WHERE name = 'travel';

INSERT INTO Items (list_id, description)
SELECT id, 'Brainstorm costume ideas.'
FROM Lists
WHERE name = 'hobbies';

INSERT INTO Items (list_id, description)
SELECT id, 'Go skating on a paved trail.'
FROM Lists
WHERE name = 'hobbies';

INSERT INTO Items (list_id, description)
SELECT id, 'Organize desk wiring.'
FROM Lists
WHERE name = 'home';

INSERT INTO Items (list_id, description)
SELECT id, 'Add accent lighting to office.'
FROM Lists
WHERE name = 'home';

INSERT INTO Items (list_id, description)
SELECT id, 'Buy new toys.'
FROM Lists
WHERE name = 'dog';

INSERT INTO Items (list_id, description)
SELECT id, 'Go to the park for long leash training.'
FROM Lists
WHERE name = 'dog';
