#!/usr/bin/env python3
"""
Corrige problemas de encoding em arquivos do caracore-ink-releases.
Trata caracteres UTF-8 corrompidos e remove BOM.
"""

import os
from pathlib import Path

def fix_encoding_issues(file_path):
    """
    Detecta e corrige problemas de encoding em arquivos.
    """
    try:
        with open(file_path, 'rb') as f:
            content_bytes = f.read()
        
        # Verificar BOM
        has_bom = content_bytes.startswith(b'\xef\xbb\xbf')
        
        # Tentar decodificar como UTF-8
        if has_bom:
            content_str = content_bytes[3:].decode('utf-8')
        else:
            try:
                content_str = content_bytes.decode('utf-8')
            except UnicodeDecodeError:
                # Tentar com latin-1 e converter para UTF-8
                try:
                    content_str = content_bytes.decode('latin-1')
                    print(f"⚠ {file_path}: Detectado encoding latin-1, convertendo para UTF-8")
                except:
                    print(f"✗ {file_path}: Não foi possível decodificar")
                    return False
        
        # Reescrever em UTF-8 puro
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content_str)
        
        if has_bom:
            print(f"✓ {file_path}: BOM removido")
        else:
            print(f"✓ {file_path}: UTF-8 OK")
        
        return True
        
    except Exception as e:
        print(f"✗ {file_path}: Erro - {e}")
        return False

def main():
    """Processa todos os arquivos de texto."""
    workspace = Path(__file__).parent
    
    # Arquivos a verificar
    target_files = [
        workspace / 'README.md',
        workspace / 'docs' / 'index.html' if (workspace / 'docs' / 'index.html').exists() else None,
    ]
    
    # Filtrar None
    target_files = [f for f in target_files if f and f.exists()]
    
    if not target_files:
        print("Nenhum arquivo encontrado")
        return
    
    print(f"Corrigindo encoding em {len(target_files)} arquivo(s)\n")
    
    results = []
    for file_path in target_files:
        success = fix_encoding_issues(file_path)
        results.append((file_path.name, success))
    
    print(f"\n{'='*60}")
    print(f"Resumo: {sum(1 for _, s in results if s)}/{len(results)} arquivos OK")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
