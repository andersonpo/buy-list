-- Up
CREATE TABLE If NOT EXISTS listitems (
  id         VARCHAR (36) NOT NULL,
  list_id    VARCHAR (36) NOT NULL,
  product_id VARCHAR (36) NOT NULL,
  price      REAL NOT NULL DEFAULT 1,
  quantity   REAL NOT NULL DEFAULT 1,
  total      REAL NOT NULL DEFAULT 0,
  checked    BIT NOT NULL DEFAULT 0,
  notes      VARCHAR (200),
  CONSTRAINT pk_listitems PRIMARY KEY (id) ON CONFLICT FAIL,
  CONSTRAINT unique_list_id_product_id UNIQUE (list_id, product_id),
  FOREIGN KEY (list_id) REFERENCES lists(id)
);

-- LIST 1
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('9929c7ad-4b79-430f-b7a5-846c2e1e4cbc', '933be4b7-f1ce-474e-b63a-41b6f8e3e9c1', '73488010-0fa8-4a24-8a49-19d5d72de635', 5.90, 2, 11.8, 0, null);
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('6133223a-e4a6-472b-9162-53b256280f15', '933be4b7-f1ce-474e-b63a-41b6f8e3e9c1', '4974fa1b-60a8-488a-8e87-87e727303fed', 34.9, 0.3, 10.47, 1, '300 gramas');
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('b6745deb-50a5-4070-a119-1e3686527132', '933be4b7-f1ce-474e-b63a-41b6f8e3e9c1', '7fe83f30-ea6c-47c8-bb90-888219746b98', 3.8, 4, 15.2, 1, null);
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('0d98a75e-4e5b-4925-ac0e-4a23b8670e13', '933be4b7-f1ce-474e-b63a-41b6f8e3e9c1', '39e8b0b0-1137-450e-a748-a4c6d8ec6e8b', 6, 1, 6, 0, null);

-- LIST 2 ARCHIVED
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('4ba47667-a0e6-4731-9c81-7f72fc44d33b', '9274507e-7009-4758-bc9c-576f2cb37324', '2a3396ed-c2b1-4cd2-982b-06a9ed9f3e3b', 0.75, 4, 3, 1, null);
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('7610939a-ba3c-4919-b002-0f744282902c', '9274507e-7009-4758-bc9c-576f2cb37324', '73488010-0fa8-4a24-8a49-19d5d72de635', 3.8, 1, 3.8, 1, null);
INSERT INTO listitems (id, list_id, product_id, price, quantity, total, checked, notes) VALUES ('7d0dc44d-591c-432f-86f0-bf287302b8f8', '9274507e-7009-4758-bc9c-576f2cb37324', '1ae8d1dc-8e54-4797-8e13-51ea6a0710c8', 7.50, 1, 7.5, 1, null);

-- Down
DROP TABLE listitems;
