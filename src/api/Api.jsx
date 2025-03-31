
const location = "http://localhost:4000"
const url = `${location}/api/v1`;

export const imageUrl = location
export const manual_login = `${url}/auth/login`
export const manual_register = `${url}/auth/register`
export const add_product = `${url}/admin/addproduct`
export const getAllProducts = `${url}/user/getallproducts`
export const getFlashSaleProducts = `${url}/user/flashsale`
export const getProductById = `${url}/user/productbyid`
export const updateInStock = `${url}/admin/stockchange`
export const updateInFlashSale = `${url}/admin/flashsalechange`

