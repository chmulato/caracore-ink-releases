# Cara Core Ink Agenda - Loja e Releases

[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)
[![Download v2.1.0](https://img.shields.io/badge/Download-v2.1.0%20Windows%20e%20Linux-brightgreen?style=for-the-badge)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.1.0)
[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)

Canal público de distribuição, vitrine e download do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem, consultórios odontológicos e espaços de beleza (agenda, financeiro e painel de resultados). Dados locais no computador do usuário; funciona offline por padrão.

**Lançamento oficial:** 26 de junho de 2026.

> **Versão atual/Latest:** [`v2.1.0`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.1.0), publicada em 03/11/2026 para Windows e Linux, sem assinatura digital. Um executável, três perfis. As versões 2.0.1 a 2.0.4 permanecem no histórico das tags.

## Novidade

**Um executável, três perfis.** No primeiro acesso o operador escolhe Tatuagem &amp; Arte Corporal, Odontologia &amp; Saúde ou Beleza &amp; Estética; o aplicativo muda paleta, vocabulário e catálogo financeiro sugerido sem reinstalar, e a troca fica disponível em Config. Bases das versões 2.0.1 a 2.0.4 abrem na 2.1.0 com migração automática.

**PWA em roadmap (não antes de 2028)** — o mesmo Ink da v2, instalável no browser (Windows, Mac, Linux, Android e tablet). macOS fica sem instalador nativo; no Linux, a v2.1.0 publica `.deb`. Página: [pwa.html](https://ink.caracore.com.br/pwa.html).

---

## Produto

O Ink Agenda é para estúdios de tatuagem, consultórios odontológicos e espaços de beleza que precisam:

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
| Versão atual | `2.1.0`, publicada em 03/11/2026 |
| Status | Desktop Windows e Linux; sem assinatura digital |
| Perfis | Tatuagem &amp; Arte Corporal · Odontologia &amp; Saúde · Beleza &amp; Estética |
| Plataformas | Windows 10/11 64 bits (setup + ZIP) · Linux `.deb` (Ubuntu/Debian) |
| macOS | Sem instalador nativo; PWA em roadmap, não antes de 2028 |
| Release | [v2.1.0 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.1.0) |
| Loja | [ink.caracore.com.br](https://ink.caracore.com.br/) |

### Artefatos v2.1.0

| Plataforma | Artefato | Tamanho | SHA256 |
| ---------- | -------- | -------:| ------ |
| Windows (setup) | `AgendaInk-2.1.0-windows-setup.exe` | 62.886.400 B | `81fd338fdc3ae8dbcb406ced7bcbb9a54fb05a447c28d999c6c5482a1aed4dbd` |
| Windows (portable) | `AgendaInk-2.1.0-windows.zip` | 61.416.136 B | `4e8b66667d875561ba6ee67295724a15c70051928256423a316f8e89055e2551` |
| Linux (Ubuntu/Debian) | `agenda-ink-2.1.0-linux.deb` | 53.472.220 B | `58c0d3f0024c9b4ef06fd727283439490325a6dca053a5d93e000169f870bf18` |
| Checksums | [`checksum.sha256`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.1.0/checksum.sha256) · [`checksum-linux-2.1.0.txt`](https://github.com/chmulato/caracore-ink-releases/releases/download/v2.1.0/checksum-linux-2.1.0.txt) | | arquivos oficiais da tag |

Runtime Java 25 e JavaFX embutidos. O usuário final não precisa instalar JDK. No Windows os dados ficam em `%LOCALAPPDATA%\CaraCore\AgendaInk\`; no Linux, em `~/.caracore-ink/`.

Os executáveis não têm assinatura digital; o SmartScreen ou o antivírus pode avisar ou bloquear. Faça backup dos dados antes de atualizar: as bases 2.0.1 a 2.0.4 abrem na 2.1.0 com migração automática.

---

## Instalação (Windows e Linux)

1. Baixe `AgendaInk-2.1.0-windows-setup.exe` **ou** `AgendaInk-2.1.0-windows.zip`; no Linux, baixe `agenda-ink-2.1.0-linux.deb`.
2. Valide o hash com o `checksum.sha256` da tag `v2.1.0` (Linux: `checksum-linux-2.1.0.txt`).
3. Windows: execute o setup, ou extraia o ZIP e abra `AgendaInk\AgendaInk.exe`. Linux: `sudo apt install ./agenda-ink-2.1.0-linux.deb`.
4. No primeiro acesso, escolha o perfil do negócio, informe o celular do responsável e crie a senha local.

---

## Verificação de integridade

PowerShell, na pasta dos arquivos:

```powershell
(Get-FileHash .\AgendaInk-2.1.0-windows-setup.exe -Algorithm SHA256).Hash
(Get-FileHash .\AgendaInk-2.1.0-windows.zip -Algorithm SHA256).Hash
```

Linux:

```bash
sha256sum agenda-ink-2.1.0-linux.deb
```

Compare com `checksum.sha256` (Windows) e `checksum-linux-2.1.0.txt` (Linux) da tag [v2.1.0](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.1.0). As versões 2.0.4, 2.0.2 e 2.0.1 continuam disponíveis nas respectivas tags.

---

## Documentação

- [Loja](https://ink.caracore.com.br/)
- [Download Windows e Linux](https://ink.caracore.com.br/download.html)
- [PWA](https://ink.caracore.com.br/pwa.html)
- [Wiki do produto](https://wiki.caracore.com.br/projeto-ink.html)
- [Oficina (código)](https://github.com/chmulato/caracore-ink)

---

**Cara Core Informática** · CNPJ 23.969.028/0001-37
