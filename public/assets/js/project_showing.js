const projects = [
    {
        name: "AI Chatbot",
        images: [
            "project_images/surrat/Screenshot 2024-10-09 003122.png",
            "project_images/surrat/Screenshot 2024-10-09 003130.png",
            "project_images/surrat/Screenshot 2024-10-09 003138.png",
            "project_images/surrat/Screenshot 2024-10-09 003149.png",
            "project_images/surrat/Screenshot 2024-10-09 003157.png",
            "project_images/surrat/Screenshot 2024-10-09 003207.png",
            "project_images/surrat/Screenshot 2024-10-09 003213.png",
            "project_images/surrat/Screenshot 2024-10-09 003220.png",
            "project_images/surrat/Screenshot 2024-10-09 003226.png",
            "project_images/surrat/Screenshot 2024-10-09 003231.png",
            "project_images/surrat/Screenshot 2024-10-09 003240.png",
            "project_images/surrat/Screenshot 2024-10-09 003245.png",
            "project_images/surrat/Screenshot 2024-10-09 003252.png",
            "project_images/surrat/Screenshot 2024-10-09 003259.png",
            "project_images/surrat/Screenshot 2024-10-09 003305.png",
            "project_images/surrat/Screenshot 2024-10-09 003314.png",
            "project_images/surrat/Screenshot 2024-10-09 003320.png",
            "project_images/surrat/Screenshot 2024-10-09 003327.png",
            "project_images/surrat/Screenshot 2024-10-09 003335.png",
            "project_images/surrat/Screenshot 2024-10-09 003341.png",
            "project_images/surrat/Screenshot 2024-10-09 003347.png",
            "project_images/surrat/Screenshot 2024-10-09 003354.png",
            "project_images/surrat/Screenshot 2024-10-09 003401.png",
            "project_images/surrat/Screenshot 2024-10-09 003409.png",
            "project_images/surrat/Screenshot 2024-10-09 003414.png",
            "project_images/surrat/Screenshot 2024-10-09 003421.png",
            "project_images/surrat/Screenshot 2024-10-09 003433.png",
            "project_images/surrat/Screenshot 2024-10-09 003440.png",
            "project_images/surrat/Screenshot_20241009_232252_com.systemintegration.jpg",
            "project_images/surrat/Screenshot_20241009_232327_com.systemintegration.jpg",
            "project_images/surrat/Screenshot_20241009_232345_com.systemintegration.jpg",
            "project_images/surrat/Screenshot_20241009_232402_com.systemintegration.jpg",
            "project_images/surrat/Screenshot_20241009_232439_com.systemintegration.jpg"
        ]
    },
    {
        name: "Social Media Automation",
        images: [
            "project_images/mojo/Screenshot 2024-10-09 002145.png",
            "project_images/mojo/Screenshot 2024-10-09 002210.png",
            "project_images/mojo/Screenshot 2024-10-09 002230.png",
            "project_images/mojo/Screenshot 2024-10-09 002302.png",
            "project_images/mojo/Screenshot 2024-10-09 002337.png",
            "project_images/mojo/Screenshot 2024-10-09 002406.png",
            "project_images/mojo/Screenshot 2024-10-09 002415.png",
            "project_images/mojo/Screenshot 2024-10-09 002633.png",
            "project_images/mojo/Screenshot 2024-10-09 002642.png",
            "project_images/mojo/Screenshot 2024-10-09 002701.png",
            "project_images/mojo/Screenshot 2024-10-09 002723.png",
            "project_images/mojo/Screenshot 2024-10-09 002734.png",
            "project_images/mojo/Screenshot 2024-10-09 002746.png",
            "project_images/mojo/Screenshot 2024-10-09 002834.png",
            "project_images/mojo/Screenshot 2024-10-09 002843.png",
            "project_images/mojo/Screenshot 2024-10-09 002850.png",
            "project_images/mojo/Screenshot 2024-10-09 002901.png",
            "project_images/mojo/Screenshot 2024-10-09 002912.png",
        ]
    },
    {
        name: "HR Management",
        images: [
            "project_images/hr/Screenshot 2024-10-21 222403.png",
            "project_images/hr/Screenshot 2024-10-21 222539.png",
            "project_images/hr/Screenshot 2024-10-21 222558.png",
            "project_images/hr/Screenshot 2024-10-20 121750.png",
            "project_images/hr/Screenshot 2024-10-20 121854.png",
            "project_images/hr/Screenshot 2024-10-20 121931.png",
        ]
    },
    {
        name: "ATS Tool",
        images: [
            "project_images/ATS/Screenshot 2024-10-20 124421.png",
            "project_images/ATS/Screenshot 2024-10-20 125025.png",
            "project_images/ATS/screencapture-localhost-8501-2024-10-20-12_53_490.png",
            "project_images/ATS/Screenshot 2024-10-20 130941.png"
        ]
    }
];

let currentProject = 0;
let currentImage = 0;

function openModal(projectIndex) {
    currentProject = projectIndex;
    currentImage = 0;
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImage').src = projects[currentProject].images[currentImage];
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

function changeImage(n) {
    currentImage += n;
    const projectImages = projects[currentProject].images;
    if (currentImage >= projectImages.length) currentImage = 0;
    if (currentImage < 0) currentImage = projectImages.length - 1;
    document.getElementById('modalImage').src = projectImages[currentImage];
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == document.getElementById('imageModal')) {
        closeModal();
    }
}
function toggleDescription(element) {
    var description = element.parentElement;
    var fullText = description.querySelector('.full-text');
    var shortText = description.querySelector('.short-text');

    // Toggle the class to trigger the height animation
    description.classList.toggle('expand');

    if (description.classList.contains('expand')) {
        element.textContent = 'See Less';
        fullText.style.display = 'inline'; // Make full text visible
        shortText.style.display = 'none'; // Hide the short text
    } else {
        element.textContent = 'See More';
        fullText.style.display = 'none'; // Hide the full text
        shortText.style.display = 'inline'; // Show the short text
    }
}