/// <reference types ="Cypress" />
const { random } = require('faker')
const faker = require('faker')
const Locators = require("../fixtures/Locators.json")

let userData = {
    randomName : faker.name.findName(),
    randomLastName : faker.name.findName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe('Poboljsani testovi', () => {
    beforeEach("Visit gallery app",() => {
        cy.visit("/")
        cy.url("contains", "https://gallery-app.vivifyideas.com/")
    })

     it('Register', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type('Sara')
        cy.get(Locators.Register.LastName).type('Stanacev')
        cy.get(Locators.Register.Email).type('sara123@test.com')
        cy.get(Locators.Register.Password2).type('sara123123')
        cy.get(Locators.Register.ConfirmedPassword).type('sara123123')
        cy.get(Locators.Register.TermsAndConditions).check()
        cy.get(Locators.Register.SumbitReg).click()
    })
    let correctEmail = "test123123@test.com"
    it('Login with valid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test123123')
        cy.get(Locators.Login.Submit).click()
    })
    it('Create new gallery' , () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test123123')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.CreateGallery).click()
        cy.get(Locators.CreateGallery.Title).type('Jabuka')
        cy.get(Locators.CreateGallery.Description).type('Crvena jabuka')
        cy.get(Locators.CreateGallery.ImageUrl).type('https://www.kudaukupovinu.rs/files/images/2016/1/27/jabuka(1).jpg')
        cy.get(Locators.CreateGallery.SubmitButton).click()
    })
    it('All galleries page', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test123123')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.AllGalleries).click()
        cy.get(Locators.AllGalleries.LoadMoreButton).click()
        cy.get(Locators.AllGalleries.Placeholder).type('gallery')
        cy.get(Locators.AllGalleries.FilterButton).click()
        cy.get(Locators.AllGalleries.SomeGallery).click()
        cy.get(Locators.AllGalleries.AddComment).type('Jako lepa slika')
        cy.get(Locators.AllGalleries.SubmitComment).click
    })
    it('Logout', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type('test123123')
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Header.Logout).click()
    
    })
    it('Login with faker - invalid credentials', () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(userData.randomEmail)
        cy.get(Locators.Login.Password).type(userData.randomPassword)
        cy.get(Locators.Login.Submit).click()
    })
    it('Register with faker - invalid credentials', () => {
        cy.get(Locators.Header.Register).click()
        cy.get(Locators.Register.FirstName).type(userData.randomName)
        cy.get(Locators.Register.LastName).type(userData.randomLastName)
        cy.get(Locators.Register.Email).type(userData.randomEmail)
        cy.get(Locators.Register.Password2).type(userData.randomPassword)
        cy.get(Locators.Register.ConfirmedPassword).type(userData.randomPassword)
        cy.get(Locators.Register.TermsAndConditions).check()
        cy.get(Locators.Register.SumbitReg).click()
    })
    
    
})
