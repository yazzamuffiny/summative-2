/* jshint esversion: 6 */

const properties = [
    {
        id: 1,
        name: "Parauwanui Beach Getaway",
        location: "1824 Pataua North Road, Whangārei 0175",
        beachName: "Parauwanui Beach",
        description: "Welcome to Parauwanui Beach Getaway, where luxury meets coastal charm on the stunning shores of Ngunguru Bay. Our boutique hotel offers a haven of relaxation and sophistication, with each room elegantly appointed and thoughtfully designed to maximize comfort and ocean views. Enjoy waking up to the sound of waves crashing on the pristine beach just steps away. Indulge in locally sourced cuisine at our restaurant overlooking the Pacific Ocean or unwind with a cocktail at our stylish beachfront bar. Whether you're seeking adventure or tranquility, Parauwanui Beach Getaway promises a rejuvenating escape amidst nature's beauty.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "Surf Friendly",
        longitude: 174.51953345517197,
        latitude: -35.70839431334712, 
        image: "../imgs/hotel1.webp",
    },
    {
        id: 2,
        name: "Matauri Bay Backpackers",
        location: "Matauri Bay Road, Matauri Bay 0478",
        beachName: "Matauri Bay",
        description: "Welcome to Matauri Bay Backpackers, your laid-back haven nestled in the stunning Matauri Bay on New Zealand's Northland coast. Embrace the spirit of adventure and relaxation at our hostel, just a short walk from the white sands and crystal-clear waters of Matauri Bay Beach. Choose from comfortable dormitory-style rooms or private cabins, all equipped with modern amenities and surrounded by lush greenery. Socialize with fellow travelers in our communal lounge or outdoor BBQ area, or unwind on our sunny deck with views of the Pacific Ocean. Explore nearby attractions like the historic Rainbow Warrior memorial or indulge in water sports and hiking adventures. Matauri Bay Backpackers invites you to experience the beauty and charm of Northland in a welcoming and affordable setting.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "Snorkeling, Fishing",
        longitude: 173.91551587106483,
        latitude: -35.02795539267217,
        image: "../imgs/hostel1.webp",
    },
    {
        id: 3,
        name: "Ahipara Motel",
        location: "245 Foreshore Road, Ahipara 0481",
        beachName: "Ahipara Beach",
        description: "Nestled in the tranquil coastal town of Ahipara, our motel offers a perfect retreat with breathtaking views of Ninety Mile Beach. Ahipara Motel combines modern comfort with a touch of Kiwi hospitality, featuring well-appointed rooms equipped with amenities like free Wi-Fi and flat-screen TVs. Ideal for adventurers, surfers, and families, we're just moments away from the beach and local attractions, ensuring a memorable stay. Relax on your private balcony, explore nearby hiking trails, or unwind in our garden. Whether you're here to surf the legendary waves or simply soak in the serene atmosphere, Ahipara Motel promises an unforgettable Northland experience.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "Kid Friendly, Vehicle Access, Surf Friendly",
        longitude: 173.15571301435372,
        latitude: -35.16341860466816,
        image: "../imgs/motel1.webp",
    },
    {
        id: 4,
        name: "Maitai Bay Holiday Home",
        location: "Karikari Peninsula 0483",
        beachName: "Maitai Bay",
        description: "Welcome to our idyllic holiday home at Maitai Bay, a serene haven on the pristine shores of the Karikari Peninsula. Nestled amidst native bush, our retreat offers panoramic views of turquoise waters and golden sands. The spacious, tastefully furnished house features a fully equipped kitchen, comfortable bedrooms, and a cozy living area with expansive windows framing the ocean vista. Step outside to a sun-drenched deck for al fresco dining or stargazing by night. Just a short stroll to the beach, indulge in snorkeling, fishing, or beachcombing. Perfect for families or romantic getaways, Maitai Bay promises tranquility and natural beauty at its finest.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "Kid Friendly, Snorkeling",
        longitude: 173.40753253758675,
        latitude: -34.82910899451047, 
        image: "../imgs/house1.webp",
    }
];


$(document).ready(function () {
    // Fullpage Init:
    new fullpage("#fullpage", {
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: false,
        fixedElements: "#navbar",
    });

    fullpage_api.setAllowScrolling(true);

    // MapBox Init:
    mapboxgl.accessToken = "pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA";

    function initaliseMap(longitude, latitude) {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [longitude, latitude],
            zoom: 13
        });

        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
    }

    // Swiper Init:
    let swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });

