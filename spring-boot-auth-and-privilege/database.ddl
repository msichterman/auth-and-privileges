CREATE TABLE ROLE (
    ID      int NOT NULL,
    TYPE    nvarchar(20),
    ACCESS  int NOT NULL,
    PRIMARY KEY (ID)
)

CREATE TABLE USER (
    ID              int NOT NULL,
    FIRST_NAME      nvarchar(20),
    LAST_NAME       nvarchar(20),
    DATE_OF_BIRTH   datetime,
    SALARY          int NOT NULL,
    ROLE_ID         int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (ROLE_ID) REFERENCES ROLE(ID) ON DELETE CASCADE
)
