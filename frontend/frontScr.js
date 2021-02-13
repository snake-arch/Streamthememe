const url = 'https://streamthememe.herokuapp.com/memes';
  
async function fetchData() {
  const response = await fetch('https://streamthememe.herokuapp.com/memes');
  const data = await response.json();
  memes = [];
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    memes.push(data[i]);
    var author1 = data[i].author;
    var caption1 = data[i].caption;
    var link1 = data[i].link;
    document
      .getElementById("add_after_me")
      .insertAdjacentHTML(
        "afterend",
        '<div class="col-sm-6 col-md-8">' +
          '<div class="thumbnail">' +
          '<img src="' +
          link1 +
          '" alt="" id="link">' +
          '<div class="caption">' +
          '<h3 id="memecaption">' +
          caption1 +
          "</h3>" +
          "<h2>By " +
          '<span id="author">' +
          author1 +
          "</span>" +
          "</h2>" +'<p>'+'<button type="button" class="btn btn-default" aria-label="Left Align">'+
          '<span class="glyphicon glyphicon-remove" aria-hidden="true">'+'</span>'+
        '</button>'+'</p>'+
          "</div>" +
          "</div>" +
          "</div>"
      );
  }
}

//fetchData();

// async function postFormDataAsJson({ url, formData }) {
//   const plainFormData = Object.fromEntries(formData.entries());
//   const formDataJsonString = JSON.stringify(plainFormData);
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: formDataJsonString,
//   };
//   const response = await fetch(url, fetchOptions);
//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   } else if (response.ok) {
//   }
//   return response.json();
// }

// async function handleFormSubmit(event) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const url = 'http://localhost:3000/memes';
//   try {
//     const formData = new FormData(form);
//     const responseData = await postFormDataAsJson({ url, formData });

//     //document.getElementById("myForm").reset();
//     //window.location.href=window.location.href;
//     //window.location.reload();
//   } catch (error) {
//     console.error(error);
//   }
// }

// function myfunction() {
//   //document.getElementById("memeform").reset();
//   // window.location.reload();
//   //window.location.href=window.location.href;
//   //document.getElementById("memeform").reset();
//   document.getElementById("stream").innerHTML = "";
//   fetchData();
// }

// async function sendDATA(event) {
//   const form = event.currentTarget;
//   const url = 'http://localhost:3000/memes';
//   try {
//     const formData = new FormData(form);
//     const plainFormData = Object.fromEntries(formData.entries());
//     const formDataJsonString = JSON.stringify(plainFormData);
//     const fetchOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: formDataJsonString,
//     };
//     const response = await fetch(url, fetchOptions).then(fetchData());
//     return response.json();
//   } catch (error) {
//     console.error(error);
//   } finally {
//     window.location.reload();
//   }
// } 
// // window.onload=function(){
// //     const memeform = document.getElementById("memeform");
// //     if(memeform){ ///if its wrong
// //         memeform.addEventListener("submit",handleFormSubmit);
// //     }
// // }

// const memeform = document.getElementById("memeform");
// if (memeform) {
//   ///if its wrong
//   memeform.addEventListener("submit", handleFormSubmit);
//   myfunction();
// }
//window.onload = function(){
// function checkURL(bruh) {
//     return(bruh.match(/\.(jpeg|jpg||gif|png)$/)!=null);
//   }
  
  //window.onload = function(){
document.getElementById("please").onsubmit = function() {
    //var x=document.getElementById('memeurl').value;
    var load = {
      author: document.getElementById('memename').value,
      caption: document.getElementById('memecaption').value,
      link: document.getElementById('memeurl').value
      }
    // if (!checkURL(x)) {
    //   alert("Please enter a valid URL");
    // }
    // else {
      
    console.log(load);
    fetch('https://streamthememe.herokuapp.com/memes', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(load)
    }).then(res => {
        console.log(res);
        fetchData();
    }).catch(err => {
        console.log(err);
    });
    
    return false;
    
  };
    


// document.getElementById("memeform").onsubmit = function() {
//     var load = {
//         author: document.getElementById('memename').value,
//         caption: document.getElementById('memecaption').value,
//         link: document.getElementById('memeurl').value
//     }
//     console.log(load);
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body : JSON.stringify(load)
//     }).then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.log(err);
//     });
// };