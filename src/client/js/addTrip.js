export function addTrip() {
    const addBtn = document.querySelector('.add_btn');
    const add_trip = document.querySelector('.add_trip');

    // Show add trip section
    addBtn.addEventListener('click', () => {
        add_trip.classList.toggle('hideSection');

    });
}