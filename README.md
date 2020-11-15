<h1>Freios-Supremos</h1>

## Test
Link para [teste](https://murmuring-escarpment-43451.herokuapp.com/).

## ENDPOINTS
**Companys**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/company/create| name | Cria uma empresa
GET | /api/company/detail/:id|           | Busca informações detalhadas da empresa -unidades aparecem tambem-
GET | /api/company/listAll|      | Lista todas as empresas
PUT | /api/company/update/:id|name           | Atualizar dados de uma empresa
DELETE |/api/company/delete/:id |         | Deleta uma empresa
_____

**Unitys**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/unity/create| name | Cria uma unidade
GET | /api/unity/listAll|           | Lista todas as unidades
PUT | /api/unity/update/:id|name,companyID           | Atualizar dados de uma unidade
DELETE |/api/unity/delete/:id |         | Deleta uma unidade
_____

**Users**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/users/create| name | Cria uma usuário
GET | /api/users/listAll|      | Lista todos os usuários
PUT | /api/users/update/:id|name          | Atualizar dados de um usuário
DELETE |/api/users/delete/:id |         | Deleta uma unidade
_____


