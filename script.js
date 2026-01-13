// Main JavaScript for Nimbus Healthcare Support Page

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');
const topicsGrid = document.getElementById('topics-grid');
const troubleshootingList = document.getElementById('troubleshooting-list');
const educationGrid = document.getElementById('education-grid');
const howtoGrid = document.getElementById('howto-grid');
const modal = document.getElementById('article-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');
const productCards = document.querySelectorAll('.product-card');

// Aura Chat Elements
const auraFab = document.getElementById('aura-fab');
const auraChatModal = document.getElementById('aura-chat-modal');
const auraChatClose = document.getElementById('aura-chat-close');
const auraChatInput = document.getElementById('aura-chat-input');
const auraChatSend = document.getElementById('aura-chat-send');
const auraChatMessages = document.getElementById('aura-chat-messages');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMobileMenu();
    initDropdowns();
    initNavbarScroll();
    populateTopics();
    populateTroubleshooting();
    populateEducation();
    populateHowTos();
    setupEventListeners();
    setupAuraChat();
});

// Theme Toggle
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check localStorage for saved theme preference, default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
    }
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            body.classList.toggle('light-mode');
            const isLightMode = body.classList.contains('light-mode');
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        });
    }
}

// Mobile Menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const body = document.body;
    
    if (menuBtn && mobileOverlay) {
        menuBtn.addEventListener('click', function() {
            body.classList.toggle('menu-open');
            mobileOverlay.classList.toggle('active');
        });
        
        // Close menu when clicking on links
        const mobileLinks = mobileOverlay.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                body.classList.remove('menu-open');
                mobileOverlay.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        mobileOverlay.addEventListener('click', function(e) {
            if (e.target === mobileOverlay) {
                body.classList.remove('menu-open');
                mobileOverlay.classList.remove('active');
            }
        });
    }
}

// Dropdowns
function initDropdowns() {
    const dropdownItems = document.querySelectorAll('.nav-item.has-dropdown');
    
    dropdownItems.forEach(item => {
        const dropdown = item.querySelector('.dropdown-menu');
        
        if (dropdown) {
            item.addEventListener('mouseenter', () => {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateX(-50%) translateY(0)';
            });
            
            item.addEventListener('mouseleave', () => {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateX(-50%) translateY(10px)';
            });
        }
    });
}

// Navbar scroll shadow
function initNavbarScroll() {
    const navbarPill = document.querySelector('.navbar-pill');
    
    if (navbarPill) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                navbarPill.classList.add('scrolled');
            } else {
                navbarPill.classList.remove('scrolled');
            }
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Product card clicks
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterByCategory(category);
        });
    });

    // Modal close
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Populate Topics Section
function populateTopics() {
    topicsGrid.innerHTML = '';
    
    supportData.topics.forEach(topic => {
        const topicCard = createTopicCard(topic);
        topicsGrid.appendChild(topicCard);
    });
}

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.onclick = () => openModal(topic.title, topic.description, topic.category, topic.content || null);
    
    card.innerHTML = `
        <h3>${topic.title}</h3>
        <span class="category">${topic.category}</span>
    `;
    
    return card;
}

// Populate Troubleshooting Section
function populateTroubleshooting() {
    troubleshootingList.innerHTML = '';
    
    supportData.troubleshooting.forEach(item => {
        const troubleshootingItem = createTroubleshootingItem(item);
        troubleshootingList.appendChild(troubleshootingItem);
    });
}

function createTroubleshootingItem(item) {
    const div = document.createElement('div');
    div.className = 'troubleshooting-item';
    div.onclick = () => openModal(item.title, item.description, item.category, item.content);
    
    const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">${tagsHtml}</div>
    `;
    
    return div;
}

// Populate Education Section
function populateEducation() {
    educationGrid.innerHTML = '';
    
    supportData.education.forEach(item => {
        const educationCard = createEducationCard(item);
        educationGrid.appendChild(educationCard);
    });
}

function createEducationCard(item) {
    const card = document.createElement('div');
    card.className = 'education-card';
    card.onclick = () => openModal(item.title, item.description, item.category, item.content);
    
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    
    return card;
}

// Populate How-To Section
function populateHowTos() {
    howtoGrid.innerHTML = '';
    
    supportData.howtos.forEach(item => {
        const howtoCard = createHowToCard(item);
        howtoGrid.appendChild(howtoCard);
    });
}

function createHowToCard(item) {
    const card = document.createElement('div');
    card.className = 'howto-card';
    card.onclick = () => openModal(item.title, item.description, item.category, item.content);
    
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
    `;
    
    return card;
}

// Search functionality
function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query.length < 2) {
        searchResults.classList.remove('active');
        searchResults.innerHTML = '';
        return;
    }
    
    const results = performSearch(query);
    displaySearchResults(results);
}

function performSearch(query) {
    const results = [];
    
    // Search topics
    supportData.topics.forEach(item => {
        if (matchesSearch(item, query)) {
            results.push({...item, type: 'topic'});
        }
    });
    
    // Search troubleshooting
    supportData.troubleshooting.forEach(item => {
        if (matchesSearch(item, query)) {
            results.push({...item, type: 'troubleshooting'});
        }
    });
    
    // Search education
    supportData.education.forEach(item => {
        if (matchesSearch(item, query)) {
            results.push({...item, type: 'education'});
        }
    });
    
    // Search how-tos
    supportData.howtos.forEach(item => {
        if (matchesSearch(item, query)) {
            results.push({...item, type: 'howto'});
        }
    });
    
    return results;
}

