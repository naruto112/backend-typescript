# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuaário deve poder resetar sua senha;

**RFN**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O Envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expierar em 2h;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RNF**

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a noa senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve pode visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamanete;
- Os agendamentos devem estar disponiveis entre 8h ás 18h (Primeiro ás 8h, último as 17h);
- O usuário não pode agendar em um horário ja ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

# Tecnologias usadas 🥊

- NodeJS(express) --template TypeScript
- Postgres
- TypeORM
- Redis
- MongoDB
- AWS
- Jest