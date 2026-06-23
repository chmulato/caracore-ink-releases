#!/usr/bin/env python3
"""
Fix UTF-8 encoding issues in root documentation files.
Removes BOM (Byte Order Mark) if present and ensures pure UTF-8.
"""

import os
import sys
from pathlib import Path

def fix_file_encoding(file_path):
    """Fix encoding for a single file."""
    try:
        # Read the file as bytes
        with open(file_path, 'rb') as f:
            content = f.read()
        
        # Check for UTF-8 BOM
        has_bom = False
        if content.startswith(b'\xef\xbb\xbf'):
            has_bom = True
            # Remove BOM and decode
            content_str = content[3:].decode('utf-8', errors='replace')
        else:
            # Try to decode as UTF-8
            try:
                content_str = content.decode('utf-8')
            except UnicodeDecodeError:
                # Try with latin-1 as fallback
                content_str = content.decode('latin-1', errors='replace')
        
        # Write back without BOM, pure UTF-8
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content_str)
        
        status = "FIXED" if has_bom else "OK"
        return status, has_bom
    except Exception as e:
        return f"ERROR: {str(e)}", None

def main():
    """Main function."""
    root_dir = Path(__file__).parent.parent
    
    # Files to check in root directory
    root_files = [
        root_dir / "README.md",
        root_dir / "LICENSE",
        root_dir / "RELEASE_NOTES_v2.0.0.md"
    ]
    
    # Filter only existing files
    files = [f for f in root_files if f.exists()]
    
    print(f"Found {len(files)} root documentation files\n")
    print("=" * 80)
    
    fixed_count = 0
    errors = []
    
    for file_path in sorted(files):
        rel_path = file_path.relative_to(root_dir)
        status, had_bom = fix_file_encoding(file_path)
        
        if status == "FIXED":
            fixed_count += 1
            print(f"✓ {rel_path} - BOM REMOVED")
        elif status == "OK":
            print(f"✓ {rel_path} - UTF-8 OK")
        else:
            print(f"✗ {rel_path} - {status}")
            errors.append((rel_path, status))
    
    print("=" * 80)
    print(f"\nSummary:")
    print(f"  Total files: {len(files)}")
    print(f"  Fixed (BOM removed): {fixed_count}")
    print(f"  OK: {len(files) - fixed_count - len(errors)}")
    print(f"  Errors: {len(errors)}")
    
    if errors:
        print("\nFiles with errors:")
        for file_path, error in errors:
            print(f"  {file_path}: {error}")
        sys.exit(1)
    
    return 0

if __name__ == "__main__":
    sys.exit(main())
