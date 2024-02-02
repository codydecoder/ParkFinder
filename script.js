
const recApiKey = `Pp3wBK5nbXNBnkeA5NQT3XgcxEJ7jD1Q02IE23Cq`

let button = document.querySelector("#submitButton")

let apiLimit = 50;
let apiStart = 0;

let parkStorage = [];

let textInput = document.querySelector('#textInput')
button.addEventListener('click', async () => {
   
   let parkListContainer = document.getElementById("parks")
   parkListContainer.innerHTML = ""

   let apiQuery = textInput.value;

    let apiCall = 0;

   let response = await axios.get(`https://developer.nps.gov/api/v1/parks?limit=50&start=0&q=${apiQuery}&api_key=${recApiKey}`)
   for(let i = 0; i < response.data.data.length; i++) {
      console.log(response.data.data[i].fullName)
      parkStorage.push(response.data.data[i])

   }
   console.log(response)

   //DOM Manip
   for(let a = 0; a < response.data.data.length; a++) {
      
      //let parkListContainer = document.getElementById("parks")
      
   
         const newPark = document.createElement('li')
         parkListContainer.appendChild(newPark)
         /**/newPark.innerHTML = `<span class="cursive">Park Name :  </span>${response.data.data[a].fullName}</br> <img class="apiImages" src="${response.data.data[a].images[0].url}"></br><span class="cursive">Hours: </span> ${response.data.data[a].operatingHours[0].standardHours.wednesday}</br><span class="cursive">Address: </span>${response.data.data[a].addresses[0].line1}, ${response.data.data[a].addresses[0].city}, ${response.data.data[a].addresses[0].stateCode} ${response.data.data[a].addresses[0].postalCode}</br><span class="cursive">Website: </span><a href="${response.data.data[a].url}">${response.data.data[a].url}</a></br><span class="cursive">Phone Number: </span>${response.data.data[a].contacts.phoneNumbers.length > 0 ? response.data.data[a].contacts.phoneNumbers[0].phoneNumber : "None available"}`
         
      
      
      
      /*const newPark = {
         newItem: ,
         newPicture: null,
         newHours: null,
      }*/

      /*newItem.textContent = response.data.data[a].fullName
      newPicture.innerHTML = `<img src="${response.data.data[a].images}">`
      parkListContainer.appendChild(newItem)
      parkListContainer.appendChild(newPicture)*/

      
   }

   apiCall = (apiCall + 1)
})

