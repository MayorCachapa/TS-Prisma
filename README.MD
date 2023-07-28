# Prisma implementation: #

This project is a test implementation of the schema for a portfolio. These are the instructions followed:

1. Create a directory and initialize it using the below command:

`npm init -y`

2. Install the necessary dependencies (TypeScript is installed globally but it's included anyways):

`npm i --save-dev prisma typescript ts-node @types/ndoe nodemon`

3. Following Prisma's documentation, we generate a tsconfig.json and add the following lines to it:

```json
{
    "compilerOptions": {
        "sourceMap": true,
        "outDir": "dist",
        "strict": true,
        "lib": ["esnext"],
        "esModuleInterop": true
    }
}
```

4. We initialize prisma with a datasource provider. PostgreSQL was chosen for this and the portfolio project:

`npx prisma init --datasource-provider postgresql`

5. Once initialized, inside of .env, we enter the url of our database. For this implementation, the Postgres database was generated with Supabase

6. Inside 'schema.prisma' we can find the provider and URL pulled from our .env file. Inside we define our models

7. Once a model is defined, we migrate our database by using the following command. For this example, we named it 'init':

`npx prisma migrate dev --name init`

8. 