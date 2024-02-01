
const recApiKey = `Pp3wBK5nbXNBnkeA5NQT3XgcxEJ7jD1Q02IE23Cq`

let button = document.querySelector("#submitButton")

let apiLimit = 52;
let apiStart = 0;

let parkStorage = [];

let textInput = document.querySelector('#textInput')
button.addEventListener('click', async () => {
   
   let parkListContainer = document.getElementById("parks")
   parkListContainer.innerHTML = ""

   let apiQuery = textInput.value;

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
         newPark.innerHTML = `<span class="cursive">Park Name :  </span>${response.data.data[a].fullName}</br> <span class="images"><img src="${response.data.data[a].images[0].url}"></span></br><span class="cursive">Hours: </span> ${response.data.data[a].operatingHours[0].standardHours.monday}`
         
      
      
      
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


})