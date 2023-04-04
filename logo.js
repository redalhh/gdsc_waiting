const modelViewer = document.getElementById("gdsc");
        let lastX = 0;
        let lastY = 0;
        let dragging = false;
        document.addEventListener("mousemove", e => {
            if (dragging) {
                let deltaX = e.clientX - lastX;
                let deltaY = e.clientY - lastY;
                lastX = e.clientX;
                lastY = e.clientY;
                modelViewer.scene.cameraOrbit(deltaX, deltaY);
            }
        });
        document.addEventListener("mousedown", e => {
            lastX = e.clientX;
            lastY = e.clientY;
            dragging = true;
        });
        document.addEventListener("mouseup", () => {
            dragging = false;
        });
