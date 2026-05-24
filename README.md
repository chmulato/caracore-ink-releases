# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Download RC8](https://img.shields.io/badge/Download-v2.0.0--RC8-blue?style=for-the-badge&logo=windows)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC8)
[![LanÃ§amento oficial](https://img.shields.io/badge/LanÃ§amento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal pÃºblico de distribuiÃ§Ã£o, vitrine e documentaÃ§Ã£o de delivery do **Cara Core Ink Agenda**, sistema de gestÃ£o para estÃºdios de tatuagem com agenda de sessÃµes, controle financeiro e painel de resultados.

Plataforma alvo: **Desktop Windows, macOS e Linux - Java 21 + JavaFX 21.0.11**. O aplicativo usa armazenamento local no computador do usuÃ¡rio e funciona offline por padrÃ£o.

LanÃ§amento oficial: **26 de junho de 2026**.

> **Canal pÃºblico de download:** [`v2.0.0-RC8`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC8) â€” distribuiÃ§Ãµes publicadas para Windows (ZIP), macOS (DMG) e Linux (DEB), com runtime Java 21 embutido.

---

## Produto

O Ink Agenda Ã© desenvolvido para tatuadores e estÃºdios que precisam de uma ferramenta confiÃ¡vel para:

- organizar agendamentos em calendÃ¡rio visual, com cliente, data, horÃ¡rio e valor;
- consultar a lista do dia em ordem de atendimento;
- controlar entradas, saÃ­das e saldo por perÃ­odo;
- acompanhar indicadores de desempenho, faturamento e mÃ©dias;
- manter dados locais com backup e restauraÃ§Ã£o.

O cÃ³digo-fonte e o desenvolvimento ficam no repositÃ³rio **caracore-ink** (oficina). Este repositÃ³rio, **caracore-ink-releases**, Ã© o canal pÃºblico de releases, vitrine da loja e documentaÃ§Ã£o de delivery.

---

## VersÃ£o atual

| Campo | Valor |
| ----- | ----- |
| VersÃ£o | `2.0.0-RC8` |
| PublicaÃ§Ã£o | 15/05/2026 (refresh RC8) |
| Status | Release Candidate em homologaÃ§Ã£o; stable previsto para 26/06/2026 |
| Plataformas | Windows 10/11 64 bits (ZIP), macOS DMG e Linux DEB publicados |
| Release | <https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC8> |
| Loja | <https://ink.caracore.com.br/> |

### Artefatos RC8

| Plataforma | Artefato | SHA256 |
| ---------- | -------- | ------ |
| Windows ZIP | `AgendaInk-2.0.0-RC8-windows.zip` | `consulte checksum.sha256 da release` |
| Windows executÃ¡vel | `AgendaInk.exe` (dentro do ZIP) | `consulte checksum.sha256 da release` |
| macOS | `AgendaInk-2.0.0-RC8.dmg` | `consulte checksum-macos-2.0.0-RC8.txt da release` |
| Linux | `agenda-ink-2.0.0-RC8-linux.deb` | `consulte checksum-linux-2.0.0-RC8.txt da release` |

Os builds sÃ£o distribuÃ­dos com runtime Java 21 embutido. O usuÃ¡rio final nÃ£o precisa instalar JDK.

### AtualizaÃ§Ã£o operacional - 15/05/2026

- **RC8 launcher fix publicada** em 15/05/2026.
  - Corrigido: jpackage launcher incompatibility com JavaFX Application subclass (EXIT=1).
  - Implementado: Dedicated non-JavaFX launcher (AgendaInkLauncher) como entry point.
  - Resultado: APP_IMAGE (ZIP) executa saudavelmente.
  - Validado: Smoke test RUNNING_AFTER_20S; processo UI inicia e persiste.
  - Artefatos: refresh de distribuiÃ§Ã£o RC8 publicado (Windows ZIP, macOS DMG e Linux DEB); checksums oficiais centralizados em `checksum.sha256` da release.

### AtualizaÃ§Ã£o operacional - 10/05/2026

- RC8 publicada na tag `v2.0.0-RC8` em 15/05/2026.
- Artefato pÃºblico jÃ¡ publicado: `AgendaInk-2.0.0-RC8-windows.zip` com checksum SHA256 oficial.
- macOS DMG e Linux DEB publicados na linha RC8.
- Base tÃ©cnica validada na Matriz com JavaFX `21.0.11`; o prÃ³ximo refresh pÃºblico absorverÃ¡ esse hardening sem mudar a linha de versÃ£o vigente.
- Galeria de screenshots da loja atualizada com 10 capturas (telas de login, recuperaÃ§Ã£o, clientes, hoje, calendÃ¡rio, agendamento, cadastro, projeÃ§Ã£o, config e config rodapÃ©).
- Portal `ink.caracore.com.br` atualizado; linha de lanÃ§amento oficial mantida: 26/06/2026.
- PrÃ³ximo ciclo: refresh pÃºblico da vitrine com o hardening jÃ¡ validado na oficina.

### ComunicaÃ§Ã£o externa (pÃºblico)

- Canal vigente para download: `v2.0.0-RC8`.
- Artefatos pÃºblicos vigentes:
  - `AgendaInk-2.0.0-RC8-windows.zip` â€” distribuiÃ§Ã£o portÃ¡vel (descompacte e execute; ideal para USB, rede local, backup).
  - `AgendaInk.exe` (dentro do ZIP) â€” executÃ¡vel desktop para iniciar o app em Windows.
- Status atual: homologaÃ§Ã£o pÃºblica em andamento; artefatos publicados e validados como saudÃ¡veis (launcher fix 15/05/2026); lanÃ§amento oficial previsto para 26/06/2026.

### HistÃ³rico operacional (registro)

As entradas abaixo sÃ£o mantidas para rastreabilidade de entrega e auditoria tÃ©cnica.

- RC8 publicada em 15/05/2026 â€” Windows ZIP com checksum oficial.
- RC5 publicada em 06/05/2026 â€” ciclo intermediÃ¡rio de homologaÃ§Ã£o.
- RC4 publicada com portal da loja e checksums documentados.
- RC3 marco anterior de homologaÃ§Ã£o (28/04/2026).

---

## Funcionalidades implementadas (v2.0.0-RC8)

### Arquitetura e dados

AplicaÃ§Ã£o desktop em Java 21 e JavaFX 21.x, com persistÃªncia local em SQLite. O banco Ã© criado no primeiro uso em `%LOCALAPPDATA%\CaraCore\AgendaInk\agenda.db` no Windows, com estratÃ©gia offline-first. A linha atualmente validada na oficina estÃ¡ em JavaFX `21.0.11`.

### Agenda e clientes

CalendÃ¡rio visual, lista do dia, cadastro de agendamentos, celular do cliente opcional, ediÃ§Ã£o de registros e prevenÃ§Ã£o de sobreposiÃ§Ã£o de horÃ¡rios.

### Financeiro e painel

Registro de receitas e despesas, saldo por perÃ­odo, histÃ³rico financeiro e painel com indicadores de desempenho do estÃºdio.

### AutenticaÃ§Ã£o

Login padrão por celular e senha local. Fluxo de acesso focado na versão desktop atual, com operação offline-first.

### Backup e restauraÃ§Ã£o

ExportaÃ§Ã£o e importaÃ§Ã£o de dados em arquivo compactado protegido por senha, preservando a soberania dos dados do tatuador. O portal tambÃ©m documenta a estratÃ©gia de blindagem de dados com backups locais e verificaÃ§Ã£o de integridade.

### DistribuiÃ§Ã£o

- Windows: APP_IMAGE portÃ¡til em ZIP, com `AgendaInk.exe`.
- macOS: imagem DMG.
- Linux: pacote DEB para distribuiÃ§Ãµes compatÃ­veis com Ubuntu/Debian amd64.
- CÃ³digo-fonte ofuscado com ProGuard antes do empacotamento.

---

## Estrutura do repositÃ³rio

| Caminho | ConteÃºdo |
| ------- | -------- |
| Raiz | `README.md`, `LICENSE` e arquivos de controle do repositÃ³rio |
| `docs/` | Portal da loja em GitHub Pages: `index.html`, `download.html`, `tecnologia.html`, `manual.html`, `canal-feedback.html`, `wiki/` e `artifacts/` |
| `docs/assets/` | CSS, JS, imagens e componentes visuais do portal |
| Releases | Artefatos versionados publicados em <https://github.com/chmulato/caracore-ink-releases/releases> |

---

## Portal da loja (GitHub Pages)

O portal estÃ¡ publicado em <https://ink.caracore.com.br/> via GitHub Pages, usando a branch `master` e a pasta `/docs`.

A loja segue o padrÃ£o visual do ecossistema Cara Core: tema escuro, tipografia institucional, cores de destaque verde, ouro e azul, breadcrumbs, rodapÃ© institucional, status evolutivo e canal de feedback.

Para ativar o GitHub Pages em um fork ou repositÃ³rio novo: Settings -> Pages -> Deploy from a branch -> `master` -> `/docs`.

---

## PÃ¡ginas principais

- Loja: <https://ink.caracore.com.br/>
- Download: <https://ink.caracore.com.br/download.html>
- Tecnologia: <https://ink.caracore.com.br/tecnologia.html>
- Manual: <https://ink.caracore.com.br/manual.html>
- Canal de feedback: <https://ink.caracore.com.br/canal-feedback.html>
- Wiki da aplicaÃ§Ã£o: <https://ink.caracore.com.br/wiki/>

---

## Ecossistema Cara Core

| Papel | RepositÃ³rio / EndereÃ§o |
| ----- | ---------------------- |
| Oficina (cÃ³digo-fonte) | `caracore-ink` |
| Loja (vitrine e releases) | `caracore-ink-releases` (este repositÃ³rio) |
| Matriz (portfÃ³lio institucional) | <https://caracore.com.br/> |

---

## Branch

Este repositÃ³rio utiliza exclusivamente a branch `master`. NÃ£o existe branch `main`.

---

## LicenÃ§a

Licenciamento proprietÃ¡rio institucional da Cara Core InformÃ¡tica. Consulte [LICENSE](LICENSE).
