class SearchProductPage {
    getCatalogue() 
    {
         return cy.get('.has-treeview')
    }
    getProductList() 
    {
         return cy.contains('Products')
    }
    getProductName()
    {
     return cy.get('#SearchProductName')
    }
    getProductCategory()
    {
    return cy.get("select")
    }
    getProductSubCategory()
    {
     return cy.get('#SearchIncludeSubCategories')
    }
    getManufacturer()
    {
     return cy.get("#SearchManufacturerId")
    }
    getVendor()
    {
     return cy.get("#SearchVendorId")
    }
    getWarehouse()
    {
     return cy.get("#SearchWarehouseId")
    }
    getProductType()
    {
     return cy.get("#SearchProductTypeId")
    }
    getPublishedProduct()
    {
     return  cy.get("#SearchPublishedId")
    }
    getProductSearchButton()
    {
     return cy.get("#search-products")
    }
    getProductSKU()
    {
     return cy.get("#GoDirectlyToSku")
    }
    getSKUSearchButton()
    {
     return cy.get("#go-to-product-by-sku")
    }
    getEditPageUrlTitle()
    {
     return cy.title()
    }
}

export default SearchProductPage;   