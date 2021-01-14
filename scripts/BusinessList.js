import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"
import { NewYorkBusinesses } from "./BusinessProvider.js"
import { manufacturingBusinesses } from "./BusinessProvider.js"

const contentTarget = document.querySelector(".businessList")
export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}

const contentTarget2 = document.querySelector(".businessList--newYork")
export const NewYorkBusinessList = () => {
  contentTarget2.innerHTML = "<h1>New York Businesses</h1>"

  NewYorkBusinesses.forEach(
    (businessObject) => {
        contentTarget2.innerHTML += Business(businessObject)
    }
);
}

const contentTarget3 = document.querySelector(".businessList--manufacturing")
export const manufacturingBusinessList = () => {
    contentTarget3.innerHTML = "<h1>Manufacturing Businesses</h1>"
  
    manufacturingBusinesses.forEach(
      (businessObject) => {
          contentTarget3.innerHTML += Business(businessObject)
      }
  );
  }
  