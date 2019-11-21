/*
 */

//dropdown filter labels
var dropdownLabel = "No Filter";
var valueLabel = "";

function myFunction(id) {
    document.getElementById(id.id).classList.toggle("show");
    hideDropdowns(id.id);
}

//prints the name of the selected dropdown menu
var activeFilter = "";

//Sets the activeFilter and the dropdownLabel variable values to the users selected dropdown
function selectedDropDown(title) {
    console.log("Selected Dropdown: " + activeFilter);
    activeFilter = title.title;
    dropdownLabel = title.title;
}

//Create the label for the current filter
function filterLabel(dropdown, value) {
    dropdown = dropdownLabel;
    value = valueLabel;
    console.log("Filtered By: ", dropdown, "-", value);
    document.getElementById("filteredBy").innerHTML = `
        <h2>${dropdown} ${value}</h2>
    `;
}


//returns the value of selected value and filters the artistList by the selected dropdown and value
function selectedValue(anchorObj) {
    console.log("Selected Value: " + anchorObj.id);

    //This ternary operator is used to set the initial value of valueLabel
    //If (anchorObj.id === undefined) is true the operator returns the value of the first expression 
    //If it's false it returns the value of the second expression
    valueLabel = (anchorObj.id === undefined) ? "" : (": " + anchorObj.id);

    //Calls the filterLabel function and sets it's parameters to the user selected dropdown and filter value
    filterLabel(dropdownLabel, valueLabel);

    //Switch statement used to filter the object list based on the selected dropdown
    //The switch takes the activeFilter as a parameter which was assigned a value in the selectedDropDown function
    //My activeFilter will either be "Nationality", "Century", or "Periods" since those are the titles of my dropbuttons, as designated in my HTML file
    //The if statement parameters check if the user selected "All-Nationalities", "All-Centuries", or "All-Periods", if thats the value the user
    //selected filterFn remains null since those options are made to display everything
    //If any other value in the dropdown is selected the else statement will be executed
    //The else statement sets filterFn equal to a function that returns a value of true or false for every object in the array
    //The function will only return true when the object in the array has a key/value pair that matches the filter
    //For example if we select the Nationality drop down and the American value Nationality is over key and American is our value so if the object
    //has a Nationality key equal to American it will return true
    //You may notice Nationality has a different function from Century and Periods. This is because Nationality is set to a single value in the object list
    //while Century and Periods contain and array of values
    var filterFn = null;
    switch (activeFilter) {
        case "Nationality":
            if (anchorObj.id === "All-Nationalities") {
                filterFn = null;
                break
            }
            filterFn = function (c) {
                return anchorObj.id === c.nationality;
            };
            break;
        case "Century":
            if (anchorObj.id === "All-Centuries") {
                filterFn = null;
                break
            }
            filterFn = function (c) {
                console.log("century test" + (c.century.includes(anchorObj.id)));
                return c.century.includes(anchorObj.id);
            };
            break;
        case "Periods":
            if (anchorObj.id === "All-Periods") {
                filterFn = null;
                break
            }
            filterFn = function (c) {
                return c.periods.includes(anchorObj.id);
            };
            break;
    }

    //The switch statement returns two possible types of values. It's either set to null or to the value of a function that returns/sets a value of true
    //or false for every elements in the array

    //The ternary operator is used to set the value of filteredArtists
    //If filterFn is not null is true the first statment executes, otherwise the second statement executes
    //The first statement takes the artistsList, which is the object list, applies the filter method to it with the parameter filterFn
    //The second statement returns the unfiltered artistList
    //The filter method takes every object in filterFn that returned true and those are the only objects stored in the filterArtists array
    var filteredArtists = filterFn ? artistList.filter(filterFn) : artistList;


    //logs the filteredArtists array
    console.log(filteredArtists);

    //The final step is to display the filteredArtists
    //We do this by setting the innerHTML value of our div with id listHere to  ${filteredArtists.map(artistTemplate).join("") which
    //returns a new array (maps) with the specific elements referenced in the artistTemplate function and joins them to a string seperated by a space
    document.getElementById("listHere").innerHTML = `
        ${filteredArtists.map(artistTemplate).join("")}
    `;
}

//Called to display unfiltered list
selectedValue({});


//Artist template (keep in this file because its referenced by the function above)
//This is a basic template for displaying your array of objects on your HTML page
//This can be manipulated and changed to fit the requirements/parameters of your array of objects
//This template requires two things to be displayed, a div in the HTML code and a to be added to the document via the div's id
//The code snippet that adds this template to its designated div on the HTML page is in the function above
//<div class="column"><div class = "content"><a href="${artist.url}" target="_blank"> 
function artistTemplate(artist) {
    return `
           <div class = "content">
                <img src="${artist.image}">
                    <div class="overlay">
                        <div class="text"> 
                            <h3>${artist.artistName}</h3>
                            Born: ${artist.birthday}
                            Died: ${artist.death}
                            Age: ${artist.age} <br><br>
                            <a href="${artist.url}" target="_blank">Learn More</a>
                        </div>
                    </div>
                </div>
                
    `;
}


//function that hides the dropdown menu when another menu is selected or when a value is selected
//this is necessary because if a dropdown isn't closed when another is opened that allows the user select invalid parameters
//for instance if the user opens the Nationality dropdown, then the Periods dropdown, then goes back and selects American from the still
//opened Nationality menu that would register as activeFilter = Periods anchorObj.id = American which doesn't exist
function hideDropdowns(excludeId) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
        var openDropdown = dropdowns[d];
        if (openDropdown.classList.contains('show') && excludeId !== openDropdown.id) {
            openDropdown.classList.remove('show');
        }
    }
}

//The hideDropdowns function only hides the dropdown when another is clicked
//This onlick function is used to hide the dropdowns when anything other than the drop buttons or search bars are selected
//This function is not required but is highly encouraged because it makes everything run more smoothly
window.onclick = function (e) {
    //if statement executes if anything other than a drop button is selected
    if (!e.target.matches('.dropbtn')) {
        //second if statement only executes if a search bar was NOT selected
        //myInput1, myInput2, and myInput3 are the id's of my search bars, your parameter would match the id of your search bar
        //if you have more or less search bars simply add/remove !e.target.matches('your-id') in the conditional
        if (!e.target.matches('#myInput1') && !e.target.matches('#myInput2') && !e.target.matches('#myInput3')) {
            hideDropdowns();
        }
    }
};

//function that filters the dropdown menu via search
//this function takes two parameters, the id of the 'dropdown-content' div, and the id of the designated search bar
//this function is called in the search bar div located in the HTML file
//onkeyup="filterFunction('dropdown content id', 'search bar id')"
function filterFunction(id, id2) {
    var input, filter, ul, li, a, i;
    input = document.getElementById(id2.id);
    filter = input.value.toUpperCase();
    div = document.getElementById(id.id);
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
