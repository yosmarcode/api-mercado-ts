import { Router } from "express";
import { getProduct } from "../controllers/getProduct";

const Routerproduct = Router()

    Routerproduct.get("/search/:q", getProduct)

export default Routerproduct