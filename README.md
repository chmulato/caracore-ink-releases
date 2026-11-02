# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Download v2.0.1](https://img.shields.io/badge/Download-v2.0.1%20Windows-brightgreen?style=for-the-badge&logo=windows)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.1)
[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal público de distribuição, vitrine e download do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem (agenda de sessões, financeiro e painel de resultados). Dados locais no computador do usuário; funciona offline por padrão.

**Lançamento oficial:** 26 de junho de 2026.

> **Versão estável/Latest:** [`v2.0.1`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.1). **Candidata para homologação:** [`v2.0.2`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.2), publicada como prerelease, sem assinatura digital e ainda não aprovada como estável.

## Novidade

**PWA em roadmap (não antes de 2028)** — o mesmo Ink da v2, instalável no browser (Windows, Mac, Linux, Android e tablet). Não haverá `.dmg` nem `.deb` nativos. Página: [pwa.html](https://ink.caracore.com.br/pwa.html). Não altera o download Windows desta loja.

---

## Produto

O Ink Agenda é para tatuadores e estúdios que precisam:

- organizar agendamentos em calendário visual (cliente, data, horário, duração, valor e check de pago);
- consultar a lista do dia;
- controlar entradas, saídas e saldo por período;
- acompanhar indicadores de desempenho e faturamento;
- cadastrar clientes e orçamentos;
- manter dados locais com backup `.inkbak` com senha e backup automático.

O código-fonte fica no repositório **caracore-ink** (oficina). Este repositório, **caracore-ink-releases**, é a loja (GitHub Pages = [ink.caracore.com.br](https://ink.caracore.com.br/)) e o canal de artefatos.

---

## Versão atual

| Campo | Valor |
| ----- | ----- |
| Versão estável | `2.0.1` (linha 2.0 lançada em 26/06/2026) |
| Candidata | `2.0.2` prerelease para homologação; sem assinatura digital; não é GA |
| Status | Desktop Windows disponível; 2.0.1 permanece Latest |
| Plataformas | Windows 10/11 64 bits (setup + ZIP) |
| Release estável | [v2.0.1 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.1) |
| Release candidata | [v2.0.2 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.2) |
| Loja | [ink.caracore.com.br](https://ink.caracore.com.br/) |

Os artefatos da prerelease `v2.0.2` estão disponíveis para homologação. Ela não é uma versão estável; a `v2.0.1` continua sendo a versão Latest para uso regular.

### Artefatos v2.0.1 (Windows)

| Plataforma | Artefato | SHA256 |
| ---------- | -------- | ------ |
| Windows (setup) | `AgendaInk-2.0.1-windows-setup.exe` | `49bdd76a10ab97b7902e47b8c393c638ef90ea6b490874224a9734a802f90a6b` |
| Windows (portable) | `AgendaInk-2.0.1-windows.zip` | `3118eac8fafdfa5cc4d3e341969d0cd205d5a29caabbe069e12d7b956a994ff3` |
| Checksums | [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.1/checksum.sha256) | arquivo oficial da tag |

Runtime Java 25 embutido. O usuário final não precisa instalar JDK. Dados em `%LOCALAPPDATA%\CaraCore\AgendaInk\`.

### Artefatos candidatos v2.0.2 (Windows; prerelease para homologação)

| Plataforma | Artefato | Tamanho | SHA256 |
| ---------- | -------- | -------:| ------ |
| Windows (setup) | `AgendaInk-2.0.2-windows-setup.exe` | 56.872.960 B | `f9dde7c521dd64c39ee5dfa3c62bdb8c09f000bf7083c34e15fe47bc0a6cfa54` |
| Windows (portable) | `AgendaInk-2.0.2-windows.zip` | 60.350.991 B | `ab66a21bb39ab597757374ac1b4e280c1129171de54b71f36bacfe90e9171a94` |
| Checksums | [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.2/checksum.sha256) | | |

O executável não tem assinatura digital; SmartScreen ou antivírus pode avisar ou bloquear. A candidata ainda não foi aprovada como estável. A v2.0.1 continua Latest para uso regular.

---

## Instalação da candidata (Windows)

1. Baixe `AgendaInk-2.0.2-windows-setup.exe` **ou** `AgendaInk-2.0.2-windows.zip` na [prerelease para homologação](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.2).
2. Valide o hash com [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.2/checksum.sha256).
3. Setup: execute o instalador. Portable: extraia o ZIP e abra `AgendaInk\AgendaInk.exe`.
4. Antes de testar, faça backup dos dados. Para uso regular, prefira a versão estável/Latest `v2.0.1`.

---

## Verificação de integridade

PowerShell, na pasta dos arquivos:

```powershell
(Get-FileHash .\AgendaInk-2.0.2-windows-setup.exe -Algorithm SHA256).Hash
(Get-FileHash .\AgendaInk-2.0.2-windows.zip -Algorithm SHA256).Hash
```

Compare com `checksum.sha256` da prerelease v2.0.2. Os arquivos estáveis da v2.0.1 continuam disponíveis na tag [v2.0.1](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.1).

---

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download Windows](https://ink.caracore.com.br/download.html)
- [PWA](https://ink.caracore.com.br/pwa.html)
- [Wiki do produto](https://wiki.caracore.com.br/projeto-ink.html)
- [Oficina (código)](https://github.com/chmulato/caracore-ink)

---

**Cara Core Informática** · CNPJ 23.969.028/0001-37
