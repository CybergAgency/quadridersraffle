// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
    })
}

// Modal functionality
const purchaseBtn = document.getElementById("purchase-btn")
const modal = document.getElementById("purchase-modal")
const closeModal = document.getElementById("close-modal")
const purchaseForm = document.getElementById("purchase-form")
const ticketsInput = document.getElementById("tickets")
const totalAmount = document.getElementById("total-amount")

// Open modal
if (purchaseBtn && modal) {
    purchaseBtn.addEventListener("click", () => {
        modal.classList.add("active")
        document.body.style.overflow = "hidden"
    })
}

// Close modal
if (closeModal && modal) {
    closeModal.addEventListener("click", () => {
        modal.classList.remove("active")
        document.body.style.overflow = "auto"
    })
}

// Close modal when clicking outside
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active")
            document.body.style.overflow = "auto"
        }
    })
}

// Calculate total amount
if (ticketsInput && totalAmount) {
    ticketsInput.addEventListener("input", () => {
        const tickets = Number.parseInt(ticketsInput.value) || 1
        const total = tickets * 20
        totalAmount.textContent = `$${total.toFixed(2)}`
    })
}

// Form submission
if (purchaseForm) {
    purchaseForm.addEventListener("submit", (e) => {
        e.preventDefault()

        // Get form data
        const formData = {
            fullName: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            tickets: document.getElementById("tickets").value,
            ageConfirm: document.getElementById("age-confirm").checked,
            bcConfirm: document.getElementById("bc-confirm").checked,
            termsConfirm: document.getElementById("terms-confirm").checked,
        }

        // Validate checkboxes
        if (!formData.ageConfirm || !formData.bcConfirm || !formData.termsConfirm) {
            alert("Please confirm all required checkboxes.")
            return
        }

        // Here you would normally send the data to a server
        console.log("Form submitted:", formData)

        // Show success message
        alert(
            `Thank you for your purchase! You have ordered ${formData.tickets} ticket(s). You will receive a confirmation email at ${formData.email} with your ticket numbers.`,
        )

        // Close modal and reset form
        modal.classList.remove("active")
        document.body.style.overflow = "auto"
        purchaseForm.reset()
        totalAmount.textContent = "$20.00"
    })
}
