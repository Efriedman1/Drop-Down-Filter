<h1>Tutorial: Filterable Drop Down Filter</h1>
<h3>This is a tutorial project I created for class to show programmers how to use my resusable drop down filter component</h3>

<p>My tutorial project is a drop down menu that allows you to filter an array of objects. The dropdown menu has a search bar that allows you to filter the menu items as well. The menu is highly customizable and can have as many filterable values and filter as large of a list as the user wants.</p>

<p>The parameters the drop down filter requires to function are the title of the selected drop button, and the id of the value the user selects from that drop down. The title and id can essentially be looked at as a key/value pair. That key/value pair is compared to its designated key/value pairs in the array of objects. If a match is found that object will be added to an array of filtered objects and displayed. I chose to display my objects in an image grid but the user can display their data any way they’d like.</p>

 <h3>Default Styling:</h3>
<p>
There are two stylesheets, one for the dropdown called <b style="color:blue">dropdown.css</b>, and the other for the image grid called <b style="color:blue">style.css</b>. Both sheets include instructions for editing in their comments. The majority of the code in <b style="color:blue">dropdown.css</b> should be left alone apart from cosmetic changes, including the search icon that appears in the search bar (found in <b>input[type=text]</b>). 
</p>
<p>
In <b style="color:blue">style.css</b> the hierarchy should be kept the same but user can make any changes needed to suit their array of objects and the data they wish to display. To get the look of the image gallery I utilized the CSS grid property (<b>.wrapper</b>), an overlay with text on hover (<b>.overlay</b> & <b>.text</b>), box shadows and border radius (<b>.content</b>). All these can be found and edited in the <b style="color:blue">style.css</b> style sheet.
</p>
<h3>How it was built:</h3>
<p>
This first started as an idea from w3 schools. A dropdown button with a filterable submenu.
</p>
<p class="codepen" data-height="265" data-theme-id="default" data-default-tab="css,result" data-user="efriedman98" data-slug-hash="WNNmdqx" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="w3dropdown">
<span>See the Pen <a href="https://codepen.io/efriedman98/pen/WNNmdqx">w3dropdown</a> by Eric Friedman (<a href="https://codepen.io/efriedman98">@efriedman98</a>) on <a href="https://codepen.io">CodePen</a>.</span>
</p>
        <p>
            <b>1.</b> The first step to getting this component to work as a filter was to get the title of the selected drop down and the value the user selects. This was accomplished by the <b>selectDropDown</b> and <b>selectedValue</b> functions. The <b>selectDropDown</b> function is called when the button is clicked and stores the title of the drop down as a string in an <b>activeFilter</b> variable. The <b>selectedValue</b> function works the same way and is called when the user selects a drop down value.
        </p>
        <p>
            <b>2.</b> After getting the correct values to print in the console the next step was to get the full list of objects to display images on the screen. Once the images were displayed they were filtered by the simple <b>if statement</b> and <b>ternary operator</b> displayed below.
        </p>
      <div class='code'>
            <p class="codepen" data-height="436" data-theme-id="default" data-default-tab="js,result" data-user="efriedman98" data-slug-hash="QWWoOeX" style="height: 436px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="QWWoOeX">
                <span>See the Pen <a href="https://codepen.io/efriedman98/pen/QWWoOeX">
                        QWWoOeX</a> by Eric Friedman (<a href="https://codepen.io/efriedman98">@efriedman98</a>)
                    on <a href="https://codepen.io">CodePen</a>.</span>
            </p>
             <hr>
        <h4>How the ternary operator works</h4>
        <p>
            The <b>ternary operator</b> is used to set the value of <b>filteredArtists</b>. If <b>filterFn</b> is not null is true the first statement executes, otherwise the second statement executes. The first statement takes the <b>artistsList</b>, which is the object list, applies the filter method to it with the parameter <b>filterFn</b>
            The second statement returns the unfiltered <b>artistList</b>. The filter method takes every object in <b>filterFn</b> that returned true and those are the only objects stored in the <b>filterArtists</b> array.
        </p>
        <p>* More information provided in the code comments.</p>
        <hr>
        <p>
            <b>3.</b> After one filter was functioning I began working on adding more and making the component reusable. In order to make the components reusable each button needed a unique title, the drop content needed a unique id. <b>myFunction</b> and <b>filterFunction</b> were then made to take parameters instead of hardcoded values.
        </p>
 <p><b>4.</b> Once I was able to create new filters without them interfering with each other I wrote a <b>switch statement</b> inside the <b>selectedValue</b> function with each case being a different dropdown menu. This allowed all the filters to work on one page.</p>
 <p><b>5. </b>After getting the filters to work I added the functions that were responsible for hiding the drop downs and displaying a label for the current active filter.</p>
        <p>
            Much more information on the specific functionality of each function is provided in the comments of the code. Primarily in the <b>dropdown.js</b> file
        </p>
               <hr>
        <h3>Helpful Links</h3>
        <p>
            <a href="https://www.w3schools.com/howto/howto_js_filter_dropdown.asp" target="_blank">W3 Schools - Filterable Drop Down</a><br>
            <a href="https://www.w3schools.com/howto/howto_css_image_overlay_slide.asp" target="_blank">W3 Schools - Overlay Image Slider</a><br>
            <a href="https://www.youtube.com/watch?v=jV8B24rSN5o" target="_blank">Youtube - CSS Grids</a><br>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" target="_blank">Ternary Operators</a>
        </p>

       
