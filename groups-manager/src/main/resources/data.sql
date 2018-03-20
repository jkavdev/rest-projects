INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da criança',  'Pastoral', 'Grupo de crianças');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da saúde',  'Pastoral', 'Grupo de saúde');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da educação',  'Pastoral', 'Grupo de educação');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da juventude',  'Pastoral', 'Grupo de juventude');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da comunicação',  'Pastoral', 'Grupo de comunicação');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da sobriedade',  'Pastoral', 'Grupo de sobriedade');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral do menor',  'Pastoral', 'Grupo de menor');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da liturgia',  'Pastoral', 'Grupo de liturgia');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da catequese',  'Pastoral', 'Grupo de catequese');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da familiar',  'Pastoral', 'Grupo familiar');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Pastoral da carcerária',  'Pastoral', 'Grupo de carcerária');

INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Encontro de Casais com Cristo',  'Católica', 'Grupo de Casais');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Apostolado da Oração',  'Católica', 'Grupo de Oração');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Renovação Carismática Católica',  'Católica', 'Grupo de Renovação');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Mãe Rainha',  'Católica', 'Grupo de Mães');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Terço dos Homens',  'Católica', 'Grupo de Homens');

INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Comunidade Canção Nova',  'Presbiteriana', 'Grupo de Canção');
INSERT INTO grupo(nome, igreja, objetivo)  VALUES('Oração Paroquiais',  'Presbiteriana', 'Grupo de Paroquiais');    

insert into integrante(nome, celular, email, senha, sexo, data_nascimento, cpf, membro_da_igreja, membro_de_outra_igreja, nome_da_outra_igreja, cadastro_efetivado) values
	('Jhonatan', '12345678', 'jhonatan@gmail.com', '123456', 'MASCULINO', now(), '123456789', 1, null, null, 1),
	('Caic', '12345678', 'caic@gmail.com', '123456', 'MASCULINO', now(), '123456789', 1, null, null, 1),
	('Lucas', '12345678', 'lucas@gmail.com', '123456', 'MASCULINO', now(), '123456789', 1, null, null, 1),
	('Marcia', '12345678', 'marcia@gmail.com', '123456', 'FEMININO', now(), '123456789', 0, null, null, 0),
	('Gabriela', '12345678', 'gabriela@gmail.com', '123456', 'FEMININO', now(), '123456789', 0, null, null, 0);
	
insert into grupo_integrante values
	(1, 1),
	(1, 2),
	(1, 3),
	(1, 4),
	(2, 1),
	(2, 2),
	(3, 1),
	(3, 3),
	(3, 4);