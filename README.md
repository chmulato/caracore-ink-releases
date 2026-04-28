# Cara Core Ink Agenda - Loja e Releases

Canal público de distribuição, vitrine e documentação de delivery do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem com agenda de sessões, controle financeiro e painel de resultados.

Plataforma alvo: **Desktop Windows, macOS e Linux - Java 21 + JavaFX 21**. O aplicativo usa armazenamento local no computador do usuário e funciona offline por padrão.

Lançamento oficial: **26 de junho de 2026**.

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
|-------|-------|
| Versão | `2.0.0-RC3` |
| Publicação | 28/04/2026 |
| Status | Release Candidate em homologação; stable previsto para 26/06/2026 |
| Plataformas | Windows 10/11 64 bits (ZIP), macOS 13+ (DMG) e Ubuntu/Debian amd64 (DEB) |
| Release | <https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0-RC3> |
| Loja | <https://ink.caracore.com.br/> |

### Artefatos RC3

| Plataforma | Artefato | SHA256 |
|------------|----------|--------|
| Windows | `AgendaInk-2.0.0-RC3-windows.zip` | `c25b6ee8e5853a2a31aafba387aede31fb51bd0b6a9368b7343c7cb9ea2039a9` |
| macOS | `AgendaInk-2.0.0-RC3.dmg` | `57f5bc7257204b352389f51db231707408706f5d01102a6cafc86b2de112ca45` |
| Linux | `agenda-ink_2.0.0_amd64.deb` | `8574c57112d652e1e944b1bdca6145b772dfb63111a8075ede4897e558aa44d7` |

Os builds são distribuídos com runtime Java 21 embutido. O usuário final não precisa instalar JDK.

### Atualização operacional - 28/04/2026

- RC3 publicado para Windows, macOS e Linux na tag `v2.0.0-RC3`.
- Portal da loja atualizado para comunicar o RC3 como versão de homologação.
- Página de download aponta para os artefatos nativos por plataforma.
- Checksums SHA256 vigentes estão documentados em `docs/download.html`.
- Linha de lançamento mantém a data oficial de 26/06/2026.

---

## Funcionalidades implementadas (v2.0.0-RC3)

### Arquitetura e dados

Aplicação desktop em Java 21 e JavaFX 21, com persistência local em SQLite. O banco é criado no primeiro uso em `%LOCALAPPDATA%\CaraCore\AgendaInk\agenda.db` no Windows, com estratégia offline-first.

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
|---------|----------|
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
|-------|------------------------|
| Oficina (código-fonte) | `caracore-ink` |
| Loja (vitrine e releases) | `caracore-ink-releases` (este repositório) |
| Matriz (portfólio institucional) | <https://caracore.com.br/> |

---

## Branch

Este repositório utiliza exclusivamente a branch `master`. Não existe branch `main`.

---

## Licença

Licenciamento proprietário institucional da Cara Core Informática. Consulte [LICENSE](LICENSE).

