let input = document.getElementById("input")
let button = document.querySelector("#button")
let in_div = document.querySelector(".div")
let creat_div = document.createElement("div")
let del = document.getElementById("del")
async function fetch_data(input) {
    const api_key = "2cac4146a63290e505876ec70bdf0f41"
    const ur_l = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}`
    let responce = await fetch(ur_l + `&appid=${api_key}`)
    let data = await responce.json()
    if(responce.ok){
        console.log(responce.status);
      
    }
    else{
       alert("Enter The Right City Name")
    }
    return data
}
async function img(image) {
let responce= await fetch(`https://openweathermap.org/img/wn/${image}@2x.png`)
let data=await responce.blob()
let url = URL.createObjectURL(data)
console.log(image);
return url
}
let data_info = async () => {
    let x = await fetch_data(input.value)
   
    let { name: City, main: { temp: t1, humidity: h1 }, weather: [{ description: d1 ,icon:ic}] } = x//destructring of data
    let i=await img(ic)
    in_div.append(creat_div)
    creat_div.classList.add("div1")
    const image = "https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
    const image2 = "themp.svg"
    let info = `<h2 id="id">City: ${City}</h2>
   <h2 style="color:orange;">Temp: ${t1}­°C<img src="g.gif" width="36" style="border-radius: 35px;"></h2></h2>
   <h2 style="color:blue;">Humidity: ${h1} <img src="wind.gif" width="30" 
    style="border-radius: 30px;"></h2>
    <h2 style="color:yellow;">Weather: ${d1} <div class="im1"><img src="${i}" width="100" height="100" style="border-radius: 30px;"></div></h2>`
    creat_div.innerHTML = info
}
let del_t = () => {
    input.value = ""

}
button.addEventListener("click", () => {
    data_info()
    document.querySelector(".card").style.height = "80vh"
    document.getElementsByTagName("input")[0].style.height = "6%"

})
del.addEventListener(("click"), () => {
    del_t()
})




