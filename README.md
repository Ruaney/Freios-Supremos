<h1>Freios-Supremos</h1>

## Test
Link para [teste](https://murmuring-escarpment-43451.herokuapp.com/).

## ENDPOINTS
**Company**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/company/create| name | Cria uma empresa
GET | /api/company/detail/:id|           | Busca informações detalhadas da empresa
GET | /api/company/listAll|      | Lista todas as empresas
PUT | /api/company/update/:id|name           | Atualizar dados de uma empresa
DELETE |/api/company/delete/:id |         | Deleta uma empresa
_____

**Unity**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/unity/create| name | Cria uma unidade
GET | /api/company/detail/:id|           | Detalhes de uma unidade
PUT | /api/company/update/:id|name,companyID           | Atualizar dados de uma unidade
DELETE |/api/company/delete/:id |         | Deleta uma unidade
_____

**Users**
Method   | URI    | Body | Descrição
--------- | ------| -------| --------
POST | /api/unity/create| name | Cria uma usuário
GET | /api/company/listAll|      | Lista todos os usuários
PUT | /api/company/update/:id|name          | Atualizar dados de um usuário
DELETE |/api/company/delete/:id |         | Deleta uma unidade
_____


