CREATE TABLE IF NOT EXISTS  patients (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    gender VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    patient_address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    postcode VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
);
INSERT INTO
patient (first_name, last_name, gender, email, phone, patient_address, city, postcode, country)
VALUES('abul', 'kibria', "m", 'ahkibr@yahoo.com', '01711111111', 'dhaka', 'dhaka', '1212', 'bangladesh')
