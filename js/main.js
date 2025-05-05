// Sample data structure for resources
const resources = [
    {
        id: 1,
        title: 'Learning JavaScript',
        description: 'A comprehensive guide to JavaScript programming',
        category: 'Programming',
        image: 'https://via.placeholder.com/280x160',
        url: '#'
    },
    {
        id: 2,
        title: 'Web Design Basics',
        description: 'Learn the fundamentals of web design',
        category: 'Design',
        image: 'https://via.placeholder.com/280x160',
        url: '#'
    },
    {
        id: 3,
        title: 'Digital Marketing Essentials',
        description: 'Master the basics of digital marketing',
        category: 'Marketing',
        image: 'https://via.placeholder.com/280x160',
        url: '#'
    }
];

// Function to create a resource card
function createResourceCard(resource) {
    return `
        <div class="resource-card">
            <img src="${resource.image}" alt="${resource.title}">
            <div class="content">
                <h3>${resource.title}</h3>
                <p>${resource.description}</p>
                <p class="category"><strong>Category:</strong> ${resource.category}</p>
                <a href="${resource.url}" class="btn">View Resource</a>
            </div>
        </div>
    `;
}

// Function to display resources
function displayResources(resourcesList) {
    const resourcesGrid = document.querySelector('.resources-grid');
    if (resourcesGrid) {
        resourcesGrid.innerHTML = resourcesList
            .map(resource => createResourceCard(resource))
            .join('');
    }
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredResources = resources.filter(resource => 
                resource.title.toLowerCase().includes(searchTerm) ||
                resource.description.toLowerCase().includes(searchTerm) ||
                resource.category.toLowerCase().includes(searchTerm)
            );
            displayResources(filteredResources);
        });
    }
}

// Initialize the page
function init() {
    displayResources(resources);
    handleSearch();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);