function matchesSearch(item, query) {
    const searchableText = `
        ${item.title} 
        ${item.description} 
        ${item.category || ''} 
        ${item.tags ? item.tags.join(' ') : ''}
        ${item.content || ''}
    `.toLowerCase();
    
    return searchableText.includes(query);
}

function displaySearchResults(results) {
    searchResults.classList.add('active');
    
    if (results.length === 0) {
        searchResults.innerHTML = `
            <div class="search-result-item">
                <h3>No results found</h3>
                <p>Try different keywords or browse our topics below.</p>
            </div>
        `;
        return;
    }
    
    // Create result items
    searchResults.innerHTML = '';
    results.slice(0, 10).forEach(item => {
        const typeLabel = item.type.charAt(0).toUpperCase() + item.type.slice(1);
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.onclick = () => openModal(item.title, item.description, item.category || '', item.content || null);
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <span class="category">${typeLabel}</span>
        `;
        searchResults.appendChild(div);
    });
}

// Filter by category
function filterByCategory(category) {
    const query = category;
    searchInput.value = category;
    handleSearch();
    
    // Scroll to search results
    setTimeout(() => {
        document.querySelector('.search-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

// Modal functionality
function openModal(title, description, category, content = null) {
    let contentHtml = '';
    if (content) {
        contentHtml = content;
    } else {
        contentHtml = '<p>This article is currently being populated with content. Please check back soon or contact support for assistance.</p>';
    }
    
    modalBody.innerHTML = `
        <h2>${escapeHtml(title)}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">${escapeHtml(description)}</p>
        ${category ? `<span class="category" style="display: inline-block; background-color: var(--bg-secondary); padding: 4px 12px; border-radius: 20px; font-size: 12px; margin-bottom: 24px; color: var(--text-secondary);">${escapeHtml(category)}</span>` : ''}
        ${contentHtml}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Helper function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Make openModal available globally for inline onclick handlers
window.openModal = openModal;

// Aura Chat functionality
function setupAuraChat() {
    if (!auraFab || !auraChatModal) return;
    
    // Open chat modal
    auraFab.addEventListener('click', function() {
        auraChatModal.classList.add('active');
        auraChatInput.focus();
    });
    
    // Close chat modal
    auraChatClose.addEventListener('click', function() {
        auraChatModal.classList.remove('active');
    });
    
    // Close on outside click
    auraChatModal.addEventListener('click', function(e) {
        if (e.target === auraChatModal) {
            auraChatModal.classList.remove('active');
        }
    });
    
    // Send message on button click
    auraChatSend.addEventListener('click', function() {
        sendAuraMessage();
    });
    
    // Send message on Enter key
    auraChatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendAuraMessage();
        }
    });
}

function sendAuraMessage() {
    const message = auraChatInput.value.trim();
    if (!message) return;
    
    // Disable input while processing
    auraChatInput.disabled = true;
    auraChatSend.disabled = true;
    
    // Clear input
    auraChatInput.value = '';
    
    // Add user message to chat
    addChatMessage(message, 'user');
    
    // Show typing indicator
    const typingIndicator = showTypingIndicator();
    
    // Send message to Aura (Notion API)
    // TODO: Replace with actual Notion Aura API endpoint
    queryAura(message).then(response => {
        // Remove typing indicator
        removeTypingIndicator(typingIndicator);
        
        // Add bot response
        addChatMessage(response, 'bot');
        
        // Re-enable input
        auraChatInput.disabled = false;
        auraChatSend.disabled = false;
        auraChatInput.focus();
    }).catch(error => {
        // Remove typing indicator
        removeTypingIndicator(typingIndicator);
        
        // Add error message
        addChatMessage('Sorry, I encountered an error. Please try again or contact support at support@nimbushealthcare.com', 'bot');
        
        // Re-enable input
        auraChatInput.disabled = false;
        auraChatSend.disabled = false;
        auraChatInput.focus();
    });
}

function addChatMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `aura-message aura-message-${type}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'aura-message-content';
    
    const messageP = document.createElement('p');
    messageP.textContent = message;
    contentDiv.appendChild(messageP);
    
    messageDiv.appendChild(contentDiv);
    auraChatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    auraChatMessages.scrollTop = auraChatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'aura-message aura-message-bot';
    typingDiv.id = 'aura-typing-indicator';
    
    const typingContent = document.createElement('div');
    typingContent.className = 'aura-typing';
    
    for (let i = 0; i < 3; i++) {
        const span = document.createElement('span');
        typingContent.appendChild(span);
    }
    
    typingDiv.appendChild(typingContent);
    auraChatMessages.appendChild(typingDiv);
    
    // Scroll to bottom
    auraChatMessages.scrollTop = auraChatMessages.scrollHeight;
    
    return typingDiv;
}

function removeTypingIndicator(indicator) {
    if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
    }
}

// Query Aura via Notion API
async function queryAura(message) {
    // TODO: Replace with actual Notion Aura API endpoint
    // This is a placeholder implementation
    
    // For now, return a mock response
    // In production, this would call your Notion Aura API
    
    try {
        // Example API call structure (uncomment and configure when API is ready):
        /*
        const response = await fetch('YOUR_NOTION_AURA_API_ENDPOINT', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_TOKEN'
            },
            body: JSON.stringify({
                message: message,
                context: 'support_page'
            })
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const data = await response.json();
        return data.response || data.message || 'I received your message.';
        */
        
        // Mock response for now
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Thank you for your question. I\'m processing your request. In the meantime, you can browse our support topics or contact our support team at support@nimbushealthcare.com for immediate assistance.');
            }, 1000);
        });
    } catch (error) {
        console.error('Error querying Aura:', error);
        throw error;
    }
}