//TRY THIS LATERRRRR
    // $("#slide1").on("scroll", function() {
    //     let value = $(this).scrollTop();

    //     $('#scrollText').css('marginTop', value * 2.5 + 'px');
    //     $('#waves2').css('top', value * 0.5 + 'px');
    //     $('#waves3').css('left', value * -1.5 + 'px');
    //     $('#waves4').css('left', value * 1.5 + 'px');
    // });



    // Validate Filters/Form
    function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if ($('#startDate').val() === "") {
            isValid = false;
            errorMessage += "Please select a start date.<br>";
        }
        if ($('#endDate').val() === "") {
            isValid = false;
            errorMessage += "Please select an end date.<br>";
        }

        if (!isValid) {
            $("#errorMessage").html(errorMessage).show();
        } else {
            $("#errorMessage").hide();
        }

        return isValid;
    }


    // DatePickers:
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });


    //Calculate Days Staying Function
    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            // convert to days:
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }

    //sort functions
    //sort books by price high to low
    function sortGamesHighToLow(properties) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceB - priceA;
        });
    }
    //sort books by price low to high
    function sortGamesLowToHigh(properties) {
        return games.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceA - priceB;
        });
    }

    function filterAndDisplayProperties() {
        const guests = $("#guests").val();
        const accommodation = $("#accommodation").val();
        const beach = $("#beach").val();
        const diffDays = calculateDays();

        const filteredProperties = properties.filter(property => {
            return (property.peopleMin <= guests) &&
                (property.peopleMax >= guests) &&
                (property.accommodationType === accommodation || accommodation === "") &&
                (property.beachType === beach || beach === "") &&
                (property.minStay <= diffDays) &&
                (property.maxStay >= diffDays);
        });

        populateResults(filteredProperties);
    }

    //populate cards function
    function populateResults(filteredResults) {
        $("#results").html("");
        if (filteredResults.length === 0) {
            $("#results").append(`<p class="no-results">No Results Found</p>`);
        } else {
            // if filtered results is not empty
            filteredResults.forEach(property => {
                //create a card for that property
                const card = `
                    <div class="property-card" data-id="${property.id}"> 
                            <img src="${property.image}" alt="${property.name} image" class="card-image">
                        <div class="card-info">
                            <h2>${property.name}</h2>
                            <h4>${property.price}</h4>
                        </div>                    
                        <div class="card-bottom ">
                            <h6>Qualmark</h6>
                        </div>
                    </div>
            `;
                $("#results").append(card);
            });
        }
        fullpage_api.reBuild();

        $(".property-card").click(function () {
            const propertyId = $(this).data('id');
            populateSelectedOutput(propertyId);
            fullpage_api.moveTo(1, 2);
        });

    }


    // Search Button Click:
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            fullpage_api.moveTo(1, 1);
            filterAndDisplayProperties();
        }
    });

    function populateSelectedOutput(selectedId) {
        const outputDiv = $("#selectedOutput");

        const detailsPage = `
            <div class="details">
                <h1>${properties[selectedId - 1].name}</h1>
                <h4>${properties[selectedId - 1].location}</h4>
                <div class="description">
                    <p>${properties[selectedId - 1].description}</p>
                    <div class="beach-details">
                        <h3>${properties[selectedId - 1].beachName}</h3>
                        <p>${properties[selectedId - 1].beachType}</p>
                    </div>
                    <div class="swiper">
                        <!-- Additional required wrapper -->
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 1"></div>
                            <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 2"></div>
                            <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 3"></div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                    <h3>Estimated Cost</h3>
                    <div class="cost-container">
                        <div class="nights-staying"></div>
                        <div class="menu-selection"></div>
                        <div class="calculate"></div>
                    </div>
                    <h3>Location</h3>
                    <div id="map"></div>
                    <div class="details-buttons-container"></div>
                </div>
            </div>
        `;
        const longitude = properties[selectedId - 1].longitude;
        const latitude = properties[selectedId - 1].latitude;
        outputDiv.empty();
        outputDiv.append(detailsPage);
        initaliseMap(longitude, latitude);
    }


    //end js
});