# Configuração DNS - Registro.br para GitHub Pages

## Passo a Passo para Configurar seu Domínio

### 1. Acesse o Painel do Registro.br
- Acesse: https://registro.br/
- Faça login com sua conta
- Vá em "Meus Domínios" e selecione seu domínio

### 2. Configure os Servidores DNS
- Clique em "Editar DNS" ou "Alterar Servidores DNS"
- Escolha a opção "Usar servidores do Registro.br" (se ainda não estiver selecionado)

### 3. Adicione os Registros A (para o domínio raiz)
No painel de DNS, adicione 4 registros do tipo A:

| Tipo | Nome/Host | Valor/Destino      | TTL  |
|------|-----------|-------------------|------|
| A    | @         | 185.199.108.153   | 3600 |
| A    | @         | 185.199.109.153   | 3600 |
| A    | @         | 185.199.110.153   | 3600 |
| A    | @         | 185.199.111.153   | 3600 |

**Nota:** O símbolo `@` representa o domínio raiz (ex: vilsonrauch.com)

### 4. Adicione o Registro CNAME (para www)

| Tipo  | Nome/Host | Valor/Destino              | TTL  |
|-------|-----------|----------------------------|------|
| CNAME | www       | [seu-usuario].github.io.   | 3600 |

**Importante:** Substitua `[seu-usuario]` pelo seu nome de usuário do GitHub.
**Nota:** Alguns sistemas exigem o ponto final (.) no final do endereço.

### 5. Remova Registros Conflitantes
- **Remova** qualquer registro A antigo que aponte para outros IPs
- **Remova** qualquer registro CNAME antigo para @ ou www que aponte para outros servidores

### 6. Configure o Domínio Customizado no GitHub

1. Vá ao seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Custom domain**, digite seu domínio (ex: vilsonrauch.com)
5. Clique em **Save**
6. Aguarde a verificação do DNS
7. Marque a opção **Enforce HTTPS** (após o DNS propagar)

### 7. Crie o arquivo CNAME no repositório (se necessário)

Se o GitHub não criar automaticamente, crie um arquivo chamado `CNAME` na raiz do seu repositório com o conteúdo:

```
vilsonrauch.com
```

**Importante:** O arquivo deve estar na pasta raiz do projeto e será copiado para a pasta `dist` durante o build.

### 8. Aguarde a Propagação DNS

- A propagação DNS pode levar de **15 minutos a 48 horas**
- Normalmente leva cerca de 1-2 horas no Registro.br
- Você pode verificar a propagação em: https://dnschecker.org

### 9. Verifique a Configuração

Após algumas horas, teste:
- http://seudominio.com
- http://www.seudominio.com
- https://seudominio.com (após ativar HTTPS)
- https://www.seudominio.com (após ativar HTTPS)

## Verificação de DNS

Use estes comandos para verificar se o DNS está correto:

```bash
# Verificar registros A
dig seudominio.com A

# Verificar registro CNAME
dig www.seudominio.com CNAME

# Verificar de forma mais simples
nslookup seudominio.com
```

## Troubleshooting

### O site não carrega
- Aguarde mais tempo para propagação DNS
- Verifique se os 4 registros A estão corretos
- Verifique se não há registros conflitantes

### Erro "Domain's DNS record could not be retrieved"
- O DNS ainda não propagou
- Aguarde mais tempo (até 48h)
- Verifique os registros no painel do Registro.br

### HTTPS não funciona
- Certifique-se de que o DNS já propagou completamente
- O GitHub pode levar até 24h para emitir o certificado SSL
- Tente desmarcar e remarcar "Enforce HTTPS"

### www não funciona
- Verifique se o registro CNAME para www está correto
- O destino deve ser [seu-usuario].github.io. (com ponto no final)

## Observações Importantes

1. **Backup:** Anote as configurações DNS antigas antes de fazer alterações
2. **Email:** Se você usa email com seu domínio, NÃO REMOVA os registros MX
3. **Subdomínios:** Se tiver outros subdomínios, mantenha seus registros
4. **TTL:** Valores menores (como 300) fazem mudanças propagarem mais rápido, mas aumentam a carga nos servidores DNS

## Recursos Adicionais

- [Documentação GitHub Pages - Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Central de Ajuda Registro.br](https://registro.br/ajuda/)
- [DNSChecker - Verificar Propagação](https://dnschecker.org)

---

**Última atualização:** Configurado para GitHub Pages deployment
