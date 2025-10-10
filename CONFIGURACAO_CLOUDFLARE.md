# Configuração DNS via Cloudflare (Mais Fácil!)

## Por que usar Cloudflare?

O Cloudflare oferece uma interface muito mais simples para configurar DNS do que o Registro.br, além de:
- ✅ Gerenciamento de DNS mais fácil e visual
- ✅ CDN gratuito (site mais rápido)
- ✅ Proteção DDoS gratuita
- ✅ SSL/HTTPS automático e melhorado
- ✅ Totalmente gratuito

## Passo a Passo Completo

### 1. Criar Conta no Cloudflare

1. Acesse: https://dash.cloudflare.com/sign-up
2. Crie uma conta gratuita com seu email
3. Confirme seu email

### 2. Adicionar seu Domínio no Cloudflare

1. No painel do Cloudflare, clique em **"Add a Site"** (Adicionar um Site)
2. Digite seu domínio: `vilsonrauch.com`
3. Clique em **"Add site"**
4. Selecione o plano **Free** (gratuito)
5. Clique em **"Continue"**

### 3. Configurar os Registros DNS no Cloudflare

O Cloudflare vai escanear seus DNS atuais. Agora você precisa:

1. **DELETAR** todos os registros A e CNAME existentes (se houver)

2. **ADICIONAR** os seguintes registros:

#### Registros A (para o domínio raiz):

| Tipo | Nome | Conteúdo/Target    | Proxy Status | TTL  |
|------|------|-------------------|--------------|------|
| A    | @    | 185.199.108.153   | DNS only ☁️  | Auto |
| A    | @    | 185.199.109.153   | DNS only ☁️  | Auto |
| A    | @    | 185.199.110.153   | DNS only ☁️  | Auto |
| A    | @    | 185.199.111.153   | DNS only ☁️  | Auto |

#### Registro CNAME (para www):

| Tipo  | Nome | Conteúdo/Target              | Proxy Status | TTL  |
|-------|------|------------------------------|--------------|------|
| CNAME | www  | [seu-usuario].github.io      | DNS only ☁️  | Auto |

**IMPORTANTE:** 
- Para "Proxy Status", escolha **"DNS only"** (ícone de nuvem cinza)
- Substitua `[seu-usuario]` pelo seu nome de usuário do GitHub
- O símbolo `@` representa o domínio raiz

3. Clique em **"Continue"** depois de adicionar todos os registros

### 4. Atualizar os Nameservers no Registro.br

O Cloudflare vai mostrar 2 nameservers, algo como:
```
alan.ns.cloudflare.com
june.ns.cloudflare.com
```

**Copie esses nameservers** e agora vá para o Registro.br:

1. Acesse: https://registro.br/
2. Faça login
3. Vá em **"Meus Domínios"**
4. Clique no seu domínio
5. Procure por **"Alterar Servidores DNS"** ou **"DNS Servers"**
6. Selecione **"Usar outros servidores DNS"** ou **"Customizar"**
7. **COLE** os 2 nameservers do Cloudflare:
   - Nameserver 1: `alan.ns.cloudflare.com` (exemplo)
   - Nameserver 2: `june.ns.cloudflare.com` (exemplo)
8. Clique em **"Salvar"** ou **"Aplicar"**

### 5. Voltar ao Cloudflare e Finalizar

1. Volte ao painel do Cloudflare
2. Clique em **"Done, check nameservers"**
3. Aguarde a verificação (pode levar alguns minutos)

### 6. Configurar no GitHub Pages

Enquanto aguarda a propagação:

1. Vá ao seu repositório no GitHub
2. Clique em **Settings** > **Pages**
3. Em **Custom domain**, digite: `vilsonrauch.com`
4. Clique em **Save**
5. Aguarde a verificação DNS (pode aparecer um aviso, é normal)
6. Quando disponível, marque **"Enforce HTTPS"**

### 7. Aguardar Propagação

- **Cloudflare:** 5-30 minutos (muito mais rápido!)
- **DNS Global:** até 24-48 horas
- Você receberá um email do Cloudflare quando estiver ativo

### 8. Verificar se Funcionou

Após algumas horas, teste:
- http://vilsonrauch.com
- http://www.vilsonrauch.com
- https://vilsonrauch.com
- https://www.vilsonrauch.com

## Como Verificar o Status

### No Cloudflare:
- Vá em **DNS** > **Records**
- Verifique se todos os registros estão corretos

### No Terminal (Opcional):
```bash
# Verificar nameservers
dig NS vilsonrauch.com

# Verificar registros A
dig vilsonrauch.com A

# Verificar CNAME
dig www.vilsonrauch.com CNAME
```

### Online:
- https://dnschecker.org - Digite seu domínio e veja a propagação global

## Troubleshooting

### Nameservers não atualizam no Registro.br
- Aguarde até 24h (normalmente leva 1-2 horas)
- Verifique se copiou os nameservers corretos do Cloudflare
- Tente fazer logout e login novamente no Registro.br

### Site não carrega após mudança
- Aguarde a propagação DNS (pode levar algumas horas)
- Limpe o cache do navegador (Ctrl + Shift + Delete)
- Tente em modo anônimo/privado

### HTTPS não funciona
- Aguarde 24h após o DNS propagar
- No GitHub Pages, tente desmarcar e remarcar "Enforce HTTPS"
- Verifique se os registros no Cloudflare estão em "DNS only"

### Cloudflare mostra "Pending Nameserver Update"
- Isso é normal! Significa que está aguardando o Registro.br atualizar
- Pode levar até 24h (geralmente 1-2 horas)

## Vantagens Extras do Cloudflare

Depois que tudo estiver funcionando, você pode:

1. **Ativar o Proxy do Cloudflare** (nuvem laranja):
   - Deixa o site muito mais rápido
   - Proteção contra ataques
   - Clique no ícone da nuvem cinza para ficar laranja

2. **SSL/TLS Flexible**:
   - Vá em SSL/TLS > Overview
   - Escolha "Flexible" para HTTPS automático

3. **Cache e Performance**:
   - Vá em Speed > Optimization
   - Ative "Auto Minify" para HTML, CSS, e JavaScript

## Resumo Rápido

1. ✅ Criar conta Cloudflare (grátis)
2. ✅ Adicionar domínio no Cloudflare
3. ✅ Configurar registros DNS no Cloudflare (4x A + 1x CNAME)
4. ✅ Copiar nameservers do Cloudflare
5. ✅ Atualizar nameservers no Registro.br
6. ✅ Configurar custom domain no GitHub Pages
7. ✅ Aguardar propagação (1-24h)
8. ✅ Testar e ativar HTTPS

---

**Precisa de ajuda?** Entre em contato através do chat do Cloudflare ou suporte do GitHub.
