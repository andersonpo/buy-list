-- Up
CREATE TABLE If NOT EXISTS products (
    id       VARCHAR (36)  PRIMARY KEY ON CONFLICT FAIL,
    name     VARCHAR (200) CONSTRAINT product_name_unique UNIQUE ON CONFLICT FAIL NOT NULL,
    category VARCHAR (50) 
);

INSERT INTO products (id, name, category) VALUES ('7fe83f30-ea6c-47c8-bb90-888219746b98', 'Leite', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('39e8b0b0-1137-450e-a748-a4c6d8ec6e8b', 'Leite Condensado', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('e6ca0eb8-eb86-453b-980a-f2139eeb95a5', 'Creme de Leite', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('9c450b8b-8aea-4f1c-8313-b2e589317635', 'Batata', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('c9eafac7-f336-4f27-a09c-86023205a65e', 'Couve-Flor', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('4974fa1b-60a8-488a-8e87-87e727303fed', 'Mussarela', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('7f71cb77-a789-4276-936f-068372f87d0b', 'Cheddar', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('d8e8d77c-0722-4d6d-b52f-cfdaf575d26b', 'Presunto', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('01af85e8-fc7e-429e-b57e-727adbb97287', 'Peito de Peru', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('1e08cc5a-3d58-4f18-b7a4-135d7e763ae1', 'Calabresa', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('17d0c08a-297d-420d-ac7d-1781390b03b7', 'Bacon', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('63cd9a03-2327-4ad2-bd00-37908292406f', 'Lombo Suino', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('73488010-0fa8-4a24-8a49-19d5d72de635', 'Salgadinhos', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('33ae6793-1567-4b5f-bb06-7112016f697f', 'Chocolate Bis', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('d02ed1ba-2df4-4245-89ea-ba226e77a5aa', 'Chocolate M&M', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('e182a281-f849-4d78-a913-a8d2dd12ee7d', 'Barra de Chocolate', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('91924d56-0960-4efa-a849-0fdcf5844211', 'Refrigerante', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('e4e5aa59-3075-4e71-a66f-834b7d2f5598', 'Refrigerante Duplo', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('4d923ff6-6bbc-4b37-8986-87e563073af4', 'Suco Tang', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('7f178994-44e3-4133-b509-512d0aac91f4', 'Suco Garrafa', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('d61e119c-6688-4664-9fe1-f8166111d119', 'Bolacha Waffler', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('55085d83-364e-4f89-8d1f-ccfa870b10ed', 'Bolacha Recheada', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('fbab6553-e8e1-450f-a5e5-e88a488e578e', 'Pão de Forma', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('2a3396ed-c2b1-4cd2-982b-06a9ed9f3e3b', 'Pão Francês / Baguete', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('c5074e96-f112-4ca9-9d1a-37d36309d72b', 'Manteiga', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('55036b8c-ec44-4cca-b265-480609e322d0', 'Danone', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('1ae8d1dc-8e54-4797-8e13-51ea6a0710c8', 'Achocolatado Nescau', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('fab5191e-9cd6-4956-a89a-684f2f778a94', 'Açucar', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('895573b1-23ee-4d20-9709-8ea7caa64f36', 'Sal', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('19969737-8e1a-4bb1-9e38-329bf5850553', 'Trigo', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('f2bc2c44-7352-4028-a175-7f91dc17caf7', 'Fermento em pó', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('93ed9913-739c-4ed1-a88c-ca8765cd647e', 'Fermento pão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('af049d7a-ef46-48a6-b9fa-3e74853c6be7', 'Requeijão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('74172973-34da-46ae-8acc-a6c4a1fe60b0', 'Pão de Queijo', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('77c7f882-8892-460f-9cbd-22aa4403bcbe', 'Pizza', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('edff74a4-982c-4f2a-96cc-fb8bad9388c4', 'Sorvete', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('4d6c281c-0ee6-444e-9e4d-5a08018c9786', 'Torta', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('a9d9b6d9-c75e-4ecc-9701-fe55441bb02d', 'Lasanha', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('356e000b-9f30-400d-baed-0b51c48c19d9', 'Nhoque', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('fd90f58a-cfba-431b-ba6d-45bb969a1418', 'Almondegas', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('58421821-9c0d-4c82-be0f-21c872e4df26', 'Maçã', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('4e12e237-fb76-4d5b-8c93-34aab75472f9', 'Perâ', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('69b2c52d-bc42-4c2a-a11f-92499aa6d095', 'Banana', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('44ca11a7-7a07-4a11-b47d-d3ce5ae5073e', 'Melancia', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('ac75b30f-ed45-40c8-b944-2b234b6733cb', 'Melão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('65a3e7ba-13da-4e00-81cf-59704517bc9e', 'Mamão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('0018ecab-0214-4bd6-a3d2-8fd8759a3c3c', 'Kiwi', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('818a6bbf-9ae8-4995-bcd6-14b250cdafc8', 'Limão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('e1b0541c-b216-4cf1-844c-a46d85d9bd86', 'Ovos', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('4a60a691-07c1-41a9-bdf4-c63a7e3c8bf8', 'Sucrilhos', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('c9ddcca3-9ff8-4b04-a107-95e24371bae8', 'Café em pó', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('c78b9193-32b2-4297-bc4c-1a0c745873be', 'Café em capsulas', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('0c38dc6a-30ef-4121-8589-ee65a1bb052d', 'Macarrão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('5d432206-966d-4dbf-b7b5-4c5175574959', 'Arroz', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('3238df9b-7579-4dad-b4fb-1d397316c1c7', 'Feijão', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('95b46127-ca87-450c-924c-9a9c5f114756', 'Oléo', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('5f5384fa-63a9-487a-99f6-3e55f7311a98', 'Mostarda', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('75343077-4b82-490f-806f-8bd58d4f2a33', 'Ketchup', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('e8d3557f-4c68-46f9-b674-013f1e9dc5a9', 'Molho de tomate', 'Alimentação');
INSERT INTO products (id, name, category) VALUES ('ec567fc2-4d5e-4398-a708-c2c1a7f593d8', 'Macarrão instantâneo (miojo)', 'Alimentação');

INSERT INTO products (id, name, category) VALUES ('8a8c1bc7-178e-4579-9763-6c56d6b8af56', 'Frango inteiro', 'Carne');
INSERT INTO products (id, name, category) VALUES ('600ecf72-08fc-46ce-8549-e38308fc4f48', 'Frango picado', 'Carne');
INSERT INTO products (id, name, category) VALUES ('7e717c2e-4b8c-46ba-b561-c7d189004e26', 'Frango peito', 'Carne');
INSERT INTO products (id, name, category) VALUES ('6c23203e-17c3-442e-87bd-d291fb78859c', 'Carne Moída (acem)', 'Carne');
INSERT INTO products (id, name, category) VALUES ('dada9fde-e756-4fa2-b6b5-c7a6194bf563', 'Carne picada', 'Carne');
INSERT INTO products (id, name, category) VALUES ('252abf98-f806-4e59-b3a3-30a097006e79', 'Carne bifes', 'Carne');
INSERT INTO products (id, name, category) VALUES ('7f56a5c3-ec6b-49d3-88c5-7f86663b63a6', 'Costela Peça', 'Carne');
INSERT INTO products (id, name, category) VALUES ('e9db8074-80cb-43d9-a550-03bb5e1b2899', 'Cupim Peça', 'Carne');
INSERT INTO products (id, name, category) VALUES ('c739b804-d61b-4abc-baf9-8209503bb05e', 'Fraldinha Peça', 'Carne');
INSERT INTO products (id, name, category) VALUES ('5a9bc26d-3e7b-4669-b9ae-aebdff164292', 'Hambuguer', 'Carne');

INSERT INTO products (id, name, category) VALUES ('a49b3df6-fc10-4e2f-aa01-964f84c84154', 'Ração para gato', 'Animal');
INSERT INTO products (id, name, category) VALUES ('c34ad514-36d4-4c49-afa7-6269d58d4aca', 'Ração para cachorro', 'Animal');
INSERT INTO products (id, name, category) VALUES ('8e7b944b-b409-40ab-9075-21baa5a7cdf6', 'Ração para coelho', 'Animal');

INSERT INTO products (id, name, category) VALUES ('1b373861-3e5e-4ae6-8db7-653482422866', 'Detergente', 'Limpeza');
INSERT INTO products (id, name, category) VALUES ('184b963b-c6a5-48e0-ac16-3e43ed532d78', 'Sabão em pó', 'Limpeza');
INSERT INTO products (id, name, category) VALUES ('0b7dabd4-2dc5-42c5-baf9-0ecf6b977e28', 'Amaciante', 'Limpeza');
INSERT INTO products (id, name, category) VALUES ('f4900780-c392-4013-b507-ef4d7ea41152', 'Candida', 'Limpeza');
INSERT INTO products (id, name, category) VALUES ('26794fa0-9da5-4580-ade2-c7382c0cae6d', 'Esponja de Louça', 'Limpeza');
INSERT INTO products (id, name, category) VALUES ('ec220cea-eb32-4e2d-aced-c57bae6c3f11', 'Bombril', 'Limpeza');

INSERT INTO products (id, name, category) VALUES ('925b50a9-58db-4651-81e9-83158bf3ab51', 'Papel Higiênico', 'Casa');
INSERT INTO products (id, name, category) VALUES ('0a4652a1-b992-44ec-8e8a-4f6c9c106a16', 'Pasta de Dente', 'Casa');
INSERT INTO products (id, name, category) VALUES ('e7b0617e-8ea9-4721-a7e5-ac57ca593264', 'Sabonete', 'Casa');
INSERT INTO products (id, name, category) VALUES ('85cd0ac8-8e7f-4ae3-832d-cf5b1cf780e7', 'Escova de Dentes', 'Casa');
INSERT INTO products (id, name, category) VALUES ('3dd144c1-0822-4d25-a956-03a6076c4af1', 'Resistência Chuveiro', 'Casa');
INSERT INTO products (id, name, category) VALUES ('6324d321-7b7d-45df-8e10-9588e7178d74', 'Condicionador', 'Casa');
INSERT INTO products (id, name, category) VALUES ('ed414bbf-4714-412c-b4fc-01c981524f51', 'Shampoo', 'Casa');
INSERT INTO products (id, name, category) VALUES ('52af247b-f02b-4a5e-bf9b-2256f259d5fc', 'Lençol', 'Casa');
INSERT INTO products (id, name, category) VALUES ('29e676a3-1d07-4a88-b99e-56224d2beac6', 'Travesseiro', 'Casa');
INSERT INTO products (id, name, category) VALUES ('489c2bed-dd64-42ec-85da-9fd66f256a09', 'Coberta', 'Casa');
INSERT INTO products (id, name, category) VALUES ('aa1cc3a8-901f-4aa0-b5ad-73025c9383ff', 'Mantinha (coberta)', 'Casa');
INSERT INTO products (id, name, category) VALUES ('cc065964-e4e7-44f6-b8ce-216e09b5ce9d', 'Endredon', 'Casa');
INSERT INTO products (id, name, category) VALUES ('0fd97e50-b9b4-4770-8650-af7f7dcf13a5', 'Jogo de cama', 'Casa');
INSERT INTO products (id, name, category) VALUES ('499c1e67-1656-4ee0-abd5-952ecd3f7bc0', 'Guardanapo papel', 'Casa');
INSERT INTO products (id, name, category) VALUES ('425f0a39-ae26-4e4a-8888-2a9a1f84254f', 'Papel aluminio', 'Casa');
INSERT INTO products (id, name, category) VALUES ('30ddfdc1-bced-4764-a410-c0c31b3880e0', 'Jogo de copos', 'Casa');
INSERT INTO products (id, name, category) VALUES ('ff853ccd-4bd2-47b2-9ad8-3ba502570200', 'Garrafa térmica', 'Casa');
INSERT INTO products (id, name, category) VALUES ('5571afa5-29d4-4f20-88e2-ddb93387e95b', 'Pote (tupperware)', 'Casa');
INSERT INTO products (id, name, category) VALUES ('c6b4148b-cb61-4b46-9e5c-027b7e04be82', 'Toalha', 'Casa');

-- Down
DROP TABLE products;