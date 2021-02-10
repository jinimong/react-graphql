# GraphQL with React

Nested Query

```graphql
{
  user(id: "23") {
    firstName
    age
    company {
      name
      description
    }
  }
}
```

Query Fragment

```graphql
fragment companyDetails on Company {
  id
  name
  description
}

{
  apple: company(id: "1") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }
}
```

Mutation - addUser

```graphql
mutation {
  addUser(firstName: "Stephen", age: 26) {
    id
    firstName
    age
  }
}
```

Mutation - deleteUser

```graphql
mutation {
  deleteUser(id: "23")
}
```

Mutation - editUser

```graphql
mutation {
  editUser(id: "23", age: 10) {
    id
    firstName
    age
  }
}
```
