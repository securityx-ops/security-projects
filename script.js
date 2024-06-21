// script.js
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const appName = document.getElementById('appName').value;
    const appDescription = document.getElementById('appDescription').value;
    const appFile = document.getElementById('appFile').files[0];
    
    if (appName && appDescription && appFile) {
        const appList = document.getElementById('appList');
        
        const appDiv = document.createElement('div');
        appDiv.innerHTML = `<strong>${appName}</strong><p>${appDescription}</p>`;
        
        const appLink = document.createElement('a');
        appLink.href = URL.createObjectURL(appFile);
        appLink.textContent = 'Download';
        appLink.download = appName;
        
        appDiv.appendChild(appLink);
        appList.appendChild(appDiv);
        
        // Clear the form
        document.getElementById('uploadForm').reset();
    } else {
        alert('Please fill in all fields and select a file.');
    }
});
