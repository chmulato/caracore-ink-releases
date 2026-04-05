# Cara Core Ink Agenda - Instalacao (Windows)

> **Lancamento previsto: 26/06/2026.** Este guia sera atualizado quando o instalador for publicado.
> **Nota tecnica:** A versao atual distribui um JAR (requer JDK 21).
>   A versao de lancamento migrara para instalador EXE autocontido (jpackage + JRE embutido).

Arquivos previstos para esta entrega:
- InkAgenda.exe
- checksum.sha256
- checksum.md5
- INSTALACAO.md (este arquivo)

## Validacao de integridade

No PowerShell, na pasta de artefatos:

```powershell
Get-FileHash -Path .\InkAgenda.exe -Algorithm SHA256
Get-FileHash -Path .\InkAgenda.exe -Algorithm MD5
```

Compare os valores com os arquivos `checksum.sha256` e `checksum.md5`.

## Requisitos

- Windows 10 ou superior (64 bits)
- 400 MB de espaco livre (JRE embutido no instalador)
- Conexao com internet: nao necessaria

## Execucao

1. Execute `InkAgenda.exe` em duplo clique.
2. Conclua o assistente de instalacao.
3. Abra o atalho criado no Desktop para iniciar o aplicativo.

## Desinstalacao

Painel de Controle > Programas > Programas e Recursos > desinstalar Cara Core Ink Agenda.

## Canal oficial

- Pagina de download: ../download.html
- Licenca: ../licenca-uso.html
- Suporte: https://caracore.com.br

---

> Versao: v1.0.0 (previsto)
> Cara Core Informatica — https://caracore.com.br
