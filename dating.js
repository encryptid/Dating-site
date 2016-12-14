/**
 * What are the steps, here?
 * 1. We need to look at the button and listen for a click
 * 2. When the button is clicked, we need to create an <li> within the <ul> that contains a new profile
 * 
 */

function init() {
    console.log("Here we go...")

    let button = document.querySelector('#getNew'); // let "button" variable find the #getNew button in HTML
    button.addEventListener('click', function () { // listen for when the button is clicked and perform the following
                                                    // function...
        let voteBox = document.createElement('li'); // create "voteBox" variable that is a list item
        //voteBox.textContent = button.value;         // make the text of the li equal to "button.value"
        let parent = document.querySelector('.peeps'); // let "parent" be the ul #peeps
        parent.appendChild(voteBox);                    // take the parent and add (append) the child, li "voteBox"

        let cargill = document.createElement('img');
        cargill.src = "https://randomuser.me/api/portraits/men/22.jpg";
        voteBox.appendChild(cargill);

        let profile = document.createElement('div');
        voteBox.appendChild(profile);

        let name = document.createElement('h2');    // create "name" var that is a headline
        name.textContent = "Cargill McGillicuddy";  // create the (literal) textContent within the "name" variable
        profile.appendChild(name);                  // within parent (voteBox), add child "name" variable

        let yeppers = document.createElement('button'); // Create var "yeppers" that is a button
        yeppers.textContent = "Like";                   // let the text of the button "yeppers" say "Like"
        profile.appendChild(yeppers);                   // add button "yeppers" to parent "profile"
        button.addEventListener('click', function() {   // add an "event listener" that prints "Liked" to the
            console.log("Liked");                       // console when pressed
        });                                             // doesn't seem to work

        let nope = document.createElement('button');
        nope.textContent = "Nope";
        profile.appendChild(nope);
        button.addEventListener('click', function() {
            console.log(cargill + " has been noped.")
        });

        console.log('clicked');
    });
}

window.addEventListener('load', init);