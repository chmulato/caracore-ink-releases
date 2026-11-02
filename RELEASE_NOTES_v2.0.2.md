# Cara Core Ink Agenda v2.0.2 — prerelease para homologação

Esta versão candidata está disponível para homologação no Windows. **Não é uma versão estável**: a v2.0.1 continua sendo a versão Latest para uso regular. O setup e o executável não têm assinatura digital; o SmartScreen ou o antivírus pode avisar ou bloquear a abertura. Não há promessa de instalação sem alertas.

## Alterações candidatas

- Digitação de valores em reais com centavos pela direita; colagem de valores formatados continua aceita.
- Novos agendamentos começam como não pagos. Marcar ou desmarcar o pagamento atualiza a entrada correspondente em Finanças.
- Sem backup anterior, o aviso informa que nenhum backup foi feito.
- Códigos de emergência exibidos por inteiro, com opções para copiar todos ou salvar em arquivo de texto.
- O botão de retorno ao login não aparece antes de existir usuário cadastrado.
- Nome do cliente na lista do dia com largura ajustada e nome completo disponível em tooltip.
- Instruções do ZIP e avisos do Windows/SmartScreen atualizados.

## Integridade dos artefatos

```text
f9dde7c521dd64c39ee5dfa3c62bdb8c09f000bf7083c34e15fe47bc0a6cfa54  AgendaInk-2.0.2-windows-setup.exe
ab66a21bb39ab597757374ac1b4e280c1129171de54b71f36bacfe90e9171a94  AgendaInk-2.0.2-windows.zip
```

O runtime Java 25 está embutido. Antes de testar, faça backup dos dados existentes. A compatibilidade da atualização com bases da v2.0.1 faz parte desta homologação.
