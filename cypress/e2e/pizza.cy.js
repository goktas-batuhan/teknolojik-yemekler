describe('Siparis Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/order')
  })
  it("inputa bir metin giren test", () => {
    const testNotu = "test"
    cy.get(`textarea[name="siparisNotu"]`).type(testNotu).should("have.value", testNotu)
  })
  it("birden fazla malzeme testi", () => {
    const testTopping = ["Sucuk", "Soğan", "Pepperoni"]
    testTopping.forEach((elm) => {
      cy.get(`input[type="checkbox"][value="${elm}"]`).check().should("be.checked")
    })
  })
  it("form doldurulup gönderiliyor mu?", () => {
    cy.get('label[for="boyutS"]').click()
    cy.get('#boyutS').should('be.checked')
    cy.get(`select#hamur`).select("Normal")
    const testTopping = ["Sucuk", "Soğan", "Mısır", "Pepperoni"]
    testTopping.forEach((elm) => {
      cy.get(`input[type="checkbox"][value="${elm}"]`).check().should("be.checked")
    })
    const testNotu = "test"
    cy.get(`textArea[name="siparisNotu"]`).type(testNotu).should("have.value", testNotu)
    cy.get(`button[type="submit"]`).click()
  })
})