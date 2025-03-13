function katham() {
    go.innerHTML = " "
    console.log("");
}
var go = document.getElementById('go')
function just(just1) {
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
            let g = b.title.split(" ")
            for (var i = 0; i < g.length; i++) {
                if (g[i] == just1){
                    if (go) {
                        go.innerHTML += `
                                    <a  class="fetch w-100" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                                        <div class="job mb-3">
                                            <div class="row container">
                                                <div class="d-flex">
                                                    <div class="">
                                                        <img src="${b.img}" width="50px">
                                                    </div>
                                                    <div class="d-flex justify-content-between align-items-center w-100">
                                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                                    </div>
                                                </div>
                                            <div class="row">
                                                <div class="d-flex ">
                                                    <span class="fa-solid fa-location-dot"></span>
                                                    <p class="">${b.location}</p>
                                                </div>   
                                            </div>
                                            <div class="row">
                                                <div class="d-flex ">
                                                    <span class="fa-solid fa-money-bill-wave"></span>
                                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                                </div>
                                            </div>
                                                <div class="d-flex">
                                                    <p class="me-3">${b.work_type}</p>
                                                    <p class="me-3">${b.work_mode}</p>
                                                    <p class="me-3">${b.experirence}</p>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                
                                <!-- application form -->
                                <div class="offcanvas offcanvas-bottom w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div class="apply-job">
                                            <div class="row container">
                                                <div class="d-flex">
                                                    <div class="">
                                                        <img src="${b.img}" width="50px">
                                                    </div>
                                                <div class="d-flex justify-content-between align-items-center w-100">
                                                    <div>
                                                        <h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="d-flex ">
                                                    <span class="fa-solid fa-location-dot"></span>
                                                    <p class="">${b.location}</p>
                                                </div>   
                                            </div>
                                            <div class="row">
                                                <div class="d-flex ">
                                                    <span class="fa-solid fa-money-bill-wave"></span>
                                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <p class="me-3">${b.work_type}</p>
                                                <p class="me-3">${b.work_mode}</p>
                                                <p class="me-3">${b.experirence}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button class="btn btn-info">Apply for job</button>
                                        </div>
                                        <div class="mt-2 job-description">
                                            <h4>Job Description:</h4>
                                            <p>${b.description}</p>
                                        </div>
                                    </div>
                                </div>`
                    }
                }
            }
        })
    })
}



var availableCompany = ["Swiggy", "HDFC Bank", "Tech Mahindra", "Zepto", "TelePerformance", "Karur Vysya", "L&T", "Sutherland", "Wipro", "Paytm", "LIC", "Flipkart", "Aditya Birla capital Limited", "PhonePe", "Startek", "Bharti Axa Life insurance Company Limited", "Icici Lombard", "Lenskart", "Innovsource services Pvt Ltd", "Cultfit", "Max Life Insurance", "Airtel", "Creative Hands HR Consultancy", "Bajaj Capital", "Intellihealth Solutions Private Limited", "TCS TextTiles Pvt Ltd (The Chennai Silks)", "Chaipoint", "Careergate Solutions", "Third Wave Coffee", "Zomato", "USDC Global", "Matrimony", "KAP Call center Pvt Ltd", "Meesho", "Ninjacart", "InsatMart", "Dream Consulting", "Landmark Group", "Vision 360", "Sunshine Manpower Solutions", "Burger King India Limited", "Jalan Infrastructure", "Just Dial", "Teamlease Services Pvt Ltd", "CarX", "NPS Hospitality"]
var availableLocation = ["Chennai", "Delhi", "Kolkata", "Mumbai", "Lacknow", "Bengaluru", "Kerala", "Hyderabad"]

var resultbox = document.getElementById('result')
var inputbox = document.getElementById('input_box')

var inputbox_1 = document.getElementById('input_box_1')
var resultbox_1 = document.getElementById('result_1')
// search job in index
if (inputbox) {

    inputbox.onkeyup = function () {
        resultbox.style.maxHeight = "220px"
        resultbox.style.overflowY = "hidden"
        resultbox.style.overflowY = "scroll"
        resultbox.innerHTML = " "
        var result = [];
        var input = inputbox.value
        if (input.length) {
            result = availableCompany.filter((key) => {
                return key.toLowerCase().includes(input.toLowerCase());
            })
            screen(result);
        }
        if (!input.length) {
            resultbox.innerHTML = " "
        }
    }
}

function screen(result) {
    const one = result.map((a) => {
        resultbox.innerHTML += `<li onclick="displaysearch(this)">${a}</li>`

    })

}

function displaysearch(list) {
    inputbox.value = list.innerHTML
    resultbox.innerHTML = ' '
}
// search location in index
if (inputbox_1) {

    inputbox_1.onkeyup = function () {
        resultbox_1.style.maxHeight = "220px"
        resultbox_1.style.overflowY = "hidden"
        resultbox_1.style.overflowY = "scroll"
        resultbox_1.innerHTML = " "
        var result_1 = []
        var input_1 = inputbox_1.value
        if (input_1.length) {
            result_1 = availableLocation.filter((word) => {
                return word.toLowerCase().includes(input_1.toLowerCase())
            })
            screen_1(result_1)
        }
        if (!input_1.length) {
            resultbox_1.innerHTML = " "
        }
    }
}
function screen_1(result_1) {
    const two = result_1.map((a) => {
        resultbox_1.innerHTML += `<li onclick="displaylocation(this)">${a}</li>`

    })
}
function displaylocation(list_1) {
    inputbox_1.value = list_1.innerHTML
    resultbox_1.innerHTML = ' '
}

function oone(into) {
    into.innerText = " "
}

var onetwo = document.getElementById('onetwo')
function funfun(one, two, three) {
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
            if (one.value == b.company_name) {
                if (three.value == b.location) {
                    if (two.value = b.experirence) {
                        onetwo.innerHTML += `
                        <div class="row">
                        <div class="d-none d-lg-block col-lg-4 d-md-block col-md-4">
                        <div class="filter m-4">
                            <div class="p-2">
                                <div class=" d-flex justify-content-between" id="date-posted">
                                    <b>Date Posted</b>
                                    <span class="fa-solid fa-angle-up " id="filter-date"></span>
                                </div>
                                <div class="" id="date-posted-1">
                                    <hr>
                                    <input type="checkbox" name="" id="last-24-hours"> <label for="last-24-hours">Last 24
                                        Hours</label><br>
                                    <input type="checkbox" name="" id="last-3-days"> <label for="last-3-days">Last 3
                                        Days</label><br>
                                    <input type="checkbox" name="" id="last-7-days"> <label for="last-7-days">Last 7
                                        Days</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter m-4">
                            <div class="p-2">
                                <div class=" d-flex justify-content-between " id="location">
                                    <b>Location</b>
                                    <span class="fa-solid fa-angle-up " id="filter-location"></span>
                                </div>
                                <div class="" id="location-1">
                                    <hr>
                                    <input type="checkbox" name="" id="channai"> <label for="channai">TamilNadu</label><br>
                                    <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Mumbai</label><br>
                                    <input type="checkbox" name="" id="delhi"> <label for="delhi">Delhi</label><br>
                                    <input type="checkbox" name="" id="kolkata"> <label for="kolkata">Kolkata</label><br>
                                    <input type="checkbox" name="" id="hyderabad"> <label for="hyderabad">Hyderabad</label><br>
                                    <input type="checkbox" name="" id="karnataka"> <label for="karnataka">Karnataka</label><br>
                                    <input type="checkbox" name="" id="gujarat"> <label for="gujarat">Gujarat</label><br>
                                    <div class="d-flex justify-content-center" onclick="more(view_1)">
                                        <span class="filter-more"><button class="filter-more"><b>View More</b></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter filter-location m-4" id="view_1">
                            <div class="p-2">
                                <div class=" d-flex justify-content-between " id="location">
                                    <b>Location</b>
                                    <span class="fa-solid fa-close " id="filter-location"onclick="more_close(view_1)"></span>
                                </div>
                                <div class="" id="location-1">
                                    <hr>
                                    <div class="d-flex justify-content-around">
                                        <div>
                                            <input type="checkbox" name="" id="channai"> <label for="channai">Chennai</label><br>
                                            <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Mumbai</label><br>
                                            <input type="checkbox" name="" id="delhi"> <label for="delhi">Delhi</label><br>
                                            <input type="checkbox" name="" id="kolkata"> <label for="kolkata">Kolkata</label><br>
                                            <input type="checkbox" name="" id="hyderabad"> <label for="hyderabad">Hyderabad</label><br>
                                            <input type="checkbox" name="" id="karnataka"> <label for="karnataka">Bengaluru</label><br>
                                            <input type="checkbox" name="" id="gujarat"> <label for="gujarat">Gujarat</label><br>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id="channai"> <label for="channai">Pune</label><br>
                                            <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Gurugram</label><br>
                                            <input type="checkbox" name="" id="delhi"> <label for="delhi">Noida</label><br>
                                            <input type="checkbox" name="" id="kolkata"> <label for="kolkata">Coimbatore</label><br>
                                            <input type="checkbox" name="" id="hyderabad"> <label for="hyderabad">Ahmedabad</label><br>
                                            <input type="checkbox" name="" id="karnataka"> <label for="karnataka">Jaipur</label><br>
                                            <input type="checkbox" name="" id="gujarat"> <label for="gujarat">Thiruvananthapuram</label><br>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="" id="channai"> <label for="channai">Indore</label><br>
                                            <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Nagpur</label><br>
                                            <input type="checkbox" name="" id="delhi"> <label for="delhi">Madurai</label><br>
                                            <!-- <input type="checkbox" name="" id="kolkata"> <label for="kolkata"></label><br> -->
                                            <!-- <input type="checkbox" name="" id="hyderabad"> <label for="hyderabad"></label><br>
                                            <input type="checkbox" name="" id="karnataka"> <label for="karnataka"></label><br>
                                            <input type="checkbox" name="" id="gujarat"> <label for="gujarat"></label><br> -->
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <input type="button" value="Apply" class="apply">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter m-4">
                            <div class="p-2">
                                <div class="d-flex justify-content-between" id="work-mode">
                                    <b>Salary</b>
                                    <span class="fa-solid fa-angle-up filter-show" id="filter-workmode"></span>
                                </div>
                                <div class="" id="work-mode-1">
                                    <hr>
                                    <input type="checkbox" name="" id="0-5"> <label for="0-5">0-5 lakhs</label><br>
                                    <input type="checkbox" name="" id="5-10"> <label for="5-10">5-10 lakhs</label><br>
                                    <input type="checkbox" name="" id="10-15"> <label for="10-15">10-15 lakhs</label><br>
                                    <input type="checkbox" name="" id="15-20"> <label for="15-20">15-20 lakhs</label><br>
                                    
                                    <div class="d-flex justify-content-center" onclick="more(view_2)">
                                        <span class="filter-more"><button class="filter-more"><b>View More</b></button></span>
                                    </div>
                                </div>
                               
                                
                            </div>
                        </div>
                        <div class="filter filter-sal p-3" id="view_2">
                            <div>
                                <div class="d-flex justify-content-between">
                                    <b>Salary</b>
                                    <span class="fa-solid fa-close" id="close-filter" onclick="more_close(view_2)"></span>
                                </div>
                                <div>
                                    <hr>
                                    <input type="checkbox" name="" id="0-5-l"> <label for="0-5-l">0-5 lakhs</label><br>
                                    <input type="checkbox" name="" id="5-10-l"> <label for="5-10-l">5-10 lakhs</label><br>
                                    <input type="checkbox" name="" id="10-15-l"> <label for="10-15-l">10-15 lakhs</label><br>
                                    <input type="checkbox" name="" id="15-20-l"> <label for="15-20-l">15-20 lakhs</label><br>
                                    <input type="checkbox" name="" id="20-25-l"> <label for="20-25-l">20-25 lakhs</label><br>
                                    <input type="checkbox" name="" id="25-50-l"> <label for="25-50-l">25-50 lakhs</label><br>
                                    <input type="checkbox" name="" id="50-75-l"> <label for="50-75-l">50-75 lakhs</label><br>
                                    <input type="checkbox" name="" id="75-100-l"> <label for="75-100-l">75-100 lakhs</label><br>
                                    <div class="d-flex justify-content-end">
                                        <input type="button" value="Apply" class="apply">   
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter m-4">
                            <div class="p-2">
                                <div class="d-flex justify-content-between" id="work-type">
                                    <b>Work Type</b>
                                    <span class="fa-solid fa-angle-up filter-show" id="filter-worktype"></span>
                                </div>
                                <div class="" id="work-type-1">
                                    <hr>
                                    <input type="checkbox" name="" id="f-time"> <label for="f-time">Full time</label><br>
                                    <input type="checkbox" name="" id="p-time"> <label for="p-time">Part time</label><br>
                                </div>
                            </div>
                        </div>
                        <div class="filter m-4">
                            <div class="p-2">
                                <div class="d-flex justify-content-between" id="work-mode">
                                    <b>Work Mode</b>
                                    <span class="fa-solid fa-angle-up filter-show" id="filter-workmode"></span>
                                </div>
                                <div class="" id="work-mode-1">
                                    <hr>
                                    <input type="checkbox" name="" id="wfh"> <label for="wfh">Work from home</label><br>
                                    <input type="checkbox" name="" id="wfo"> <label for="wfo">Work from office</label><br>
                                    <input type="checkbox" name="" id="wff"> <label for="wff">Work from field</label><br>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="d-lg-none d-md-none">
                        <div class="p-3 d-flex align-items-center ">
                            <div class="p-1">
                                <span class="fa-solid fa-filter"></span>
                            </div>
                            <div class="d-flex filter-mobile">
                                <span><button class="filter-btn-mobile" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Date Posted <span
                                            class="fa-solid fa-angle-down"></span></button> </span>
                                <span><button class="filter-btn-mobile" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Location <span
                                            class="fa-solid fa-angle-down"></span></button> </span>
                                <span><button class="filter-btn-mobile" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Salary <span
                                            class="fa-solid fa-angle-down"></span></button> </span>
                                <span><button class="filter-btn-mobile" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Work Type <span
                                            class="fa-solid fa-angle-down"></span></button> </span>
                                <span><button class="filter-btn-mobile" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Work Mode <span
                                            class="fa-solid fa-angle-down"></span></button> </span>
                            </div>
                        </div>
                    </div>
        
                    <div class="offcanvas offcanvas-bottom rounded h-100" tabindex="-1" id="offcanvasBottom"
                        aria-labelledby="offcanvasBottomLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasBottomLabel">All Filters</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        
                        </div>
                        
                        <div class="">
                            <div class="row">
                                <hr>
                                <div class="col-4 p-1">
                                    <div class="d-flex-col">
                                        <button class="filter-sm text-start  w-100" id="data_posted_sm"> Date Posted</button>
                                        <button class="filter-sm text-start  w-100" id="location_sm"> Location</button>
                                        <button class="filter-sm text-start  w-100" id="salary_sm"> Salary</button>
                                        <button class="filter-sm text-start  w-100" id="work_type_sm"> Work Type</button>
                                        <button class="filter-sm text-start  w-100" id="work_mode_sm"> Work Mode</button>
                                    </div>
                                </div>
        
                                <div class="col-8 mb-2 filter-display-sm" >
                                    <div class=" " id="date_posted_filter">
        
                                        <input type="checkbox" name="" id="last-24-hours"> <label for="last-24-hours">Last 24
                                            Hours</label><br>
                                        <input type="checkbox" name="" id="last-3-days"> <label for="last-3-days">Last 3
                                            Days</label><br>
                                        <input type="checkbox" name="" id="last-7-days"> <label for="last-7-days">Last 7
                                            Days</label>
                                    </div>
                                    <div class="" id="location_filter">
                                        <input type="checkbox" name="" id="channai"> <label for="channai">Chennai</label><br>
                                        <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Mumbai</label><br>
                                        <input type="checkbox" name="" id="delhi"> <label for="delhi">Delhi</label><br>
                                        <input type="checkbox" name="" id="kolkata"> <label for="kolkata">Kolkata</label><br>
                                        <input type="checkbox" name="" id="hyderabad"> <label
                                            for="hyderabad">Hyderabad</label><br>
                                        <input type="checkbox" name="" id="karnataka"> <label
                                            for="karnataka">Bengaluru</label><br>
                                        <input type="checkbox" name="" id="gujarat"> <label for="gujarat">Gujarat</label><br>
                                        <input type="checkbox" name="" id="channai"> <label for="channai">Pune</label><br>
                                        <input type="checkbox" name="" id="mumbai"> <label for="mumbai">Gurugram</label><br>
                                        <input type="checkbox" name="" id="delhi"> <label for="delhi">Noida</label><br>
                                        <input type="checkbox" name="" id="kolkata"> <label for="kolkata">Coimbatore</label><br>
                                        <input type="checkbox" name="" id="hyderabad"> <label
                                            for="hyderabad">Ahmedabad</label><br>
                                        <input type="checkbox" name="" id="karnataka"> <label for="karnataka">Jaipur</label><br>
                                        <input type="checkbox" name="" id="gujarat"> <label
                                            for="gujarat">Thiruvananthapuram</label><br>
                                    </div>
                                    <div class="" id="salary_filter">
                                        <input type="checkbox" name="" id="0-5-l"> <label for="0-5-l">0-5 lakhs</label><br>
                                        <input type="checkbox" name="" id="5-10-l"> <label for="5-10-l">5-10 lakhs</label><br>
                                        <input type="checkbox" name="" id="10-15-l"> <label for="10-15-l">10-15 lakhs</label><br>
                                        <input type="checkbox" name="" id="15-20-l"> <label for="15-20-l">15-20 lakhs</label><br>
                                        <input type="checkbox" name="" id="20-25-l"> <label for="20-25-l">20-25 lakhs</label><br>
                                        <input type="checkbox" name="" id="25-50-l"> <label for="25-50-l">25-50 lakhs</label><br>
                                        <input type="checkbox" name="" id="50-75-l"> <label for="50-75-l">50-75 lakhs</label><br>
                                        <input type="checkbox" name="" id="75-100-l"> <label for="75-100-l">75-100 lakhs</label><br>
                                    </div>
                                    <div class="" id="work_type_filter">
                                        <input type="checkbox" name="" id="f-time"> <label for="f-time">Full time</label><br>
                                        <input type="checkbox" name="" id="p-time"> <label for="p-time">Part time</label><br>
                                    </div>
                                    <div class="" id="work_mode_filter">
                                        <input type="checkbox" name="" id="wfh"> <label for="wfh">Work from home</label><br>
                                        <input type="checkbox" name="" id="wfo"> <label for="wfo">Work from office</label><br>
                                        <input type="checkbox" name="" id="wff"> <label for="wff">Work from field</label><br>
                                    </div>
                                </div>
                            </div>
                            <div class="row w-100">
                                <div class="d-flex justify-content-between ">
                                    <div>
                                        <button class="btn btn-info">Clear</button>
                                    </div>
                                    <div>
                                        <button class="btn btn-info">Apply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                        <a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                            <div class="job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                            <div><span class="fa-solid fa-angle-right"></span></div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        <p class="me-3">${b.experirence}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                        <!-- application form -->
                        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div class="apply-job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                       
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                            <div><button class="btn btn-info">Apply for job</button></div>
                            <div class="mt-2 job-description">
                                <h4>Job Description:</h4>
                                <p>${b.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>`
                    }
                }
            }

        })
    })
}

var job_by_company = document.getElementById('job-by-company')

fetch("json.json").then((value) => value.json()).then((data) => {
    data.company.map((data) => {
        if (job_by_company) {
            job_by_company.innerHTML += `<div class="col-lg-4 col-md-6 col-12"><a href="${data.src_name}" class="job-by-company">${data.company_name}</a></div>`
        }
    })
})

var search_company = document.getElementById('search-company')

var search_compnay_input = document.getElementById('search-compnay-input')

// var array = []
// fetch("Json.json").then((a) => a.json()).then((data) => {
//    array =  data.company.map((data) => {
//         return data
//         // console.log(data);
//         // console.log(array);
//     })
//     fun1(array)

// })

// function fun1(array){
//     search_company.onkeyup = function(){
//         let one = array
//         var resultfun 
//         var inputfun = search_company.value
//         resultfun = one[company_name].filter((key)=>{
//             return key.toLowerCase().includes(inputfun.toLowerCase())

//         })
//         console.log(resultfun);
//     }
// }

var date_posted = document.getElementById('date-posted')

var date_posted_1 = document.getElementById('date-posted-1')

var filter_show_1 = document.getElementById('filter-date')

var filter_1 = 0

if (date_posted) {
    date_posted.addEventListener('click', () => {
        filter_1++
        if (filter_1 % 2 == 1) {
            date_posted_1.style.display = "none"
            filter_show_1.style.rotate = "540deg"
            filter_show_1.style.transition = "0.8s"
        }
        else {
            date_posted_1.style.display = "block"
            filter_show_1.style.rotate = "0deg"
        }
    })
}

var location_post = document.getElementById('location')

var location_1 = document.getElementById('location-1')

var filter_show_2 = document.getElementById('filter-location')

var filter_2 = 0

if (location_post) {
    location_post.addEventListener('click', () => {
        filter_2++
        if (filter_2 % 2 == 1) {
            location_1.style.display = "none"
            filter_show_2.style.rotate = "540deg"
            filter_show_2.style.transition = "0.8s"
        }
        else {
            location_1.style.display = "block"
            filter_show_2.style.rotate = "0deg"
        }
    })
}

var work_mode = document.getElementById('work-mode')

var work_mode_1 = document.getElementById('work-mode-1')

var filter_show_3 = document.getElementById('filter-workmode')

var filter_3 = 0

if (work_mode) {
    work_mode.addEventListener('click', () => {
        filter_3++
        if (filter_3 % 2 == 1) {
            work_mode_1.style.display = "none"
            filter_show_3.style.rotate = "540deg"
            filter_show_3.style.transition = "0.8s"
        }
        else {
            work_mode_1.style.display = "block"
            filter_show_3.style.rotate = "0deg"
        }
    })
}



var work_type = document.getElementById('work-type')

var work_type_1 = document.getElementById('work-type-1')

var filter_show_4 = document.getElementById('filter-worktype')

var filter_4 = 0

if (work_type) {
    work_type.addEventListener('click', () => {
        filter_4++
        if (filter_4 % 2 == 1) {
            work_type_1.style.display = "none"
            filter_show_4.style.rotate = "540deg"
            filter_show_4.style.transition = "0.8s"
        }
        else {
            work_type_1.style.display = "block"
            filter_show_4.style.rotate = "0deg"
        }
    })
}

var view = document.getElementById('view')

var close_filter = document.getElementById('close-filter')

function more(value) {
    value.style.display = "block"
}

function more_close(num) {
    num.style.display = "none"
}

// filter for mobile 
var date_posted_sm = document.getElementById('data_posted_sm')
var location_sm = document.getElementById('location_sm')
var salary_sm = document.getElementById('salary_sm')
var work_type_sm = document.getElementById('work_type_sm')
var work_mode_sm = document.getElementById('work_mode_sm')

var date_posted_filter = document.getElementById('date_posted_filter')
var location_filter = document.getElementById('location_filter')
var salary_filter = document.getElementById('salary_filter')
var work_type_filter = document.getElementById('work_type_filter')
var work_mode_filter = document.getElementById('work_mode_filter')

if (date_posted_filter) {
    date_posted_filter.style.display = "none"
}
if (location_filter) {
    location_filter.style.display = "none"
}
if (salary_filter) {
    salary_filter.style.display = "none"
}
if (work_type_filter) {
    work_type_filter.style.display = "none"
}
if (work_mode_filter) {
    work_mode_filter.style.display = "none"
}



if (date_posted_sm) {
    date_posted_sm.addEventListener('click', () => {
        date_posted_filter.style.display = "block"
        date_posted_sm.style.backgroundColor = "gray"
        location_filter.style.display = "none"
        salary_filter.style.display = "none"
        work_type_filter.style.display = "none"
        work_mode_filter.style.display = "none"
        location_sm.style = "none"
        salary_sm.style = "none"
        work_type_sm.style = "none"
        work_mode_sm.style = "none"
    })
}
if (location_sm) {
    location_sm.addEventListener('click', () => {
        location_filter.style.display = "block"
        location_sm.style.backgroundColor = "gray"
        date_posted_filter.style.display = "none"
        salary_filter.style.display = "none"
        work_type_filter.style.display = "none"
        work_mode_filter.style.display = "none"
        date_posted_sm.style = "none"
        salary_sm.style = "none"
        work_type_sm.style = "none"
        work_mode_sm.style = "none"
    })
}
if (salary_sm) {
    salary_sm.addEventListener('click', () => {
        salary_filter.style.display = "block"
        salary_sm.style.backgroundColor = "gray"
        date_posted_filter.style.display = "none"
        location_filter.style.display = "none"
        work_type_filter.style.display = "none"
        work_mode_filter.style.display = "none"
        location_sm.style = "none"
        date_posted_sm.style = "none"
        work_type_sm.style = "none"
        work_mode_sm.style = "none"
    })
}
if (work_type_sm) {
    work_type_sm.addEventListener('click', () => {
        work_type_filter.style.display = "block"
        work_type_sm.style.backgroundColor = "gray"
        date_posted_filter.style.display = "none"
        location_filter.style.display = "none"
        salary_filter.style.display = "none"
        work_mode_filter.style.display = "none"
        location_sm.style = "none"
        salary_sm.style = "none"
        date_posted_sm.style = "none"
        work_mode_sm.style = "none"
    })
}
if (work_mode_sm) {
    work_mode_sm.addEventListener('click', () => {
        work_mode_filter.style.display = "block"
        work_mode_sm.style.backgroundColor = "gray"
        date_posted_filter.style.display = "none"
        location_filter.style.display = "none"
        salary_filter.style.display = "none"
        work_type_filter.style.display = "none"
        location_sm.style = "none"
        salary_sm.style = "none"
        work_type_sm.style = "none"
        date_posted_sm.style = "none"
    })
}





var display = document.getElementById('swiggy-jobs')
var display_1 = document.getElementById('hdfc-jobs')
var display_2 = document.getElementById('zepto-jobs')
var display_3 = document.getElementById('tech-mahindra-jobs')
var display_4 = document.getElementById('teleperformance-jobs')
var display_5 = document.getElementById('zomato-jobs')
var display_6 = document.getElementById('karur-vysya-jobs')
var display_7 = document.getElementById('l&t-jobs')
var display_8 = document.getElementById('sutherland-jobs')
var display_9 = document.getElementById('wipro-jobs')
var display_10 = document.getElementById('paytm-jobs')
var display_11 = document.getElementById('lic-jobs')
var display_12 = document.getElementById('flipkart-jobs')
var display_13 = document.getElementById('accenture-jobs')
var display_14 = document.getElementById('tcs-jobs')
var display_15 = document.getElementById('infosys-jobs')
var display_16 = document.getElementById('hcl-jobs')
var display_17 = document.getElementById('careergate-jobs')
var display_18 = document.getElementById('chaipoint-jobs')
var display_19 = document.getElementById('chennai-silks-jobs')
var display_20 = document.getElementById('creative-hands-jobs')
var display_21 = document.getElementById('cultfit-jobs')
var display_22 = document.getElementById('innov-jobs')
var display_23 = document.getElementById('intellihealth-jobs')
var display_24 = document.getElementById('matrimony-jobs')
var display_25 = document.getElementById('max-life-jobs')
var display_26 = document.getElementById('meesho-jobs')
var display_27 = document.getElementById('lenskart-jobs')
var display_28 = document.getElementById('bharti-axa-jobs')
var display_29 = document.getElementById('phonepe-jobs')
var display_30 = document.getElementById('airtel-jobs')
var display_31 = document.getElementById('chennai-silks-jobs')
var display_32 = document.getElementById('third-wave-jobs')
var display_33 = document.getElementById('usdc-global-jobs')
var display_34 = document.getElementById('kap-call-jobs')
var display_35 = document.getElementById('ninjacart-jobs')
var display_36 = document.getElementById('dream-consulting-jobs')
var display_37 = document.getElementById('landmark-jobs')
var display_38 = document.getElementById('vision360-jobs')
var display_39 = document.getElementById('sunshine-jobs')
var display_40 = document.getElementById('burger-king-jobs')
var display_41 = document.getElementById('justdial-jobs')
var display_42 = document.getElementById('teamlease-jobs')
var display_43 = document.getElementById('aditya-birla-jobs')
var display_44 = document.getElementById('startek-jobs')
var display_45 = document.getElementById('bajaj-capital-jobs')
var freshers_job = document.getElementById('freshers-jobs')
var parttime_job = document.getElementById('parttime-jobs')
var wfh_job = document.getElementById('wfh-jobs')
var bank_finance_job = document.getElementById('bank&finance-jobs')
var software_it_job = document.getElementById('software&it-jobs')


fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            let g = b.title.split(" ")
            for (var i = 0; i < g.length; i++) {
                if (g[i] == "Developer" || g[i] == "Software") {
                    if (software_it_job) {
                        software_it_job.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                            <div class="job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                            <div><span class="fa-solid fa-angle-right"></span></div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        <p class="me-3">${b.experirence}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!-- application form -->
                        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div class="apply-job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                       
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                            <div><button class="btn btn-info">Apply for job</button></div>
                            <div class="mt-2 job-description">
                                <h4>Job Description:</h4>
                                <p>${b.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`
                    }

                }
            }
        })
    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            let g = b.company_name.split(" ")
            for (var i = 0; i < g.length; i++) {
                if (g[i] == "Bank") {
                    if (bank_finance_job) {
                        bank_finance_job.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                            <div class="job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                            <div><span class="fa-solid fa-angle-right"></span></div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        <p class="me-3">${b.experirence}</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        <!-- application form -->
                        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div class="apply-job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                       
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                            <div><button class="btn btn-info">Apply for job</button></div>
                            <div class="mt-2 job-description">
                                <h4>Job Description:</h4>
                                <p>${b.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`

                    }
                }

            }
        })
    })

fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if (b.work_mode == "Work from Field") {
                if (wfh_job) {
                    wfh_job.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                <p class="me-3">${b.experirence}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`

                }
            }
            else {
                if (wfh_job) {
                    wfh_job.innerHTML = `<h3 class="d-flex justify-content-center mt-5">No Result Found...</h3>`
                }

            }
        })
    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {

            if (b.work_type == "Part Time") {
                if (parttime_job) {
                    parttime_job.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                <p class="me-3">${b.experirence}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`

                }
            }
        })
    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {

            if (b.experirence < "0-8 years" || b.experirence == "Any-experience") {
                if (freshers_job) {
                    freshers_job.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    <p class="me-3">${b.experirence}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                <p class="me-3">${b.experirence}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`

                }
            }
        })
    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {

            if ("Swiggy" == b.company_name) {
                if (display) {
                    display.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`

                }
            }
        })
    })
function all_location(){
    display.innerHTML=" "
    fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {

            if ("Swiggy" == b.company_name) {
                if (display) {
                    display.innerHTML += `<a  class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`

                }
            }
        })
    })
}

function a(locate) {
    display.innerHTML = " "
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
                if ("Swiggy" == b.company_name && locate == b.location) {
                    display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                                <div class="job">
                                    <div class="row container">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="${b.img}" width="50px">
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center w-100">
                                                <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                                <div><span class="fa-solid fa-angle-right"></span></div>
                                            </div>
                                        </div>
                                    <div class="row">
                                        <div class="d-flex ">
                                            <span class="fa-solid fa-location-dot"></span>
                                            <p class="">${b.location}</p>
                                        </div>   
                                    </div>
                                    <div class="row">
                                        <div class="d-flex ">
                                            <span class="fa-solid fa-money-bill-wave"></span>
                                            <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                        </div>
                                    </div>
                                        <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        
                                    </div>
                                    </div>
                                </div>
                            </a>
                            <!-- application form -->
                            <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                <div class="apply-job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        
                                    </div>
                                </div>
                                <div><button class="btn btn-info">Apply for job</button></div>
                                <div class="mt-2 job-description">
                                    <h4>Job Description:</h4>
                                    <p>${b.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
                }
        })
    })
}
// var increase_2 = 0
// function aaa(locate) {
//     display.innerHTML = " "
//     increase_2++
//     fetch("Json.json").then((a) => a.json()).then((b) => {
//         b.jobs.map((b) => {
//             if (increase_2 % 2 == 1) {
//                 if ("Swiggy" == b.company_name && locate == b.location) {
//                     display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }


//             }
//             if (increase_2 % 2 == 0) {

//                 if ("Swiggy" == b.company_name) {

//                     display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }
//             }

//         })
//     })
// }
// var increase_3 = 0
// function aaaa(locate) {
//     display.innerHTML = " "
//     increase_3++
//     fetch("Json.json").then((a) => a.json()).then((b) => {
//         b.jobs.map((b) => {
//             if (increase_3 % 2 == 1) {
//                 if ("Swiggy" == b.company_name && locate == b.location) {
//                     display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }


//             }
//             if (increase_3 % 2 == 0) {

//                 if ("Swiggy" == b.company_name) {

//                     display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }
//             }

//         })
//     })
// }
// var increase_4 = 0
// function aaaaa(locate) {
//     display.innerHTML = " "
//     increase_4++
//     fetch("Json.json").then((a) => a.json()).then((b) => {
//         b.jobs.map((b) => {
//             if (increase_4 % 2 == 1) {
//                 if ("Swiggy" == b.company_name && locate == b.location) {
//                     display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }


//             }
//             if (increase_4 % 2 == 0) {

//                 if ("Swiggy" == b.company_name) {

//                     display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }
//             }

//         })
//     })
// }
// var increase_5 = 0
// function aaaaaa(locate) {
//     display.innerHTML = " "
//     increase_5++
//     fetch("Json.json").then((a) => a.json()).then((b) => {
//         b.jobs.map((b) => {
//             if (increase_5 % 2 == 1) {
//                 if ("Swiggy" == b.company_name && locate == b.location) {
//                     display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                         </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }


//             }
//             if (increase_5 % 2 == 0) {

//                 if ("Swiggy" == b.company_name) {

//                     display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }
//             }

//         })
//     })
// }
// var increase_6 = 0
// function aaaaaaa(locate) {
//     display.innerHTML = " "
//     increase_3++
//     fetch("Json.json").then((a) => a.json()).then((b) => {
//         b.jobs.map((b) => {
//             if (increase_3 % 2 == 1) {
//                 if ("Swiggy" == b.company_name && locate == b.location) {
//                     display.innerHTML = `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }


//             }
//             if (increase_3 % 2 == 0) {

//                 if ("Swiggy" == b.company_name) {

//                     display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
//                                 <div class="job">
//                                     <div class="row container">
//                                         <div class="d-flex">
//                                             <div class="">
//                                                 <img src="${b.img}" width="50px">
//                                             </div>
//                                             <div class="d-flex justify-content-between align-items-center w-100">
//                                                 <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
//                                                 <div><span class="fa-solid fa-angle-right"></span></div>
//                                             </div>
//                                         </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-location-dot"></span>
//                                             <p class="">${b.location}</p>
//                                         </div>   
//                                     </div>
//                                     <div class="row">
//                                         <div class="d-flex ">
//                                             <span class="fa-solid fa-money-bill-wave"></span>
//                                             <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                         </div>
//                                     </div>
//                                         <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                     </div>
//                                 </div>
//                             </a>
//                             <!-- application form -->
//                             <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
//                                 <div class="offcanvas-header">
//                                     <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
//                                     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//                                 </div>
//                                 <div class="offcanvas-body">
//                                 <div class="apply-job">
//                                 <div class="row container">
//                                     <div class="d-flex">
//                                         <div class="">
//                                             <img src="${b.img}" width="50px">
//                                         </div>
//                                         <div class="d-flex justify-content-between align-items-center w-100">
//                                             <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
//                                         </div>
//                                     </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-location-dot"></span>
//                                         <p class="">${b.location}</p>
//                                     </div>   
//                                 </div>
//                                 <div class="row">
//                                     <div class="d-flex ">
//                                         <span class="fa-solid fa-money-bill-wave"></span>
//                                         <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
//                                     </div>
//                                 </div>
//                                     <div class="d-flex">
//                                         <p class="me-3">${b.work_type}</p>
//                                         <p class="me-3">${b.work_mode}</p>
                                        
//                                     </div>
//                                 </div>
//                                 <div><button class="btn btn-info">Apply for job</button></div>
//                                 <div class="mt-2 job-description">
//                                     <h4>Job Description:</h4>
//                                     <p>${b.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>`
//                 }
//             }

//         })
//     })
// }

function all_time() {
    display.innerHTML = " "
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
            if ("Swiggy" == b.company_name) {
                if (display) {
                    display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                            <div class="job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                            <div><span class="fa-solid fa-angle-right"></span></div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    
                                </div>
                                </div>
                            </div>
                        </a>
                        <!-- application form -->
                        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div class="apply-job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                       
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    
                                </div>
                            </div>
                            <div><button class="btn btn-info">Apply for job</button></div>
                            <div class="mt-2 job-description">
                                <h4>Job Description:</h4>
                                <p>${b.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`
                }
            }

        })
    })
}
function work_time(time) {
    display.innerHTML = " "
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
            if ("Swiggy" == b.company_name && time == b.work_type) {
                if (display) {
                    display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                            <div class="job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                            <div><span class="fa-solid fa-angle-right"></span></div>
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    
                                </div>
                                </div>
                            </div>
                        </a>
                        <!-- application form -->
                        <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                            <div class="apply-job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                       
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">${b.work_type}</p>
                                    <p class="me-3">${b.work_mode}</p>
                                    
                                </div>
                            </div>
                            <div><button class="btn btn-info">Apply for job</button></div>
                            <div class="mt-2 job-description">
                                <h4>Job Description:</h4>
                                <p>${b.description}</p>
                            </div>
                        </div>
                    </div>
                </div>`
                }
            }

        })
    })
}

function work(mode) {
    display.innerHTML = " "
    fetch("Json.json").then((a) => a.json()).then((b) => {
        b.jobs.map((b) => {
            if ("Swiggy" == b.company_name) {
                if (mode == b.work_mode) {
                    if (display) {
                        display.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                                <div class="job">
                                    <div class="row container">
                                        <div class="d-flex">
                                            <div class="">
                                                <img src="${b.img}" width="50px">
                                            </div>
                                            <div class="d-flex justify-content-between align-items-center w-100">
                                                <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                                <div><span class="fa-solid fa-angle-right"></span></div>
                                            </div>
                                        </div>
                                    <div class="row">
                                        <div class="d-flex ">
                                            <span class="fa-solid fa-location-dot"></span>
                                            <p class="">${b.location}</p>
                                        </div>   
                                    </div>
                                    <div class="row">
                                        <div class="d-flex ">
                                            <span class="fa-solid fa-money-bill-wave"></span>
                                            <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                        </div>
                                    </div>
                                        <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        
                                    </div>
                                    </div>
                                </div>
                            </a>
                            <!-- application form -->
                            <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                <div class="apply-job">
                                <div class="row container">
                                    <div class="d-flex">
                                        <div class="">
                                            <img src="${b.img}" width="50px">
                                        </div>
                                        <div class="d-flex justify-content-between align-items-center w-100">
                                            <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                           
                                        </div>
                                    </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-location-dot"></span>
                                        <p class="">${b.location}</p>
                                    </div>   
                                </div>
                                <div class="row">
                                    <div class="d-flex ">
                                        <span class="fa-solid fa-money-bill-wave"></span>
                                        <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                    </div>
                                </div>
                                    <div class="d-flex">
                                        <p class="me-3">${b.work_type}</p>
                                        <p class="me-3">${b.work_mode}</p>
                                        
                                    </div>
                                </div>
                                <div><button class="btn btn-info">Apply for job</button></div>
                                <div class="mt-2 job-description">
                                    <h4>Job Description:</h4>
                                    <p>${b.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
                    }
                }
                else {
                    display.innerHTML = `<div class="d-flex justify-content-center align-items-center mt-5">
                                    <h3>No Rresults Found...</h3>
                        </div>`
                }

            }
            // else{
            //     display.innerHTML=`<h3> No Data Found</h3>`
            // }

        })
    })
}

fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("HDFC Bank" == b.company_name) {
                if (display_1) {
                    display_1.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Zepto" == b.company_name) {
                if (display_2) {
                    display_2.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Tech Mahindra" == b.company_name) {
                if (display_3) {
                    display_3.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Teleperformance" == b.company_name) {
                if (display_4) {
                    display_4.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Zomato" == b.company_name) {
                if (display_5) {
                    display_5.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Karur Vysya Bank" == b.company_name) {
                if (display_6) {
                    display_6.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.id}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("L&T" == b.company_name) {
                if (display_7) {
                    display_7.innerHTML += `<a href="" class="m-3" data-bs-toggle="offcanvas" data-bs-target="#${b.id}" aria-controls="offcanvasRight">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Sutherland" == b.company_name) {
                if (display_8) {
                    display_8.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Wipro" == b.company_name) {
                if (display_9) {
                    display_9.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Paytm" == b.company_name) {
                if (display_10) {
                    display_10.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("LIC" == b.company_name) {
                if (display_11) {
                    display_11.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Flipkart" == b.company_name) {
                if (display_12) {
                    display_12.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Accenture" == b.company_name) {
                if (display_13) {
                    display_13.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Tata Consultancy Services" == b.company_name) {
                if (display_14) {
                    display_14.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Infosys" == b.company_name) {
                if (display_15) {
                    display_15.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("HCL" == b.company_name) {
                if (display_16) {
                    display_16.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Careergate Solutions" == b.company_name) {
                if (display_17) {
                    display_17.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Chaipoint" == b.company_name) {
                if (display_18) {
                    display_18.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("TCS Textiles Pvt Ltd ( The Chennai Silks )" == b.company_name) {
                if (display_19) {
                    display_19.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Creative Hands HR Consultancy" == b.company_name) {
                if (display_20) {
                    display_20.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Cultfit" == b.company_name) {
                if (display_21) {
                    display_21.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Innovsource services Pvt Ltd" == b.company_name) {
                if (display_22) {
                    display_22.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Intellihealth Solutions Private Limited" == b.company_name) {
                if (display_23) {
                    display_23.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Matrimony" == b.company_name) {
                if (display_24) {
                    display_24.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Max Life Insurance" == b.company_name) {
                if (display_25) {
                    display_25.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Meesho" == b.company_name) {
                if (display_26) {
                    display_26.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Lenskart" == b.company_name) {
                if (display_27) {
                    display_27.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Bharti Axa Life Insurance Company Limited" == b.company_name) {
                if (display_28) {
                    display_28.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("PhonePe" == b.company_name) {
                if (display_29) {
                    display_29.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Airtel" == b.company_name) {
                if (display_30) {
                    display_30.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Lenskart" == b.company_name) {
                if (display_31) {
                    display_31.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Third Wave Coffee" == b.company_name) {
                if (display_32) {
                    display_32.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("USDC Global" == b.company_name) {
                if (display_33) {
                    display_33.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("KAP Call Center Pvt Ltd" == b.company_name) {
                if (display_34) {
                    display_34.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Ninjacart" == b.company_name) {
                if (display_35) {
                    display_35.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Dream Consulting" == b.company_name) {
                if (display_36) {
                    display_36.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                              
                                    </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Landmark Group" == b.company_name) {
                if (display_37) {
                    display_37.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Vision 360" == b.company_name) {
                if (display_38) {
                    display_38.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Sunshine Manpower Solutions" == b.company_name) {
                if (display_39) {
                    display_39.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Burger King India Limited" == b.company_name) {
                if (display_40) {
                    display_40.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Just Dial" == b.company_name) {
                if (display_41) {
                    display_41.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Teamlease Services Pvt Ltd" == b.company_name) {
                if (display_42) {
                    display_42.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Aditya Birla Capital Limited" == b.company_name) {
                if (display_43) {
                    display_43.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Startek" == b.company_name) {
                if (display_44) {
                    display_44.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })
fetch("Json.json")
    .then((a) => a.json())
    .then((b) => {
        b.jobs.map((b) => {
            if ("Bajaj Capital" == b.company_name) {
                if (display_45) {
                    display_45.innerHTML += `<a href="" class="m-3">
                        <div class="job">
                            <div class="row container">
                                <div class="d-flex">
                                    <div class="">
                                        <img src="${b.img}" width="50px">
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center w-100">
                                        <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                        <div><span class="fa-solid fa-angle-right"></span></div>
                                    </div>
                                </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-location-dot"></span>
                                    <p class="">${b.location}</p>
                                </div>   
                            </div>
                            <div class="row">
                                <div class="d-flex ">
                                    <span class="fa-solid fa-money-bill-wave"></span>
                                    <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                                </div>
                            </div>
                                <div class="d-flex">
                                    <p class="me-3">Field Work</p>
                                    <p class="me-3">Full Time</p>
                                    <p>Part Time</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <!-- application form -->
                    <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="${b.location}" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Apply To Get Your Job</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        <div class="apply-job">
                        <div class="row container">
                            <div class="d-flex">
                                <div class="">
                                    <img src="${b.img}" width="50px">
                                </div>
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <div><h5>${b.title}<br> <span class="company-name">${b.company_name}</span></h5></div>
                                   
                                </div>
                            </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-location-dot"></span>
                                <p class="">${b.location}</p>
                            </div>   
                        </div>
                        <div class="row">
                            <div class="d-flex ">
                                <span class="fa-solid fa-money-bill-wave"></span>
                                <p>&#8377;${b.min_sal}-&#8377;${b.max_sal}</p>
                            </div>
                        </div>
                            <div class="d-flex">
                                <p class="me-3">${b.work_type}</p>
                                <p class="me-3">${b.work_mode}</p>
                                
                            </div>
                        </div>
                        <div><button class="btn btn-info">Apply for job</button></div>
                        <div class="mt-2 job-description">
                            <h4>Job Description:</h4>
                            <p>${b.description}</p>
                        </div>
                    </div>
                </div>
            </div>`
                }
            }
        })

    })














