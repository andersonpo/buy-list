-- Up
CREATE TABLE If NOT EXISTS lists (
    id       VARCHAR (36)  PRIMARY KEY ON CONFLICT FAIL,
    name     VARCHAR (200) CONSTRAINT list_name_unique UNIQUE ON CONFLICT FAIL NOT NULL,
    date     VARCHAR (19)  NOT NULL,
    archived BIT NOT NULL DEFAULT 0,
    notes    VARCHAR (200),
    CONSTRAINT list_name_unique UNIQUE (name) ON CONFLICT FAIL
);

INSERT INTO lists (id, name, date, archived, notes) VALUES ('933be4b7-f1ce-474e-b63a-41b6f8e3e9c1', 'Exemplo Mercado', '2021-10-03', 0, 'Exemplo de lista de mercado');
INSERT INTO lists (id, name, date, archived, notes) VALUES ('9274507e-7009-4758-bc9c-576f2cb37324', 'Exemplo Mercado Finalizada', '2021-10-03', 1, 'Exemplo de lista de mercado arquivada');

-- Down
DROP TABLE lists;
