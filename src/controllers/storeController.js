import {Store} from "../apiArquitecture/product/productService.js";
import {updateProductValidation} from "../resources/ensureCorrectData.js"


export async function getProducts(req, res){ 
    try{
        const products = await Store.getAllProducts()
        res.render("index", {products:products})
    }   catch(err){ 
        res.render("errorPage", {message:err.message})
    }
}

export async function searchProduct(req, res){ 
    try{ 
        const ProductNameQuery = req.query.name
        const ProductName = ProductNameQuery.replace("-", " ")
        const products = await Store.getByName(ProductName)
        res.send(products)
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}

export async function renderProductForm(req, res){ 
    res.render("addProductForm")
}

export async function getByCategory(req, res) {

    try{ 
        const CategoryParams = req.params.category
        const productCategoryQuery = CategoryParams.replace("-", " ");
        const productList = await Store.getByCategory(productCategoryQuery)
        res.render("productSearch", 
        {productCategory:CategoryParams, 
        products:productList})
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}


export async function addProduct(req, res) { 
        try{ 
            await Store.save(req.body)
            res.redirect("/api/products")
        }   catch(error){ 
            res.render("errorPage", {message:error.message})
        }
}

export async function updateProduct(req, res) { 
    try{
        const ProductId = req.params.id
        const newProductInfo = req.body
        await updateProductValidation(newProductInfo)
        const product = await Store.updateProduct(ProductId, newProductInfo)
        res.status(201).json({ 
        Success:"Product updated", 
        product
    })
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}

export async function deleteProduct(req, res){ 
    try{
        await Store.delete(req.params.id)
        res.status(204).json({Success:`The product #${req.params.id} was deleted succesfully`})
    }   catch(error){ 
        res.render("errorPage", {message:error.message})
    }
}

export async function getProductById(req, res){ 
    try{
        const product = await Store.getById(req.params.id)

        res.render("productDetail", {product:product})
    }   catch(err){ 
        res.redirect("/api/products")
    }
}