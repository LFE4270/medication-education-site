// Load medications data and initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMedications();
    setupEventListeners();
});

// Fetch and load medications from the JSON file
async function loadMedications() {
    try {
        const response = await fetch('data/medications.json');
        const data = await response.json();
        window.allMedications = data.medications;
        displayMedications(window.allMedications);
    } catch (error) {
        console.error('Error loading medications:', error);
        document.getElementById('medicationsGrid').innerHTML = 
            '<p>Error loading medications. Please refresh the page.</p>';
    }
}

// Display medications in the grid
function displayMedications(medications) {
    const grid = document.getElementById('medicationsGrid');
    const noResults = document.getElementById('noResults');

    if (medications.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    grid.innerHTML = medications.map(med => createMedicationCard(med)).join('');

    // Add click listeners to all cards
    document.querySelectorAll('.medication-card').forEach(card => {
        card.addEventListener('click', function() {
            const medName = this.dataset.medication;
            const medication = window.allMedications.find(m => m.name === medName);
            showMedicationDetails(medication);
        });
    });
}

// Create medication card HTML
function createMedicationCard(medication) {
    const categoryClass = medication.category.toLowerCase().replace(/\s+/g, '-');
    
    return `
        <div class="medication-card" data-medication="${medication.name}">
            <div class="card-icon">${medication.icon}</div>
            <span class="card-category ${categoryClass}">${medication.category}</span>
            <h3>${medication.name}</h3>
            <p>${medication.shortDescription}</p>
            <button class="view-details-btn">View Details</button>
        </div>
    `;
}

// Show medication details in modal
function showMedicationDetails(medication) {
    const modal = document.getElementById('medicationModal');
    const modalBody = document.getElementById('modalBody');

    const categoryClass = medication.category.toLowerCase().replace(/\s+/g, '-');

    const detailsHTML = `
        <div class="modal-header">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">${medication.icon}</div>
            <h2>${medication.name}</h2>
            <span class="modal-category ${categoryClass}">${medication.category}</span>
        </div>

        <div class="detail-section">
            <h3>What is it?</h3>
            <p>${medication.description}</p>
        </div>

        <div class="detail-section">
            <h3>Uses</h3>
            <ul>
                ${medication.uses.map(use => `<li>${use}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>How to Use</h3>
            <p>${medication.howToUse}</p>
        </div>

        <div class="detail-section">
            <h3>Dosage Information</h3>
            <p>${medication.dosage}</p>
        </div>

        <div class="detail-section">
            <h3>Common Side Effects</h3>
            <ul>
                ${medication.sideEffects.map(effect => `<li>${effect}</li>`).join('')}
            </ul>
        </div>

        <div class="detail-section">
            <h3>Serious Side Effects</h3>
            <p>${medication.seriousSideEffects}</p>
        </div>

        <div class="detail-section">
            <h3>Drug Interactions</h3>
            <p>${medication.drugInteractions}</p>
        </div>

        <div class="detail-section">
            <h3>Precautions & Warnings</h3>
            <ul>
                ${medication.precautions.map(precaution => `<li>${precaution}</li>`).join('')}
            </ul>
        </div>

        <div class="warning-box">
            <strong>⚠️ Important Disclaimer:</strong>
            <p>This information is for educational purposes only and should not replace professional medical advice. 
            Always consult with a healthcare provider before starting, stopping, or changing any medication. 
            If you experience any concerning symptoms, seek immediate medical attention.</p>
        </div>
    `;

    modalBody.innerHTML = detailsHTML;
    modal.style.display = 'block';
}

// Setup event listeners
function setupEventListeners() {
    // Modal close button
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Click outside modal to close
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('medicationModal');
        if (event.target === modal) {
            closeModal();
        }
    });

    // Search functionality
    document.getElementById('searchBtn').addEventListener('click', performSearch);
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');

            // Filter medications
            const category = this.dataset.category;
            filterMedications(category);
        });
    });
}

// Close modal function
function closeModal() {
    document.getElementById('medicationModal').style.display = 'none';
}

// Perform search
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    if (searchTerm === '') {
        displayMedications(window.allMedications);
        return;
    }

    const filtered = window.allMedications.filter(med => 
        med.name.toLowerCase().includes(searchTerm) ||
        med.category.toLowerCase().includes(searchTerm) ||
        med.shortDescription.toLowerCase().includes(searchTerm)
    );

    displayMedications(filtered);
}

// Filter medications by category
function filterMedications(category) {
    // Reset search input
    document.getElementById('searchInput').value = '';

    if (category === 'all') {
        displayMedications(window.allMedications);
    } else {
        const filtered = window.allMedications.filter(med => med.category === category);
        displayMedications(filtered);
    }
}

// Allow Enter key in search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
