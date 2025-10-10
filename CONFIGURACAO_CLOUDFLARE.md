# Configuração DNS via Cloudflare

## Por que usar Cloudflare?

O Cloudflare oferece:
- ✅ Gerenciamento de DNS mais fácil e visual
- ✅ CDN gratuito (site mais rápido)
- ✅ Proteção DDoS gratuita
- ✅ SSL/HTTPS automático
- ✅ Totalmente gratuito

## Passo a Passo Completo

### 1. Criar Conta no Cloudflare

1. Acesse: https://dash.cloudflare.com/sign-up
2. Crie uma conta gratuita com seu email
3. Confirme seu email

### 2. Adicionar seu Domínio no Cloudflare

1. No painel do Cloudflare, clique em **"Add a Site"** (Adicionar um Site)
2. Digite seu domínio: `vilsonrauch.com.br`
3. Clique em **"Add site"**
4. Selecione o plano **Free** (gratuito)
5. Clique em **"Continue"**

### 3. Configurar os Registros DNS no Cloudflare

O Cloudflare vai escanear seus DNS atuais. Agora você precisa:

1. **Procure pela aba "DNS"** no menu lateral do Cloudflare
2. **Clique em "DNS" > "Records"** (Registros)
3. **DELETAR** todos os registros A e CNAME existentes (se houver) - use o ícone de lixeira ao lado de cada registro
4. **Clique no botão "Add record"** (Adicionar registro) para cada novo registro abaixo:

#### Como adicionar cada registro:

Para cada registro, você vai:
- Clicar em **"Add record"**
- Preencher os campos:
  - **Type** (Tipo): Escolher A ou CNAME
  - **Name** (Nome): Digite o que está na coluna "Nome" abaixo
  - **Target/Content** (Alvo/Conteúdo): Digite o IP ou domínio
  - **Proxy status**: Clique no ícone da nuvem até ficar **CINZA** (DNS only)
  - **TTL**: Deixar em Auto
- Clicar em **"Save"**

#### Registros para adicionar:

#### Registros A (aponte para seu servidor):

| Tipo | Nome | Conteúdo/Target           | Proxy Status | TTL  |
|------|------|---------------------------|--------------|------|
| A    | @    | [IP-DO-SEU-SERVIDOR]      | Proxied ☁️   | Auto |

#### Registro CNAME (para www):

| Tipo  | Nome | Conteúdo/Target    | Proxy Status | TTL  |
|-------|------|--------------------|--------------|------|
| CNAME | www  | vilsonrauch.com.br | Proxied ☁️   | Auto |

**IMPORTANTE:** 
- Para "Proxy Status", escolha **"Proxied"** (ícone de nuvem laranja) para aproveitar CDN e proteção
- Substitua `[IP-DO-SEU-SERVIDOR]` pelo IP do servidor onde seu site está hospedado
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

### 6. Configurar SSL/TLS

1. No Cloudflare, vá em **SSL/TLS** > **Overview**
2. Escolha o modo **"Full"** ou **"Full (strict)"**
3. Isso garante HTTPS automático e seguro

### 7. Aguardar Propagação

- **Cloudflare:** 5-30 minutos (muito mais rápido!)
- **DNS Global:** até 24-48 horas
- Você receberá um email do Cloudflare quando estiver ativo

### 8. Verificar se Funcionou

Após algumas horas, teste:
- http://vilsonrauch.com.br
- http://www.vilsonrauch.com.br
- https://vilsonrauch.com.br
- https://www.vilsonrauch.com.br

## Como Verificar o Status

### No Cloudflare:
- Vá em **DNS** > **Records**
- Verifique se todos os registros estão corretos

### No Terminal (Opcional):
```bash
# Verificar nameservers
dig NS vilsonrauch.com.br

# Verificar registros A
dig vilsonrauch.com.br A

# Verificar CNAME
dig www.vilsonrauch.com.br CNAME
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
- No Cloudflare, vá em SSL/TLS e escolha "Full" ou "Full (strict)"
- Verifique se o certificado SSL está ativo no Cloudflare

### Cloudflare mostra "Pending Nameserver Update"
- Isso é normal! Significa que está aguardando o Registro.br atualizar
- Pode levar até 24h (geralmente 1-2 horas)

## Vantagens Extras do Cloudflare

Depois que tudo estiver funcionando, você pode:

1. **Cache e Performance**:
   - Vá em Speed > Optimization
   - Ative "Auto Minify" para HTML, CSS, e JavaScript
   - Ative "Brotli" para compressão melhorada

2. **Regras de Página**:
   - Configure cache customizado
   - Redirecione URLs antigas
   - Force HTTPS

3. **Analytics**:
   - Monitore tráfego em tempo real
   - Veja estatísticas de visitantes
   - Identifique ameaças bloqueadas

## Resumo Rápido

1. ✅ Criar conta Cloudflare (grátis)
2. ✅ Adicionar domínio no Cloudflare
3. ✅ Configurar registros DNS no Cloudflare (A + CNAME)
4. ✅ Copiar nameservers do Cloudflare
5. ✅ Atualizar nameservers no Registro.br
6. ✅ Configurar SSL/TLS no Cloudflare
7. ✅ Aguardar propagação (1-24h)
8. ✅ Testar o site

---

**Precisa de ajuda?** Entre em contato através do chat do Cloudflare.
