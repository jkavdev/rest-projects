drop database groups_manager;    
create database groups_manager;

use groups_manager;

create table endereco (
       id bigint not null auto_increment,
        bairro varchar(255),
        cep varchar(255),
        cidade varchar(255),
        complemento varchar(255),
        numero varchar(255),
        rua varchar(255),
        uf varchar(255),
        primary key (id)
    ) engine=MyISAM;
    
    create table evento (
       id bigint not null auto_increment,
        data time,
        descricao varchar(255),
        lotacao_maxima integer,
        motivo varchar(255),
        valor decimal(19,2),
        endereco_id bigint,
        grupo_id bigint,
        primary key (id)
    ) engine=MyISAM;
    
    create table grupo (
       id bigint not null auto_increment,
        igreja varchar(255),
        nome varchar(255),
        objetivo varchar(255),
        primary key (id)
    ) engine=MyISAM;
    
    create table grupo_integrante (
       grupo_id bigint not null,
        integrante_id bigint not null
    ) engine=MyISAM;
    
    create table integrante (
       id bigint not null auto_increment,
        cadastro_efetivado bit,
        celular varchar(255),
        cpf varchar(255),
        data_nascimento date,
        email varchar(255),
        membro_da_igreja bit,
        membro_de_outra_igreja bit,
        nome varchar(255),
        nome_da_outra_igreja varchar(255),
        senha varchar(255),
        sexo varchar(255),
        primary key (id)
    ) engine=MyISAM;
    
    create table noticia (
       id bigint not null auto_increment,
        corpo varchar(255),
        titulo varchar(255),
        grupo_id bigint,
        primary key (id)
    ) engine=MyISAM;
    
    create table topico_noticia (
       noticia_id bigint not null,
        topico varchar(255) not null
    ) engine=MyISAM;
    
    alter table evento 
       add constraint FKqd0alhw4xw95c617h4kgil7qs 
       foreign key (endereco_id) 
       references endereco (id);
    
    alter table evento 
       add constraint FKejsn618nl0f3de2ptjrnrh0aq 
       foreign key (grupo_id) 
       references grupo (id);
    
    alter table grupo_integrante 
       add constraint FKll5l17672k69q3nd3drcniyv7 
       foreign key (integrante_id) 
       references integrante (id);
    
    alter table grupo_integrante 
       add constraint FK9kr7iurbfdihqyxhm04cb1j3f 
       foreign key (grupo_id) 
       references grupo (id);
    
    alter table noticia 
       add constraint FK5x8upyj0imhvfs6i69ow6efdg 
       foreign key (grupo_id) 
       references grupo (id);
    
    alter table topico_noticia 
       add constraint FKea50ksdyobcykn4extm18m3hk 
       foreign key (noticia_id) 
       references noticia (id);
    
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