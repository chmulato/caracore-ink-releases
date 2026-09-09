# Release Notes — Cara Core Ink Agenda v2.0.0

**Versão:** 2.0.0 (estável)
**Data de lançamento:** 26 de junho de 2026
**Status:** Windows publicado com binários reais; macOS/Linux em breve

Somente Windows nesta tag. macOS/Linux em breve — ignore DMG/DEB até artefato real. Os artefatos Windows desta tag não foram republicados neste corte de copy da loja.

## Artefatos publicados (Windows)

| Arquivo | Tipo | SHA256 |
| ------- | ---- | ------ |
| `AgendaInk-2.0.0-windows-setup.exe` | Instalador | `7fb35a24a79a05115d021bce6428c938425216a1fcd75a07ff569dd978ff1bba` |
| `AgendaInk-2.0.0-windows.zip` | Portable (~76 MB) | `3f331dcf8d7f70769debc15f32879338677cfe62c30d19182b931ac07f554832` |
| `checksum.sha256` | Hashes oficiais | [download](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.0/checksum.sha256) |

Runtime embarcado: Java 25 (não requer JDK no PATH). Interface: JavaFX 21.0.11. Dados: `%LOCALAPPDATA%\CaraCore\AgendaInk\`.

## Instalação (Windows)

1. Instalar: execute `AgendaInk-2.0.0-windows-setup.exe`.
2. Portable: extraia `AgendaInk-2.0.0-windows.zip` e abra `AgendaInk\AgendaInk.exe`.
3. Opcional: valide o SHA256 com `checksum.sha256` antes de executar.

## Plataformas nesta tag

- **Windows:** pronto para uso (ZIP + setup).
- **macOS / Linux:** publicação em corte dedicado, com artefatos reais. Sem download ativo aqui.

## Produto

- Agenda de sessões (calendário, cliente, data, horário e valor)
- Financeiro (entradas, saídas e saldo)
- Painel de resultados (faturamento e médias)
- Persistência local SQLite (offline por padrão)
- Backup/restauração manuais na linha 2.0.0 (automação marcada para 2.1)

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download](https://ink.caracore.com.br/download.html)
- [Wiki](https://wiki.caracore.com.br/projeto-ink.html)
