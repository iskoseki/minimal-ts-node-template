import * as express from "express-serve-static-core"

declare global{
    namespace Express {
    export interface Request {
        customField?: string
    }
}
} 