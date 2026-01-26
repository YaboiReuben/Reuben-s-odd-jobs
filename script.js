// Data Constants
const SERVICES = [
  { name: 'Technology Help', icon: '🖥️', price: '$10–$20', details: 'Troubleshooting, device setup, or basic tech support' },
  { name: 'Cleaning', icon: '🧼', price: '$15–$25', details: 'Light cleaning tasks around the home' },
  { name: 'Party Help', icon: '🎉', price: '$15–$25', details: 'Assisting with party setup, hosting, or post-party cleanup' },
  { name: 'Pet Sitting', icon: '🐾', price: '$10–$20', details: 'Caring for pets, including feeding and well-being' },
  { name: 'Errands', icon: '🏃', price: '$10–$15', details: 'Shopping, deliveries, or small tasks' },
  { name: 'Gardening', icon: '🌿', price: '$15–$25', details: 'Watering plants, weeding, basic gardening' },
  { name: 'Senior Assistance', icon: '🧑‍⚕️', price: '$20–$30', details: 'Companionship, help with non-medical tasks or errands' },
  { name: 'General Labor', icon: '💪', price: '$15–$30+', details: 'Moving furniture, small repairs, general manual work' }
];

const FAQS = [
  { q: "What areas do you service?", a: "We primarily service Albury and the surrounding local suburbs. If you're slightly further out, feel free to reach out!" },
  { q: "What forms of payment do you accept?", a: "We accept Cash, Bank Transfer, PayPal, and PayID. Payment is typically settled upon completion." },
  { q: "What if the task takes longer than expected?", a: "If a task is significantly more complex, we'll chat about a fair price adjustment before continuing. Transparency is key!" },
  { q: "Are your prices negotiable?", a: "Yes! The prices listed are guides. We aim to be fair and can negotiate based on specific difficulty and your budget." }
];

const HOURS = {
  term: [
    { day: 'Monday', h: '4:00 PM – 8:00 PM' },
    { day: 'Tuesday – Wednesday', h: 'Closed' },
    { day: 'Thursday', h: '4:00 PM – 8:00 PM' },
    { day: 'Friday', h: '4:00 PM – 9:00 PM' },
    { day: 'Saturday – Sunday', h: '8:00 AM – 10:00 PM' }
  ],
  holidays: [
    { day: 'Monday – Friday', h: '10:00 AM – 6:00 PM' },
    { day: 'Saturday – Sunday', h: '8:00 AM – 10:00 PM' }
  ],
  closures: [
    { name: 'Christmas Eve', icon: '🎄' }, { name: 'Christmas Day', icon: '🎅' }, 
    { name: 'New Year’s Eve', icon: '🎆' }, { name: 'New Year’s Day', icon: '🎉' }, 
    { name: 'Easter Sunday', icon: '🐣' }, { name: 'Good Friday', icon: '✝️' }
  ]
};

// UI Rendering Functions
function renderServices() {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = SERVICES.map(s => `
        <div class="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col">
            <div class="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-indigo-50 transition-transform duration-300">${s.icon}</div>
            <h4 class="text-xl font-bold text-slate-900 mb-2">${s.name}</h4>
            <div class="text-indigo-600 font-bold text-lg mb-3">${s.price}</div>
            <p class="text-slate-600 text-sm leading-relaxed">${s.details}</p>
        </div>
    `).join('');
}

function renderFAQs() {
    const list = document.getElementById('faq-list');
    list.innerHTML = FAQS.map((f, i) => `
        <div class="faq-item border-b border-slate-100 last:border-none">
            <button class="w-full py-6 flex items-center justify-between text-left focus:outline-none group faq-toggle" data-index="${i}">
                <span class="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">${f.q}</span>
                <span class="text-2xl transition-transform duration-300 faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p class="text-slate-600 leading-relaxed">${f.a}</p>
            </div>
        </div>
    `).join('');

    // Attach FAQ event listeners
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('active');
            
            // Close all others
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-icon').innerText = '+';
            });

            if (!isOpen) {
                item.classList.add('active');
                btn.querySelector('.faq-icon').innerText = '−';
            }
        });
    });
}

function renderHours() {
    const termDiv = document.getElementById('school-term-hours');
    const holiDiv = document.getElementById('holiday-hours');
    const closureDiv = document.getElementById('closures');

    termDiv.innerHTML = `
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-600"><span class="text-2xl">🎒</span> School Term</h3>
        <ul class="space-y-4">
            ${HOURS.term.map(item => `
                <li class="flex justify-between items-center py-3 border-b border-slate-50 last:border-none">
                    <span class="font-medium text-slate-700">${item.day}</span>
                    <span class="px-4 py-1 rounded-full text-sm font-semibold ${item.h === 'Closed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}">${item.h}</span>
                </li>
            `).join('')}
        </ul>
    `;

    holiDiv.innerHTML = `
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600"><span class="text-2xl">🏖️</span> Holidays</h3>
        <ul class="space-y-4">
            ${HOURS.holidays.map(item => `
                <li class="flex justify-between items-center py-3 border-b border-slate-50 last:border-none">
                    <span class="font-medium text-slate-700">${item.day}</span>
                    <span class="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">${item.h}</span>
                </li>
            `).join('')}
        </ul>
    `;

    closureDiv.innerHTML = `
        <h3 class="text-lg font-bold mb-4 text-indigo-900">Special Closures ⛔</h3>
        <div class="flex flex-wrap gap-3">
            ${HOURS.closures.map(c => `
                <div class="bg-white px-4 py-2 rounded-xl text-sm border border-indigo-100 flex items-center gap-2 shadow-sm">
                    <span>${c.icon}</span><span class="font-medium text-slate-700">${c.name}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Interactivity
function setupNav() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function setupBookingForm() {
    const form = document.getElementById('booking-form');
    const container = document.getElementById('booking-container');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        const formData = new FormData(form);
        const service = formData.get('serviceType');
        const email = formData.get('email');

        btn.disabled = true;
        btn.innerHTML = '<span class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> Submitting...';

        // Simulate API delay
        setTimeout(() => {
            container.innerHTML = `
                <div class="py-24 px-4 text-center">
                    <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 success-bounce">✓</div>
                    <h3 class="text-3xl font-bold mb-4 text-slate-900">Thank you!</h3>
                    <p class="text-xl text-slate-600 mb-10">We've received your booking request for <strong>${service}</strong>. We'll confirm via email (${email}) shortly.</p>
                    <button onclick="location.reload()" class="text-indigo-600 font-semibold hover:underline">Need to book another task?</button>
                </div>
            `;
        }, 1500);
    });
}

// Initializing
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').innerText = new Date().getFullYear();
    renderServices();
    renderFAQs();
    renderHours();
    setupNav();
    setupBookingForm();
});