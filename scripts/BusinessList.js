import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"
import { agentBusiness } from "./Business.js"
import { findBusiness } from "./BusinessProvider.js"
import { NewYorkBusinesses } from "./BusinessProvider.js"
import { manufacturingBusinesses } from "./BusinessProvider.js"
import { agentList } from "./BusinessProvider.js"

const contentTarget = document.querySelector(".businessList")
export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1 style='color: white; background-color: black'>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

const contentTarget2 = document.querySelector(".businessList--newYork")
export const NewYorkBusinessList = () => {
  contentTarget2.innerHTML = "<h1 style='color: white; background-color: black'>New York Businesses</h1>"

  NewYorkBusinesses.forEach(
    (businessObject) => {
        contentTarget2.innerHTML += Business(businessObject)
    }
);
}

const contentTarget3 = document.querySelector(".businessList--manufacturing")
export const manufacturingBusinessList = () => {
    contentTarget3.innerHTML = "<h1 style='color: white; background-color: black'>Manufacturing Businesses</h1>"
  
    manufacturingBusinesses.forEach(
      (businessObject) => {
          contentTarget3.innerHTML += Business(businessObject)
      }
  );
  }
  
const contentTarget4 = document.querySelector(".agents")
export const purchasingAgentList = () => {
    contentTarget4.innerHTML = "<h1 style='color: white; background-color: black'>Purchasing Agents</h1>"
  
    agentList.forEach(
      (businessObject) => {
          contentTarget4.innerHTML += agentBusiness(businessObject)
      }
  );
  }
  
  // Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */
            let searchName = keyPressEvent.target.value.toLowerCase()
            const foundBusiness = findBusiness(searchName)// implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h1 style='color: white; background-color: black'>Found Businesses</h1>
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.purchasingAgent.nameFirst} ${foundBusiness.purchasingAgent.nameLast}
                <section>
                ${foundBusiness.addressFullStreet}
                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });