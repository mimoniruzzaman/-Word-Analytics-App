// Text Area !
let textArea = document.querySelector(".text-area");
// Word Count !
let wordCount = document.querySelector(".word-count");
// Cheracter Count !
let cheracterCount = document.querySelector(".cheracter-count");

// Linkedin - Count !
let linkedin = document.querySelector(".linkedin");
// Twitter - Count !
let twitter = document.querySelector(".twitter");

// Validation box !!
let wordAllow = document.querySelector(".word-alert");

// Warning BOx
// Linkedin Warning !
let boxDiv = document.querySelector(".box-div");
// Twitter Warning !
let boxDivTwo = document.querySelector(".box-div-two");

// Invalidation Check !!
let invalidationWordlist = ["payment", "@", "<script>"];

// Function Start !
function count() {
  // Invalidation Check !!
  invalidationWordlist.forEach((word) => {
    if (textArea.value.includes(word)) {
      textArea.value = textArea.value.replace(word, "");
      alert(`${word} Not Allow !!`);
    }
  });

  // input Validation!!
  // if (textArea.value.includes("payment")) {
  //   textArea.value = textArea.value.replace("payment", "");
  //   wordAllow.style.display = "block";
  // } else {
  //   wordAllow.style.display = "none";
  // }

  // Cheracter Count !!
  let count = textArea.value.length;
  cheracterCount.innerHTML = count;

  // Word Count !!
  wordCount.innerHTML = textArea.value.split(" ").length;
  if (textArea.value.length === 0) {
    wordCount.innerHTML = 0;
  }

  // Linkedin - Count !!
  let newLinkedin = 350 - count;
  linkedin.innerHTML = newLinkedin;
  if (newLinkedin <= 0) {
    boxDiv.style.display = "block";
    linkedin.innerHTML = 0;
  } else {
    boxDiv.style.display = "none";
  }

  // Twitter - Count !!
  let newTwitter = 250 - count;
  twitter.innerHTML = newTwitter;
  if (newTwitter <= 0) {
    boxDivTwo.style.display = "block";
    twitter.innerHTML = 0;
  } else {
    boxDivTwo.style.display = "none";
  }
}

textArea.addEventListener("input", count);
