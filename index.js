
//content
function run(){
let htmlCode=document.getElementById('htmlCode').value;
let cssCode=document.getElementById('cssCode').value;
let jsCode=document.getElementById('jsCode').value;
let output=document.getElementById('output')

output.contentDocument.body.innerHTML=htmlCode+"<style>"+cssCode+"</style>";
output.contentWindow.eval(jsCode);


}


// Grab the elements
const loadingScreen = document.getElementById("loadingScreen");
const mainContent = document.getElementById("mainContent");
const loadingBar = document.getElementById("loadingBar");

// Start loading bar animation for 3 seconds
setTimeout(() => {
  loadingBar.style.width = "100%"; // Animate the loading bar to full width
}, 0); // Start animation immediately

// Hide loading screen and show main content after 3 seconds
setTimeout(() => {
  loadingScreen.style.display = "none"; // Hide loading screen
  mainContent.style.display = "flex"; // Show the main content in the same place
}, 3000); // After 3 seconds, the content changes
