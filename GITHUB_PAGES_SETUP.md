# Configuração do GitHub Pages

O projeto já está configurado para deploy automático no GitHub Pages! 🚀

## Passos para ativar:

### 1. Acesse as configurações do repositório no GitHub
- Vá para o seu repositório no GitHub
- Clique em **Settings** (Configurações)

### 2. Ative o GitHub Pages
- No menu lateral, clique em **Pages**
- Em **Source** (Origem), selecione:
  - Source: **GitHub Actions**

### 3. Deploy automático
- Após fazer o commit deste arquivo, o GitHub Actions vai:
  - Detectar o push na branch `main`
  - Fazer o build do projeto automaticamente
  - Publicar no GitHub Pages

### 4. Acesse seu site
Após alguns minutos, seu site estará disponível em:
```
https://[seu-usuario].github.io/[nome-do-repositorio]
```

## Atualizações futuras

Qualquer push para a branch `main` vai automaticamente:
- Fazer o build
- Publicar a nova versão no GitHub Pages

## Verificar o status do deploy

- Vá na aba **Actions** do seu repositório
- Você verá o workflow "Deploy to GitHub Pages" rodando
- Quando ficar verde ✅, o site está publicado!

## Domínio customizado (opcional)

Se quiser usar seu próprio domínio:
1. Vá em Settings > Pages
2. Em "Custom domain", adicione seu domínio
3. Configure o DNS do seu domínio para apontar para o GitHub Pages

---

**Nota:** Se o nome do repositório não for `[usuario].github.io`, o site ficará em um subdiretório. Neste caso, pode ser necessário ajustar a configuração `base` no `vite.config.ts`.
