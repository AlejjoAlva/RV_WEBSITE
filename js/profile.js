// Sample data for saved resources
const savedResources = [
    {
        id: 1,
        title: 'Advanced JavaScript Patterns',
        description: 'Learn advanced design patterns in JavaScript',
        category: 'Programming',
        image: 'https://via.placeholder.com/280x160',
        url: '#'
    },
    {
        id: 2,
        title: 'UI/UX Best Practices',
        description: 'A guide to modern UI/UX design principles',
        category: 'Design',
        image: 'https://via.placeholder.com/280x160',
        url: '#'
    },
    {
        id: 3,
        title: 'Digital Marketing Strategy',
        description: 'Comprehensive digital marketing guide',
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
                <div class="card-actions">
                    <a href="${resource.url}" class="btn">View Resource</a>
                    <button onclick="removeResource(${resource.id})" class="btn-remove">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to display saved resources
function displaySavedResources() {
    const resourcesGrid = document.querySelector('.resources-grid');
    if (resourcesGrid) {
        resourcesGrid.innerHTML = savedResources
            .map(resource => createResourceCard(resource))
            .join('');
    }
}

// Function to remove a resource from saved items
function removeResource(resourceId) {
    const index = savedResources.findIndex(resource => resource.id === resourceId);
    if (index !== -1) {
        savedResources.splice(index, 1);
        displaySavedResources();
        updateResourceCount();
    }
}

// Function to update the resource count in stats
function updateResourceCount() {
    const savedCount = document.querySelector('.stat-card p');
    if (savedCount) {
        savedCount.textContent = savedResources.length;
    }
}

// Initialize the page
function init() {
    displaySavedResources();
    updateResourceCount();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);