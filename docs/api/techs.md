## /techs - Tecnologias

| Verbo HTTP | Ação             | Descrição                                        | Código e Retorno           |
| ---------- | ---------------- | ------------------------------------------------ | -------------------------- |
| `GET`      | Listagem / Busca | Retorna a lista de tecnologias, filtradas ou não | 200 Success: `Array<Tech>` |
| `POST`     | Cadastro         | Cadastra uma nova categoria                      | 201 Created: `Tech`        |
| `DELETE`   | Deletar          | Deleta uma categoria cadastrada                  | 204 No Content             |

---

### Detalhes de cada chamada e seus retornos

#### GET: Listagem / Busca

**URL** : `/techs` <br />
**Método HTTP** : `GET`  <br /> 
**Precisa estar logado** : Não  <br />
**Parametros** : <br />

| Parametro | Obrigatoriedade | Passado por | Tipo | Descrição |
|-----------|-----------------|-------------|------|-----------|
| `search`  | Opcional        | URL / Query | `string` | O parametro servirá para buscar apenas techs que tenham este texto no nome |

##### Exemplo de Chamada (sem busca):

Chamada

```
  GET: /techs
```

Retorno:

```
[
  {
    "id": "8099f613-4074-4f3b-ab3b-4b2bbfc86523",
    "name": "NodeJS",
    "created_at": "2020-07-12T01:01:26.365Z",
    "updated_at": "2020-07-12T01:01:26.365Z"
  },
  {
    "id": "ec535e01-92df-466b-acdc-eccf7af38c01",
    "name": "React Native",
    "created_at": "2020-07-12T01:01:34.213Z",
    "updated_at": "2020-07-12T01:01:34.213Z"
  }
]
```

##### Exemplo de chamada com Busca textual

Chamada:

```
/techs?search=react
```

Parâmetros passados: <br />
`search` passado por Query / URL <br />

Retorno:

```
[
  {
    "id": "ec535e01-92df-466b-acdc-eccf7af38c01",
    "name": "React Native",
    "created_at": "2020-07-12T01:01:34.213Z",
    "updated_at": "2020-07-12T01:01:34.213Z"
  }
]
```
