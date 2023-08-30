CREATE TABLE doctor (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255),
    health_unit_id BIGINT,
    FOREIGN KEY (health_unit_id) REFERENCES health_units(id)
);

CREATE TABLE health_units (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    opening_time TIME,
    closing_time TIME
);

CREATE TABLE scheduling (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    time TIME NOT NULL,
    day DATE NOT NULL,
    name_patient VARCHAR(255) NOT NULL,
    document VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    doctor_id BIGINT,
    FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);

CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    login VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);