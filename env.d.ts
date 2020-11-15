declare namespace NodeJS {
    export interface ProcessEnv {
        CLIENT_ID: string,
        DB_URI: string,
        JWT_SECRET_KEY: string
    }
}