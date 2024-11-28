 
   let textInput = document.getElementById('text-input');
   let wordCount = document.getElementById('word-count');
   let charCount = document.getElementById('char-count');
   let sentenceCount = document.getElementById('sentence-count');
   let readingTime = document.getElementById('reading-time');


   function updateCounts() {
       let text = textInput.value;
       
       let words = text.trim() ? text.trim().split(/\s+/).length : 0;
       wordCount.innerText = words;
       
     
       charCount.innerText = text.length;
       
       let sentences = text.trim() ? text.split(/[.!?]/).length - 1 : 0;
       sentenceCount.innerText = sentences;
       
       readingTime.innerText = Math.ceil(words / 225);
   }

   function copyText() {
       textInput.select();
       document.execCommand('copy');
       alert('Text copied!');
   }
   function clearText() {
       textInput.value = '';
       updateCounts();
   }

   textInput.addEventListener('input', updateCounts);