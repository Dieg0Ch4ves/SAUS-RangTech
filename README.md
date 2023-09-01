# SAUS-RangTech

## Sistema de Agendamento em Unidades de Saúde

Este repositório contém um sistema de agendamento em unidades de saúde, desenvolvido como parte de um projeto que abrange tanto o backend utilizando Spring Boot e Hibernate, quanto o frontend criado com Angular.

## Cenário

O objetivo deste projeto é fornecer um sistema de agendamento de consultas para unidades de saúde. A aplicação permite que os pacientes agendem consultas com médicos disponíveis em horários convenientes.

## Características

### Back-end:

O backend da aplicação é construído usando o framework Spring Boot, com suporte para persistência de dados usando Hibernate. Foram definidas entidades para médicos, agendamentos e unidades de saúde. Uma API RESTful foi implementada para permitir o agendamento de consultas, lidando com validações e prevenindo conflitos de horários.

### Front-end:

O frontend é desenvolvido usando o framework Angular. Ele permite que os pacientes escolham uma unidade de saúde, selecionem um médico e agendem uma consulta em um horário disponível. Um calendário visual ajuda a evitar conflitos de agendamento, exibindo os horários disponíveis.

### Segurança:

Uma camada de segurança e autenticação, com dois tipos de usuários: administradores e usuários comuns. Administradores têm acesso para cadastrar unidades de saúde, médicos e gerenciar agendamentos, enquanto os usuários comuns só podem agendar horários.

## Como Executar

**Pré-requisitos:**

- Certifique-se de ter o Java JDK e o Node.js instalados em sua máquina.
- Você deve ter um banco de dados configurado, como o MySQL, para armazenar os dados da aplicação.

**Configuração do Back-end:**

1. Clone este repositório para o seu computador.
2. Abra a pasta backend usando uma IDE de sua preferência (por exemplo, IntelliJ IDEA, Eclipse).
3. Configure as propriedades do banco de dados no arquivo `application.properties` dentro da pasta `src/main/resources`.
4. Execute a aplicação Spring Boot.

**Configuração do Front-end:**

1. Abra a pasta frontend em um terminal.
2. Execute o comando `npm install` para instalar as dependências.
3. Execute o comando `ng serve` para iniciar o servidor de desenvolvimento do Angular.

**Acesso à Aplicação:**

Acesse a aplicação em seu navegador através da URL [http://localhost:4200](http://localhost:4200).

## Observações

- Certifique-se de ajustar as configurações de banco de dados e outros detalhes específicos do ambiente antes de executar a aplicação.
- A implementação da segurança e autenticação é opcional e pode ser adicionada conforme suas necessidades.
- Este é um projeto de exemplo e pode ser expandido com mais recursos e funcionalidades.
- Este projeto oferece uma solução de agendamento eficiente para unidades de saúde, com um backend robusto e um frontend amigável. Sinta-se à vontade para expandir e personalizar de acordo com suas necessidades. Se tiver alguma dúvida ou problema, não hesite em entrar em contato.
