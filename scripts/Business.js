export const Business = (businessObject) => {
  return `
      <section class="business">
          <h2 class="business__name">${businessObject.companyName}</h2>
          <div class="business__address1">${businessObject.addressFullStreet}</div>
          <div class="business__address2">${businessObject.addressCity}</div>
      </section>
      <hr>
  `
}

export const agentBusiness = (businessObject) => {
  return `
      <section class ="business">
          <h2 class="business__agent">${businessObject.fullName}</h2>
          <div class="business__name">${businessObject.companyName}</div>
          <div class="business__phoneNumber">${businessObject.phoneWork}</div>
      </section>
      <hr>
  `
}