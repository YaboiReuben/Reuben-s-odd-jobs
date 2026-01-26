// Data Constants
const SERVICES = [
    { name: 'Technology Help', icon: '🖥️', price: '$10–$20', details: 'Troubleshooting, device setup, or basic tech support' },
    { name: 'Cleaning', icon: '🧼', price: '$15–$25', details: 'Light cleaning tasks around the home' },
    { name: 'Party Help', icon: '🎉', price: '$15–$25', details: 'Assisting with party setup or post-party cleanup' },
    { name: 'Pet Sitting', icon: '🐾', price: '$10–$20', details: 'Feeding and caring for your pets locally' },
    { name: 'Errands', icon: '🏃', price: '$10–$15', details: 'Shopping, local deliveries, or small tasks' },
    { name: 'Gardening', icon: '🌿', price: '$15–$25', details: 'Watering plants, weeding, basic yard help' },
    { name: 'Senior Assistance', icon: '🧑‍⚕️', price: '$20–$30', details: 'Companionship and help with errands' },
    { name: 'General Labor', icon: '💪', price: '$15–$30+', details: 'Moving furniture or small repairs' }
];

const FAQS = [
    { q: "What areas do you service?", a: "We primarily service Albury and surrounding suburbs. Just ask if you're slightly further out!" },
    { q: "What forms of payment do you accept?", a: "We are a strictly cash-only service. Payment is settled in cash upon completion of the task." },
    { q: "Are your prices negotiable?", a: "Yes! Guide prices are provided, but we can negotiate based on your specific task and budget." }
];

const HOURS = {
    term: [
        { day: 'Monday', h: '4:00 PM – 8:00 PM' },
        { day: 'Tuesday–Wednesday', h: 'Closed' },
        { day: 'Thursday', h: '4:00 PM – 8:00 PM' },
        { day: 'Friday', h: '4:00 PM – 9:00 PM' },
        { day: 'Saturday–Sunday', h: '8:00 AM – 10:00 PM' }
    ],
    holidays: [
        { day: 'Mon–Fri', h: '10:00 AM – 6:00 PM' },
        { day: 'Sat–Sun', h: '8:00 AM – 10:00 PM' }
    ],
    closures: [
        { name: 'Christmas Day', icon: '🎅' },
        { name: 'New Year’s Eve', icon: '🎆' },
        { name: 'Good Friday', icon: '✝️' }
    ]
};

// Rendering Logic
function init() {
    // Services
    document.getElementById('services-grid').innerHTML = SERVICES.map(s => `
        <div class="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-2xl transition-all duration-300 flex flex-col">
            <div class="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-indigo-50 transition-transform">${s.icon}</div>
            <h4 class="text-xl font-bold text-slate-900 mb-2 font-display">${s.name}</h4>
            <div class="text-indigo-600 font-bold text-lg mb-3">${s.price}</div>
            <p class="text-slate-600 text-sm leading-relaxed">${s.details}</p>
        </div>
    `).join('');

    // FAQs
    document.getElementById('faq-list').innerHTML = FAQS.map((f, i) => `
        <div class="faq-item border border-slate-100 rounded-2xl p-6 bg-slate-50 overflow-hidden">
            <button class="w-full flex items-center justify-between text-left faq-toggle" data-index="${i}">
                <span class="text-lg font-semibold text-slate-900">${f.q}</span>
                <span class="text-2xl transition-transform faq-icon">+</span>
            </button>
            <div class="faq-answer">
                <p class="text-slate-600 leading-relaxed">${f.a}</p>
            </div>
        </div>
    `).join('');

    // Hours
    document.getElementById('school-term-hours').innerHTML = `
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-600 font-display">🎒 School Term</h3>
        <ul class="space-y-4">
            ${HOURS.term.map(h => `
                <li class="flex justify-between items-center py-2 border-b border-slate-50 last:border-none">
                    <span class="font-medium text-slate-700">${h.day}</span>
                    <span class="${h.h === 'Closed' ? 'text-red-500' : 'text-green-600'} font-bold text-sm">${h.h}</span>
                </li>
            `).join('')}
        </ul>
    `;

    document.getElementById('holiday-hours').innerHTML = `
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600 font-display">🏖️ Holidays</h3>
        <ul class="space-y-4">
            ${HOURS.holidays.map(h => `
                <li class="flex justify-between items-center py-2 border-b border-slate-50 last:border-none">
                    <span class="font-medium text-slate-700">${h.day}</span>
                    <span class="text-blue-600 font-bold text-sm">${h.h}</span>
                </li>
            `).join('')}
        </ul>
    `;

    document.getElementById('closures').innerHTML = `
        <h4 class="text-sm font-bold text-slate-500 mb-4 uppercase tracking-widest">Special Closures</h4>
        <div class="flex flex-wrap gap-2">
            ${HOURS.closures.map(c => `<span class="bg-white px-3 py-1 rounded-lg text-xs border border-indigo-100 flex items-center gap-2"><span>${c.icon}</span>${c.name}</span>`).join('')}
        </div>
    `;

    // Navbar Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    // FAQ Toggle
    document.querySelectorAll('.faq-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const wasActive = item.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-icon').innerText = '+';
            });

            if (!wasActive) {
                item.classList.add('active');
                btn.querySelector('.faq-icon').innerText = '−';
            }
        });
    });

    // Form Submission
    document.getElementById('booking-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submit-btn');
        btn.disabled = true;
        btn.innerText = 'Processing...';

        setTimeout(() => {
            document.getElementById('booking-container').innerHTML = `
                <div class="py-24 text-center">
                    <div class="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 success-bounce">✓</div>
                    <h3 class="text-3xl font-bold mb-4 font-display">Booking Sent!</h3>
                    <p class="text-slate-600 mb-10">Thanks for reaching out! Reuben will email you shortly to confirm details.</p>
                    <button onclick="location.reload()" class="text-indigo-600 font-semibold hover:underline">Book another task</button>
                </div>
            `;
        }, 1500);
    });

    document.getElementById('year').innerText = new Date().getFullYear();
}

window.addEventListener('DOMContentLoaded', init);