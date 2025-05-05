// Sample data structure for categories
const categories = [
    {
        id: 1,
        name: 'Programming',
        icon: 'fas fa-code',
        count: 15
    },
    {
        id: 2,
        name: 'Design',
        icon: 'fas fa-palette',
        count: 10
    },
    {
        id: 3,
        name: 'Business',
        icon: 'fas fa-briefcase',
        count: 8
    },
    {
        id: 4,
        name: 'Marketing',
        icon: 'fas fa-chart-line',
        count: 12
    },
    {
        id: 5,
        name: 'Education',
        icon: 'fas fa-graduation-cap',
        count: 20
    },
    {
        id: 6,
        name: 'Technology',
        icon: 'fas fa-microchip',
        count: 18
    }
];

// Function to create a category card
function createCategoryCard(category) {
    return `
        <div class="category-card" data-id="${category.id}">
            <i class="${category.icon}"></i>
            <h3>${category.name}</h3>
            <p>${category.count} resources</p>
        </div>
    `;
}

// Function to display categories
function displayCategories() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories
            .map(category => createCategoryCard(category))
            .join('');
        
        // Add click event listeners to category cards
        const categoryCards = document.querySelectorAll('.category-card');
        categoryCards.forEach(card => {
            card.addEventListener('click', () => {
                const categoryId = card.dataset.id;
                // Here you would typically filter resources by category
                // and redirect to a filtered view
                window.location.href = `index.html?category=${categoryId}`;
            });
        });
    }
}

// Initialize the page
function init() {
    displayCategories();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);