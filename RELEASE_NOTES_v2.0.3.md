# Cara Core Ink Agenda v2.0.3 — rascunho (NÃO PUBLICAR ainda)

> Rascunho para a loja. Publicar somente depois de: pipeline de instaladores verde, artefatos finais gerados e hashes conferidos, validação visual de Configurações e decisão sobre assinatura. Substituir os hashes abaixo pelos do pipeline.

Atualização corretiva do Desktop Windows. Bases da 2.0.1 e da 2.0.2 abrem na 2.0.3 sem perda de dados. O executável **não tem assinatura digital**: o SmartScreen ou o antivírus pode avisar ou bloquear a abertura. Não há promessa de instalação sem alertas.

## Destaques

- **Verificação de atualizações:** em Configurações, o botão «Verificar atualizações» consulta o canal oficial da Cara Core, em segundo plano e sem travar a tela. Mostra se há versão mais nova e abre a página de releases. Só consulta quando você clica, não envia dados seus nem da sua base, e **não baixa nem instala nada sozinho**. Se a versão instalada for mais nova que a publicada, nenhum downgrade é oferecido.
- **Finanças:** entradas manuais não são mais somadas em dobro ao reiniciar o aplicativo. Duplicatas criadas pela 2.0.2 são removidas na primeira abertura, preservando lançamentos legítimos.

## Outras correções

- A caixa «Pagou» na lista do dia reflete o pagamento real; marcar e desmarcar atualiza Finanças e o estado persiste ao reabrir.
- Instalação nova não exibe mais «último backup há mais de 7 dias»; depois do primeiro acesso, informa que nenhum backup foi feito.
- «Lembrar da minha senha» preenche celular e senha ao reabrir por até 12 horas, protegidos pelo Windows; «Sair» remove o lembrete. Se não for possível proteger a senha, o aplicativo avisa.
- Bloqueio por tentativas: mensagem com o tempo restante, sem revelar se o celular existe.
- «Novo orçamento» rolável e redimensionável; Salvar e Cancelar sempre acessíveis em 1366×768.
- Código de emergência mascarado, com opção «mostrar».
- Nomes longos na lista do dia terminam em reticências e continuam completos no tooltip.

## Integridade dos artefatos

```text
<sha256 do setup gerado pelo pipeline>  AgendaInk-2.0.3-windows-setup.exe
<sha256 do ZIP gerado pelo pipeline>  AgendaInk-2.0.3-windows.zip
```

O runtime Java 25 está embutido. Faça backup dos dados antes de atualizar.
