# Release Notes — Cara Core Ink Agenda v2.0.1

**Versão:** 2.0.1
**Data:** outubro de 2026
**Status:** Desktop Windows. Correções do QA da v2.0.0 (07/10/2026).

Somente Windows nesta tag. PWA em roadmap: [pwa.html](https://ink.caracore.com.br/pwa.html) — **não antes de 2028** (sem DMG/DEB nativos).

## Artefatos (Windows)

| Arquivo | Tipo | SHA256 |
| ------- | ---- | ------ |
| `AgendaInk-2.0.1-windows-setup.exe` | Instalador | `49bdd76a10ab97b7902e47b8c393c638ef90ea6b490874224a9734a802f90a6b` |
| `AgendaInk-2.0.1-windows.zip` | Portable | `3118eac8fafdfa5cc4d3e341969d0cd205d5a29caabbe069e12d7b956a994ff3` |
| `checksum.sha256` | Hashes oficiais | [download](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.1/checksum.sha256) |

Runtime embarcado: Java 25 (não requer JDK). Interface: JavaFX 21.0.11. Dados: `%LOCALAPPDATA%\CaraCore\AgendaInk\`. Quem usa a v2.0.0 mantém a mesma agenda.

## Instalação

1. Instalar: execute `AgendaInk-2.0.1-windows-setup.exe`.
2. Portable: extraia `AgendaInk-2.0.1-windows.zip` e abra `AgendaInk\AgendaInk.exe`.
3. Valide o SHA256 com `checksum.sha256` antes de executar.

## Corrigido

- **Importação sem duplicar:** importar o mesmo CSV duas vezes não muda saldo, lançamentos nem agendamentos. Horários em conflito viram aviso com a lista do que foi ignorado. A tela diz o que o CSV leva (agendamentos e lançamentos do Financeiro); clientes, orçamentos, cobranças e recebimentos ficam no `.inkbak`.
- **pt-BR em tudo:** R$ 350,00, 07/10/2026 e “outubro de 2026” na tela, no gráfico e no PDF (dados de locale incluídos no runtime).
- **Pacote limpo:** sem login de demonstração, seeds, scripts de desenvolvimento nem formulário de exemplo. Um teste barra esse conteúdo no build.
- **PDF do balanço:** data sem quebra de linha, sinais “−” e “·” visíveis (fonte Unicode embutida), mês em português.
- **Textos:** contraste do passo 2 do primeiro acesso, acentos do login, termos em pt-BR, sem “[[Configuração]]”; o aviso de primeiro acesso agora diz “Seus dados ficam só neste computador”; os textos dos passos 1 e 2 não são mais cortados.
- **Janela:** cabe em 1366×768 (área útil) e é redimensionável; diálogos no tema escuro.

## Adicionado (promessas da loja)

- **Sessão com horário, duração e valor:** horários com minutos (de 15 em 15 ou digitados), duração de 30 min a 8 h, valor por sessão. Continua bloqueando sessões sobrepostas.
- **Check “Pagou”** em cada sessão da lista do dia; o recebimento entra no Financeiro.
- **Dashboard → Resultados:** faturamento, ticket médio e saldo do mês; faturamento, média mensal e ticket médio do ano.
- **Orçamentos:** botões Novo orçamento e Editar.
- **Clientes:** lista com busca, novo cliente e edição.

## Backup

- **`.inkbak` com senha:** você escolhe pasta e nome; nada é sobrescrito (“(2)”, “(3)”…); criptografia AES-256-GCM com a senha do backup; o app mostra o caminho salvo. Backups da v2.0.0 continuam restaurando.
- **Automático documentado e com opção de desligar:** a cada hora e ao fechar, `backups\agenda_*.db.gz`, 30 cópias, sem senha, no mesmo computador. Desligue em Config → Backup do estúdio.

## Técnico

- Log em arquivo com rotação: `%LOCALAPPDATA%\CaraCore\AgendaInk\logs\agenda-*.log` (5 × 1 MB), com senhas, telefones e e-mails mascarados.
- Runtime sem `jdk.jdwp.agent`, `jdk.jshell` e `jdk.compiler`.
- “Lembrar senha” com segredo aleatório por instalação. Quem usava a opção na v2.0.0 digita a senha uma vez.
- Jar da aplicação ofuscado com ProGuard.

## Continua como na v2.0.0

ZIP e setup com runtime embutido; dados em `%LOCALAPPDATA%\CaraCore\AgendaInk\agenda.db`; sem usuário de fábrica; primeiro acesso com celular, perfil, senha 8+, frase 10+ e 8 códigos de emergência; senha com hash forte; “Esqueci minha senha” com código de 6 dígitos válido por 15 minutos; agenda sem sobreposição; Financeiro com gráfico anual e PDF mensal; backup CSV criptografado; 100% offline.

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download Windows](https://ink.caracore.com.br/download.html)
- [Primeiro acesso](https://ink.caracore.com.br/primeiro-acesso.html)
- [Manual](https://ink.caracore.com.br/manual.html)
- [Wiki](https://wiki.caracore.com.br/projeto-ink.html)
