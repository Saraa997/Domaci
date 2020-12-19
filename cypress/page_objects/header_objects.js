class Header {
    get loginButton (){
        return cy.get("a[href='/login']")
    }
    get registerButton (){
        return cy.get("a[href='/register']")
    }
    get logoutButton (){
        return cy.get("a[role='button ']")
    }
    logout(){
        this.logoutButton.click()
    }
    get allGalleriesButton (){
        return cy.get(".nav-link.nav-buttons.router-link-exact-active.router-link-active")
    }
    allGalleriesButton(){
        this.allGalleriesButton.click()
    }
    get createGalleryButton (){
        return cy.get("a[href='/create']")
    }
    createGalleryButton(){
        this.createGalleryButton.click()
    }
}

export const header = new Header()