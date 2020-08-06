
function generateTrip() {
    const tripTo = document.getElementById('trip_to');
    const departing = document.getElementById('departing');
    const errorCity = document.querySelector('.errorCity');
    const errorDate = document.querySelector('.errorDate');

    let itemsCounter = 0;
    let simpleCounter = 0;
    let tripCounter = 1;

    // PixAbay API
    const PxbaseURL = `https://pixabay.com/api/?`;
    const PxApiKey = '17728918-dd8b8443d18de70766d77c2d2';

    // WeatherBit API
    const BtbaseURL = ` https://api.weatherbit.io/v2.0/`;
    const BtApiKey = '5baa6d2a7ab942c8a61487eb50e488e2';
    // HTML templates
    const packingItemTemplate = `
    <span class="packing_item_name"></span>
    <i class="delItem far fa-times-circle"></i>
`

    const lodgingCard = ` 
        <h5>Lodging Info</h5> 
        <textarea name="lodging" id="" cols="30" rows="10"></textarea>
        <div class="editing_tools">
            <i class="far fa-edit"></i>
            <i class="far fa-save"></i>
        </div>
    `
    const tripsSection = document.getElementById('trips');

    const demoTrip = `
    <img class="corner_ribbon" src="../assets/images/CornerRibbon.png" alt="">
    <div class="trip_number_circle">
        <span class="trip_number"></span>
    </div>
    <div class="trip container">
                <div id="mainTripInfo">
                    <div class="trip_item1">
                        <!-- Trip details -->
                        <div class="primary_details">
                            <h3 class="trip_to">
                            <span class="description">My trip to:</span> <span class="timezone"></span>
                            </h3>
                            <h3><span class="description">Departing:</span> <span id="departing_date"></span></h3>
                            <div class="flight_info">
                                <h4><span class="description">flight info:</span></h4>
                                <div class="flight_info_text">
                                    Ord 3.00pm
                                    Flight 22 Udacity Air
                                    Ord 3.00pm
                                    Flight 44 Udacity Air
                                </div>
                            </div>
                        </div>
                        <div class="secondary_details">
                            <div class="flight_distance">
                                <i class="fas fa-road"></i>
                                <p>Paris, France is 220 days away</p>
                            </div>
                            <div class="destination_weather">
                                <i class="fas fa-cloud-sun-rain"></i>
                                <div class="typical_weather">
                                    <p>Typical weather for then is:</p>
                                </div>
                            </div>
                            <div class="">
                                <div id="dropdown">Temperature: 
                                <span class="weather_temp">
                                <div class="future_weather">
                                <h3>Next 16-days Weather forecast</h3>
                                </div>
                                </div>
                                </p>
                                <p class="weather_description"></p>
                            </div>
                        </div>
                    </div>
                    <div class="trip_item2">
                        <div class="destination_image">
                            <img id="location_img" src="" alt="">
                        </div>
                        <div class="buttons">
                            <button class="remove_btn"><i class="fas fa-minus-circle"></i>remove trip</button>
                        </div>
                    </div>
                </div>
                <div id="light-slider" class="lodging_packing_notes container">
                    <div class="lodging_info">
                        <h5>Lodging Info</h5>
                        <textarea class="lodgingText" name="lodging" id="" cols="30" rows="10" disabled></textarea>
                        <div class="editing_tools">
                            <i class="far fa-edit edit_lodging"></i>
                            <i class="far fa-save save_lodging save_lodging_notes"></i>
                        </div>
                    </div>
                    <div class="packing_list">
                        <h5>Packing List</h5>
                        <input type="text" class="enter_items" placeholder="Enter items(e.g. apple, banana, phone)" disabled>
                        <div class="packing_items">
                        </div>
                        <div class="editing_tools">
                            <i class="far fa-edit edit_items"></i>
                            <i class="far fa-save saveItems"></i>
                        </div>
                    </div>
                    <div class="notes">
                        <h5>Notes</h5>
                        <textarea class="notesText" name="notes" id="" cols="30" rows="10" disabled></textarea>
                        <div class="editing_tools">
                            <i class="far fa-edit edit_notes"></i>
                            <i class="far fa-save save_notes save_lodging_notes"></i>

                        </div>
                    </div> 
                </div>
            </div>`
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (tripTo.value === '') {
            console.log('Matched');
            errorCity.style.display = 'block';
            setTimeout(() => {
                errorCity.style.display = 'none';
            }, 2000);
        } else if (departing.value === '') {
            errorDate.style.display = 'block';
            setTimeout(() => {
                errorDate.style.display = 'none';
            }, 2000);
        } else {
            // Check if the date entered is valid
            const currentDate = new Date();
            const departDate = new Date(departing.value);

            if (departDate >= currentDate) {
                // Create a trip and display it in UI
                const div = document.createElement('div');
                div.classList.add('tripHolder');
                div.innerHTML = demoTrip;
                tripsSection.insertBefore(div, tripsSection.childNodes[0]);
                const trip = document.querySelector('.trip');
                setTimeout(() => {
                    trip.classList.add('hideTripInfo');
                }, 1);
                addItem();

                // Set the trip number in the corner
                const tripNumber = document.querySelector('.trip_number');
                tripNumber.innerHTML = tripCounter;


                // Fetch an image of the travel location
                fetch(`${PxbaseURL}key=${PxApiKey}&q=${tripTo.value}&image_type=photo&min_width=600px&min_height=450px`)
                    .then(res => {
                        return res.json();
                    })
                    .then(img => {
                        const location_img = document.getElementById('location_img');
                        location_img.setAttribute('src', `${img.hits[0].webformatURL}`);
                    })
                    .catch(err => {
                        console.log(err);
                    })

                // Decide if trip is in the future or within a week
                const timezone = document.querySelector('.timezone');
                const departingData = document.getElementById('departing_date');
                if (departDate.getMonth() === currentDate.getMonth() && departDate.getDate() - currentDate.getDate() <= 7) {
                    //The trip is within a week Fecth CURRENT weather Data
                    fetch(`${BtbaseURL}current?city=${tripTo.value}&key=${BtApiKey}`)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            const weatherTemp = document.querySelector('.weather_temp');
                            const weatherDesc = document.querySelector('.weather_description');
                            timezone.innerHTML = data.data[0].timezone;
                            weatherDesc.innerHTML = data.data[0].weather.description;
                            weatherTemp.innerHTML = data.data[0].temp
                            departingData.innerHTML = departing.value;
                        })

                } else {
                    //The trip is in the future, Fetch weather Forecast
                    fetch(`${BtbaseURL}forecast/daily?city=${tripTo.value}&key=${BtApiKey}`)
                        .then(res => {
                            return res.json();
                        })
                        .then(data => {
                            const dropdown = document.getElementById('dropdown');
                            const eyeIcon = document.createElement('i');
                            eyeIcon.setAttribute('class', 'fas fa-eye');
                            dropdown.appendChild(eyeIcon);
                            for (let i = 0; i < data.data.length; i++) {
                                const future_weather = document.querySelector('.future_weather');
                                let temp_holder = document.createElement('span');

                                temp_holder.innerHTML = `${i + 1}. Low temp:${data.data[i].low_temp}; High temp:${data.data[i].high_temp}`;
                                future_weather.appendChild(temp_holder);
                            }
                            timezone.innerHTML = data.timezone;
                            departingData.innerHTML = departing.value;
                        })


                }


                // remove trip
                const removeBtn = document.querySelector('.remove_btn');
                removeBtn.addEventListener('click', (e) => {
                    trip.classList.remove('hideTripInfo');
                    setTimeout(() => {
                        e.target.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
                        tripCounter--;
                    }, 500)
                })

            } else {
                // Display an error Invalid DATE for trip
            }
        }

        tripCounter++;
    });


    const addItem = () => {

        const editIcons = document.querySelectorAll('.fa-edit');
        const saveIcons = document.querySelectorAll('.save_lodging_notes');
        const saveItems = document.querySelector('.saveItems');
        const enterItemInput = document.querySelector('.enter_items');
        const lodgingText = document.querySelector('.lodgingText');
        const notesText = document.querySelector('.notesText');
        const packingItems = document.querySelector('.packing_items');

        for (let i = 0; i < editIcons.length; i++) {
            editIcons[i].addEventListener('click', (e) => {
                if (e.target.classList.contains("edit_items")) {
                    enterItemInput.removeAttribute('disabled');
                    enterItemInput.classList.add('undisabled');
                } else if (e.target.classList.contains("edit_lodging")) {
                    lodgingText.removeAttribute('disabled');
                    lodgingText.classList.add('undisabled');
                } else {
                    notesText.removeAttribute('disabled');
                    notesText.classList.add('undisabled');
                }
            });
        }

        saveItems.addEventListener('click', () => {
            if (enterItemInput.value === '') {
                // Display error
            } else {
                let packingItemsArray = enterItemInput.value.split(",");

                for (let i = 0; i < packingItemsArray.length; i++) {
                    let div = document.createElement('div');
                    div.classList.add('packing_item');
                    div.innerHTML = packingItemTemplate;
                    packingItems.appendChild(div);
                }
                const packing_item_names = document.querySelectorAll('.packing_item_name');

                for (let i = 0; i < packingItemsArray.length; i++) {
                    if (simpleCounter > 0) {
                        packing_item_names[itemsCounter + i].innerHTML = packingItemsArray[i];
                    } else {
                        packing_item_names[i].innerHTML = packingItemsArray[i];
                    }
                }

                enterItemInput.value = '';
                enterItemInput.setAttribute('disabled', '');
                enterItemInput.classList.remove('undisabled');
                simpleCounter++;
                itemsCounter = packing_item_names.length;

                // Remove Item in Packing List
                const delItems = document.querySelectorAll('.delItem');
                delItems.forEach(delItem => {
                    delItem.addEventListener('click', (e) => {
                        e.target.parentElement.remove();
                    })
                })
            }
        })

        // Save lodging Info and NOTES separately from Items
        for (let i = 0; i < saveIcons.length; i++) {
            saveIcons[i].addEventListener('click', (e) => {
                if (e.target.classList.contains('save_lodging')) {
                    lodgingText.setAttribute('disabled', '');
                    lodgingText.classList.remove('undisabled');
                } else {
                    notesText.setAttribute('disabled', '');
                    notesText.classList.remove('undisabled');
                }
            })
        }

    }


}

export { generateTrip };