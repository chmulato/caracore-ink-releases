# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Download RC7](https://img.shields.io/badge/Download-v2.0.0--RC7-blue?style=for-the-badge&logo=windows)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC7)
[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal público de distribuição, vitrine e documentação de delivery do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem com agenda de sessões, controle financeiro e painel de resultados.

Plataforma alvo: **Desktop Windows, macOS e Linux - Java 21 + JavaFX 21.0.11**. O aplicativo usa armazenamento local no computador do usuário e funciona offline por padrão.

Lançamento oficial: **26 de junho de 2026**.

> **Canal público de download:** [`v2.0.0-RC7`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC7) — artefato Windows publicado com runtime Java 21 embutido; macOS e Linux seguem em preparação.

---

## Produto

O Ink Agenda é desenvolvido para tatuadores e estúdios que precisam de uma ferramenta confiável para:

- organizar agendamentos em calendário visual, com cliente, data, horário e valor;
- consultar a lista do dia em ordem de atendimento;
- controlar entradas, saídas e saldo por período;
- acompanhar indicadores de desempenho, faturamento e médias;
- manter dados locais com backup e restauração.

O código-fonte e o desenvolvimento ficam no repositório **caracore-ink** (oficina). Este repositório, **caracore-ink-releases**, é o canal público de releases, vitrine da loja e documentação de delivery.

---

## Versão atual

| Campo | Valor |
| ----- | ----- |
| Versão | `2.0.0-RC7` |
| Publicação | 07/05/2026 |
| Status | Release Candidate em homologação; stable previsto para 26/06/2026 |
| Plataformas | Windows 10/11 64 bits (ZIP) publicado; macOS DMG e Linux DEB em preparação |
| Release | <https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC7> |
| Loja | <https://ink.caracore.com.br/> |

### Artefatos RC7

| Plataforma | Artefato | SHA256 |
| ---------- | -------- | ------ |
| Windows | `AgendaInk-2.0.0-RC7-windows.zip` | `eda86861c480f00da097d49c1d90dbcacfc65880b968d84dbfae0b6f6faac253` |
| macOS | `DMG macOS` | `— não publicado nesta RC` |
| Linux | `DEB Linux` | `— não publicado nesta RC` |

Os builds são distribuídos com runtime Java 21 embutido. O usuário final não precisa instalar JDK.

### Atualização operacional - 10/05/2026

- RC7 publicada na tag `v2.0.0-RC7` em 07/05/2026.
- Artefato público já publicado: `AgendaInk-2.0.0-RC7-windows.zip` com checksum SHA256 oficial.
- macOS DMG e Linux DEB seguem planejados para ciclo subsequente da mesma linha de homologação.
- Base técnica validada na Matriz com JavaFX `21.0.11`; o próximo refresh público absorverá esse hardening sem mudar a linha de versão vigente.
- Galeria de screenshots da loja atualizada com 10 capturas (telas de login, recuperação, clientes, hoje, calendário, agendamento, cadastro, projeção, config e config rodapé).
- Portal `ink.caracore.com.br` atualizado; linha de lançamento oficial mantida: 26/06/2026.
- Próximo ciclo: refresh público da vitrine com o hardening já validado na oficina.

### Comunicação externa (público)

- Canal vigente para download: `v2.0.0-RC7`.
- Artefato público vigente: `AgendaInk-2.0.0-RC7-windows.zip`.
- Status atual: homologação pública em andamento; lançamento oficial previsto para 26/06/2026.

### Histórico operacional (registro)

As entradas abaixo são mantidas para rastreabilidade de entrega e auditoria técnica.

- RC7 publicada em 07/05/2026 — Windows ZIP com checksum oficial.
- RC5 publicada em 06/05/2026 — ciclo intermediário de homologação.
- RC4 publicada com portal da loja e checksums documentados.
- RC3 marco anterior de homologação (28/04/2026).

---

## Funcionalidades implementadas (v2.0.0-RC7)

### Arquitetura e dados

Aplicação desktop em Java 21 e JavaFX 21.x, com persistência local em SQLite. O banco é criado no primeiro uso em `%LOCALAPPDATA%\CaraCore\AgendaInk\agenda.db` no Windows, com estratégia offline-first. A linha atualmente validada na oficina está em JavaFX `21.0.11`.

### Agenda e clientes

Calendário visual, lista do dia, cadastro de agendamentos, celular do cliente opcional, edição de registros e prevenção de sobreposição de horários.

### Financeiro e painel

Registro de receitas e despesas, saldo por período, histórico financeiro e painel com indicadores de desempenho do estúdio.

### Autenticação

Login padrão por celular e senha local. OIDC com Google é opcional e desativado por padrão, dependendo de configuração própria do estúdio.

### Backup e restauração

Exportação e importação de dados em arquivo compactado protegido por senha, preservando a soberania dos dados do tatuador. O portal também documenta a estratégia de blindagem de dados com backups locais e verificação de integridade.

### Distribuição

- Windows: APP_IMAGE portátil em ZIP, com `AgendaInk.exe`.
- macOS: imagem DMG.
- Linux: pacote DEB para distribuições compatíveis com Ubuntu/Debian amd64.
- Código-fonte ofuscado com ProGuard antes do empacotamento.

---

## Estrutura do repositório

| Caminho | Conteúdo |
| ------- | -------- |
| Raiz | `README.md`, `LICENSE` e arquivos de controle do repositório |
| `docs/` | Portal da loja em GitHub Pages: `index.html`, `download.html`, `tecnologia.html`, `manual.html`, `canal-feedback.html`, `wiki/` e `artifacts/` |
| `docs/assets/` | CSS, JS, imagens e componentes visuais do portal |
| Releases | Artefatos versionados publicados em <https://github.com/chmulato/caracore-ink-releases/releases> |

---

## Portal da loja (GitHub Pages)

O portal está publicado em <https://ink.caracore.com.br/> via GitHub Pages, usando a branch `master` e a pasta `/docs`.

A loja segue o padrão visual do ecossistema Cara Core: tema escuro, tipografia institucional, cores de destaque verde, ouro e azul, breadcrumbs, rodapé institucional, status evolutivo e canal de feedback.

Para ativar o GitHub Pages em um fork ou repositório novo: Settings -> Pages -> Deploy from a branch -> `master` -> `/docs`.

---

## Páginas principais

- Loja: <https://ink.caracore.com.br/>
- Download: <https://ink.caracore.com.br/download.html>
- Tecnologia: <https://ink.caracore.com.br/tecnologia.html>
- Manual: <https://ink.caracore.com.br/manual.html>
- Canal de feedback: <https://ink.caracore.com.br/canal-feedback.html>
- Wiki da aplicação: <https://ink.caracore.com.br/wiki/>

---

## Ecossistema Cara Core

| Papel | Repositório / Endereço |
| ----- | ---------------------- |
| Oficina (código-fonte) | `caracore-ink` |
| Loja (vitrine e releases) | `caracore-ink-releases` (este repositório) |
| Matriz (portfólio institucional) | <https://caracore.com.br/> |

---

## Branch

Este repositório utiliza exclusivamente a branch `master`. Não existe branch `main`.

---

## Licença

Licenciamento proprietário institucional da Cara Core Informática. Consulte [LICENSE](LICENSE).
