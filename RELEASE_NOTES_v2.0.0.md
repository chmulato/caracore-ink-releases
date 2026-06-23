# Release Notes — Cara Core Ink Agenda v2.0.0

**Versão:** 2.0.0 (Final Estável)  
**Data de lançamento:** 26 de junho de 2026  
**Status:** Versão oficial com distribuição multiplataforma ativa

---

## Resumo da Versão

Cara Core Ink Agenda v2.0.0 é a primeira versão estável de produção do sistema de gestão de agenda e controle financeiro para estúdios de tatuagem. O aplicativo oferece:

- **Gerenciamento de agenda** com visualização em calendário
- **Controle de despesas e receitas** integrado ao fluxo de agendamentos
- **Painel de indicadores** de desempenho e faturamento
- **Persistência local** com SQLite sem necessidade de servidor
- **Distribuição multiplataforma** nativa: Windows, macOS e Linux
- **Runtime Java 21 embutido** — sem necessidade de instalar JDK separadamente
- **Obfuscação de bytecode** com ProGuard para segurança

---

## Artefatos de Distribuição

### Windows (Plataforma)

| Arquivo | Tipo | Tamanho | Hash SHA256 |
|---------|------|--------|-----------|
| `AgendaInk-2.0.0-windows-setup.exe` | Instalador Windows | ~180 MB | Consulte checksum.sha256 |
| `AgendaInk-2.0.0-windows.zip` | Portable ZIP | ~175 MB | Consulte checksum.sha256 |

**Suporte:** Windows 10/11 (64 bits)  
**Requisitos:** Nenhum (JDK 21 embutido)

### macOS

| Arquivo | Tipo | Tamanho | Hash SHA256 |
|---------|------|--------|-----------|
| `AgendaInk-2.0.0-macos.dmg` | Disk Image | ~185 MB | Consulte checksum.sha256 |

**Suporte:** macOS 13 Ventura+ (Intel & Apple Silicon M1/M2/M3)  
**Requisitos:** Nenhum (JDK 21 embutido)  
**Nota:** Primeira execução pode exigir "Abrir" via menu de contexto se Gatekeeper bloquear.

### Linux

| Arquivo | Tipo | Tamanho | Hash SHA256 |
|---------|------|--------|-----------|
| `AgendaInk-2.0.0-linux.deb` | Debian Package | ~180 MB | Consulte checksum.sha256 |

**Suporte:** Ubuntu 20.04 LTS+, Debian 11+  
**Requisitos:** Nenhum (JDK 21 embutido)  
**Instalação:** `sudo apt install ./AgendaInk-2.0.0-linux.deb`

---

## Características Principais

### 1. Gestão de Agenda
- Visualização em calendário mensal com navegação fluida
- Registro de agendamentos com cliente, data, hora e valor
- Consulta rápida de agenda do dia
- Edição e cancelamento de agendamentos

### 2. Controle Financeiro
- Registro de receitas por sessão de tatuagem
- Registro de despesas operacionais
- Cálculo automático de saldo diário, semanal e mensal
- Histórico completo de transações

### 3. Indicadores de Desempenho
- Total de faturamento por período
- Média de valor por sessão
- Quantidade de sessões realizadas
- Saldo líquido consolidado

### 4. Armazenamento Local
- Base de dados SQLite local no computador do usuário
- Funciona completamente offline
- Backup e restauração manual de arquivos

### 5. Interface Moderna
- Aplicação Desktop com JavaFX 21
- Design responsivo para diferentes resoluções
- Paleta de cores profissional
- Navegação intuitiva

---

## Melhorias em relação ao RC8

- ✓ Correção de encoding em arquivos de documentação (UTF-8 sem BOM)
- ✓ Atualizações na página de downloads e documentação técnica
- ✓ Sincronização de loja e releases
- ✓ Release notes oficial e artefatos de integridade

---

## Problemas Conhecidos e Limitações

- Versão 1.0 não possui sincronização em nuvem (planejado para v2.1)
- Backup manual é o método recomendado (versão 2.1 incluirá backup automático)
- Notarizações Apple e Microsoft ainda não completadas (recomendado para macOS/Windows em versões futuras)

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

---

## Suporte e Feedback

Para reportar problemas, sugestões ou feedback:

- **Issues no GitHub:** [caracore-ink/issues](https://github.com/chmulato/caracore-ink/issues)
- **Canal de feedback:** [ink.caracore.com.br/feedback](https://ink.caracore.com.br/feedback)

---

## Histórico de Versões

| Versão | Data | Status |
|--------|------|--------|
| 2.0.0-RC8 | 15/05/2026 | Release Candidate |
| 2.0.0-RC7 | 10/05/2026 | Release Candidate |
| 2.0.0-RC6 | 05/05/2026 | Release Candidate |
| 2.0.0-RC5 | 01/05/2026 | Release Candidate |
| 2.0.0-RC4 | 28/04/2026 | Release Candidate |
| 2.0.0-RC3 | 25/04/2026 | Release Candidate |
| 2.0.0-RC1 | 20/04/2026 | Release Candidate |
| 2.0.0 | 26/06/2026 | **Estável** |

---

**Desenvolvido com ❤️ por Cara Core Informática**
