const myApi = `aa47a8b8f9be4ccf24c17a8e4378816f`;

const searchTemperature = () => {
    const input = document.getElementById('city-name').value;
    const url = (`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myApi}&units=metric`);
    fetch(url)
        .then(Request => Request.json())
        .then(data => myData(data))


}

const getCity = (id, city) => {
    document.getElementById(id).innerText = city;

}

const myData = (item) => {
    getCity('city', item.name)
    getCity('temp', item.main.temp)
    getCity('wather', item.weather[0].main)

    // set icon
    const srcimage = (`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`);
    let img = document.getElementById('image');
    img.setAttribute('src', srcimage);



    console.log(item);


}
