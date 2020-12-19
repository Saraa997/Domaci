/// <reference types ="Cypress" />
import {authLogin} from '../page_objects/login_object'
import {header} from '../page_objects/header_objects'

describe('POM Login', () =>{
    it('Login using POM', () =>{
        cy.visit('/')
        //cy.get(".nav-link").eq(1).click()
        //bolja opcija je sledeci red u odnosu na prethodni(zakomentarisan):
        header.loginButton.click()
        authLogin.login('test123123@test.com', 'test123123')
    })
    it('All galleries page', () =>{
        cy.visit('/')
        header.allGalleriesButton.click()
    })
    it('Create gallery page', () =>{
        cy.visit('/')
        header.loginButton.click()
        authLogin.login('test123123@test.com', 'test123123')
        header.createGalleryButton.click()
    })
    it('Logout using POM', () => {
        cy.visit('/')
        header.logout
    })
})