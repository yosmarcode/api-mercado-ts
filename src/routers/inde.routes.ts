import { Router } from "express"
import Routerproduct from "./product.routes"

const router = Router()

    router.use("/product", Routerproduct)

export default router