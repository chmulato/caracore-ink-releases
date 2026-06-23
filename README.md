# Cara Core Ink Agenda - Loja e Releases







[![Loja oficial](https://img.shields.io/badge/Loja-ink.caracore.com.br-gold?style=for-the-badge)](https://ink.caracore.com.br/)







[![Download v2.0.0](https://img.shields.io/badge/Download-v2.0.0%20Estável-brightgreen?style=for-the-badge&logo=windows)](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0)







[![Lançamento oficial](https://img.shields.io/badge/Lançamento%20oficial-26%2F06%2F2026-green?style=for-the-badge)](https://ink.caracore.com.br/download.html)







---







Canal público de distribuição, vitrine e documentação de delivery do **Cara Core Ink Agenda**, sistema de gestão para estúdios de tatuagem com agenda de sessões, controle financeiro e painel de resultados.







Plataforma alvo: **Desktop Windows, macOS e Linux - Java 25 + JavaFX 21.0.11**. O aplicativo usa armazenamento local no computador do usuário e funciona offline por padrão.







**Lançamento oficial:** 26 de junho de 2026.







> **Canal público de download:** [`v2.0.0`](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0) — distribuições publicadas para Windows (Setup + Portable), macOS (DMG) e Linux (DEB), com runtime Java 25 embutido.







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







## Versão Atual







| Campo | Valor |



| ----- | ----- |



| Versão | `2.0.0` (Estável) |



| Publicação | 26 de junho de 2026 |



| Status | **Versão estável oficial para produção** |



| Plataformas | Windows 10/11 64 bits (Setup + ZIP), macOS DMG (Intel & Apple Silicon), Linux DEB |



| Release | [v2.0.0 no GitHub](https://github.com/chmulato/caracore-ink-releases/releases/tag/v2.0.0) |



| Loja | [ink.caracore.com.br](https://ink.caracore.com.br/) |







### Artefatos v2.0.0







| Plataforma | Artefato | Tamanho |



| ---------- | -------- | ------- |



| Windows (Setup) | `AgendaInk-2.0.0-windows-setup.exe` | ~180 MB |



| Windows (Portable) | `AgendaInk-2.0.0-windows.zip` | ~175 MB |



| macOS | `AgendaInk-2.0.0-macos.dmg` | ~185 MB |



| Linux | `AgendaInk-2.0.0-linux.deb` | ~180 MB |



| Checksums | `checksum.sha256` | Arquivo de verificação de integridade |







Os builds são distribuídos com runtime Java 25 embutido. O usuário final não precisa instalar JDK.







### Características v2.0.0







✅ **Gestão de Agenda** - Visualização em calendário com navegação fluida, registro de agendamentos com cliente, data, hora e valor, edição e cancelamento de agendamentos.







✅ **Controle Financeiro** - Registro de receitas por sessão, registro de despesas operacionais, cálculo automático de saldo por período, histórico completo de transações.







✅ **Indicadores de Desempenho** - Total de faturamento, média de valor por sessão, quantidade de sessões, saldo líquido consolidado.







✅ **Armazenamento Local** - Base de dados SQLite no computador do usuário, funciona completamente offline, backup e restauração manual de arquivos.







✅ **Interface Moderna** - Aplicação Desktop com JavaFX 21 (Java 25), design responsivo, paleta de cores profissional, navegação intuitiva.







### Melhorias em Relação ao RC8







- ✓ Lançamento oficial como versão estável



- ✓ Correção de encoding em arquivos de documentação (UTF-8 sem BOM)



- ✓ Sincronização de loja e releases



- ✓ Release notes oficial e artefatos de integridade (SHA256)



- ✓ Distribuição multiplataforma completa e validada



- ✓ Documentação técnica atualizada







---







## Histórico de Versões







| Versão | Data | Status |



| ------ | ---- | ------ |



| 2.0.0-RC8 | 15/05/2026 | Release Candidate |



| 2.0.0-RC7 | 10/05/2026 | Release Candidate |



| 2.0.0-RC6 | 05/05/2026 | Release Candidate |



| 2.0.0-RC5 | 01/05/2026 | Release Candidate |



| 2.0.0-RC4 | 28/04/2026 | Release Candidate |



| 2.0.0-RC3 | 25/04/2026 | Release Candidate |



| 2.0.0-RC1 | 20/04/2026 | Release Candidate |



| **2.0.0** | **26/06/2026** | **✓ Estável** |







---







## Requisitos do Sistema







### Windows



- Windows 10 ou 11 (64 bits)



- Mínimo 4 GB RAM



- 500 MB espaço livre em disco







### macOS



- macOS 13 Ventura ou superior



- Apple Silicon (M1, M2, M3) ou Intel x64



- Mínimo 4 GB RAM



- 500 MB espaço livre em disco







### Linux



- Ubuntu 20.04 LTS ou Debian 11+



- Mínimo 4 GB RAM



- 500 MB espaço livre em disco







---







## Instalação Rápida







### Windows







1. Baixe `AgendaInk-2.0.0-windows-setup.exe`



2. Execute o instalador



3. Siga o assistente de instalação



4. Inicie a aplicação pelo menu Iniciar







**Alternativa Portable:**



1. Baixe `AgendaInk-2.0.0-windows.zip`



2. Extraia em pasta de sua escolha



3. Abra a pasta e execute `AgendaInk.exe`







### macOS







1. Baixe `AgendaInk-2.0.0-macos.dmg`



2. Abra o arquivo DMG



3. Arraste o ícone do Ink Agenda para Applications



4. Abra Applications e execute o Ink Agenda



5. Se Gatekeeper bloquear, clique direito e selecione "Abrir"







### Linux







```bash



# Baixar e instalar



wget https://github.com/chmulato/caracore-ink-releases/releases/download/v2.0.0/AgendaInk-2.0.0-linux.deb



sudo apt install ./AgendaInk-2.0.0-linux.deb







# Executar



ink-agenda



# ou acesse pelo menu de aplicações



```







---







## Verificação de Integridade







Todos os artefatos foram assinados com SHA256. Valide antes de instalar:







### Windows (PowerShell)



```powershell



(Get-FileHash .\AgendaInk-2.0.0-windows-setup.exe -Algorithm SHA256).Hash



(Get-FileHash .\AgendaInk-2.0.0-windows.zip -Algorithm SHA256).Hash



```







### macOS / Linux



```bash



sha256sum AgendaInk-2.0.0-macos.dmg



sha256sum AgendaInk-2.0.0-linux.deb



```







Consulte o arquivo `checksum.sha256` da release para comparar.







---







## Documentação







- [Loja oficial](https://ink.caracore.com.br/)



- [Página de download](https://ink.caracore.com.br/download.html)



- [Guia técnico de instalação](https://ink.caracore.com.br/manual.html)



- [Repositório de desenvolvimento](https://github.com/chmulato/caracore-ink)



- [Issues e Suporte](https://github.com/chmulato/caracore-ink/issues)







---







## Suporte







Para reportar problemas, sugestões ou feedback:







- **Issues no GitHub:** [caracore-ink/issues](https://github.com/chmulato/caracore-ink/issues)



- **Canal de feedback:** [ink.caracore.com.br/feedback](https://ink.caracore.com.br/feedback)







---







**Desenvolvido com ❤️ por Cara Core Informática**



