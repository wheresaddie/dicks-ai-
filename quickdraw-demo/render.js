/* function renderDrawing(drawing, canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    
    drawing.drawing.forEach(stroke => {
      ctx.beginPath();
      ctx.moveTo(stroke[0][0], stroke[1][0]);
      
      for (let i = 1; i < stroke[0].length; i++) {
        ctx.lineTo(stroke[0][i], stroke[1][i]);
      }
      
      ctx.stroke();
    });
  }
  
  function loadDrawings() {
    fetch('drawings.json')
      .then(response => response.json())
      .then(drawings => {
        const canvas = document.getElementById('canvas');
        let currentDrawingIndex = 0;
        
        function displayNextDrawing() {
          renderDrawing(drawings[currentDrawingIndex], canvas);
          currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
        }
        
        displayNextDrawing();
        setInterval(displayNextDrawing, 4000); // Display a new drawing every 4 seconds
      });
  }
  
  window.addEventListener('load', loadDrawings);

  // attempt 2 

  function captureCanvasAsJPEG(canvas) {
    const dataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.jpg';
    link.click();
  }
  
  function renderDrawing(drawing, canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    
    drawing.drawing.forEach(stroke => {
      ctx.beginPath();
      ctx.moveTo(stroke[0][0], stroke[1][0]);
      
      for (let i = 1; i < stroke[0].length; i++) {
        ctx.lineTo(stroke[0][i], stroke[1][i]);
      }
      
      ctx.stroke();
    });
  
    // Capture the canvas as JPEG after rendering the drawing
    captureCanvasAsJPEG(canvas);
  }
  
  function loadDrawings() {
    fetch('drawings.json')
      .then(response => response.json())
      .then(drawings => {
        const canvas = document.getElementById('canvas');
        let currentDrawingIndex = 0;
        
        function displayNextDrawing() {
          renderDrawing(drawings[currentDrawingIndex], canvas);
          currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
        }
        
        displayNextDrawing();
        setInterval(displayNextDrawing, 2000); // Display a new drawing every 2 seconds
      });
  }
  
  window.addEventListener('load', loadDrawings);

  

*/

/* attempt 3 

function captureCanvasAsJPEG(canvas) {
    const dataURL = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.jpg';
    link.click();
  }
  
  function renderDrawing(drawing, canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    
    const scaleX = canvas.width / 256;
    const scaleY = canvas.height / 256;
    
    drawing.drawing.forEach(stroke => {
      ctx.beginPath();
      ctx.moveTo(stroke[0][0] * scaleX, stroke[1][0] * scaleY);
      
      for (let i = 1; i < stroke[0].length; i++) {
        ctx.lineTo(stroke[0][i] * scaleX, stroke[1][i] * scaleY);
      }
      
      ctx.stroke();
    });
    
    captureCanvasAsJPEG(canvas);
  }
  
  function loadDrawings() {
    fetch('drawings.json')
      .then(response => response.json())
      .then(drawings => {
        const canvas = document.getElementById('canvas');
        let currentDrawingIndex = 0;
        
        function displayNextDrawing() {
          renderDrawing(drawings[currentDrawingIndex], canvas);
          currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
        }
        
        displayNextDrawing();
        setInterval(displayNextDrawing, 4000); // Display a new drawing every 4 seconds
      });
  }
  
  window.addEventListener('load', loadDrawings);
  */

  function captureCanvasAsPNG(canvas) {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'drawing.png';
    link.click();
  }
  
  function renderDrawing(drawing, canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Set the canvas background color to white
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    
    const scaleX = canvas.width / 256;
    const scaleY = canvas.height / 256;
    
    drawing.drawing.forEach(stroke => {
      ctx.beginPath();
      ctx.moveTo(stroke[0][0] * scaleX, stroke[1][0] * scaleY);
      
      for (let i = 1; i < stroke[0].length; i++) {
        ctx.lineTo(stroke[0][i] * scaleX, stroke[1][i] * scaleY);
      }
      
      ctx.stroke();
    });
    
    captureCanvasAsPNG(canvas);
  }
  
  function loadDrawings() {
    fetch('drawings.json')
      .then(response => response.json())
      .then(drawings => {
        const canvas = document.getElementById('canvas');
        let currentDrawingIndex = 0;
        
        function displayNextDrawing() {
          renderDrawing(drawings[currentDrawingIndex], canvas);
          currentDrawingIndex = (currentDrawingIndex + 1) % drawings.length;
        }
        
        displayNextDrawing();
        setInterval(displayNextDrawing, 4000); // Display a new drawing every 4 seconds
      });
  }
  
  window.addEventListener('load', loadDrawings);