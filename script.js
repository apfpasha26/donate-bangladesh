// event for Blog file 
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = '/blog.html'
})

// toggle section when clicked 

document.getElementById('donate-btn').addEventListener('click', function () {
    toggleSections('donate-section')
})
document.getElementById('history-btn').addEventListener('click', function () {
    toggleSections('history-section')
})

// change button's background color when clicked 

document.getElementById('donate-btn').addEventListener('click', function () {
    changeButtonBg('history-btn')
})
document.getElementById('history-btn').addEventListener('click', function () {
    changeButtonBg('donate-btn')
})



// for modal section 



// Function to hide the modal



// input field's and button event

// for noakhali section 
document.getElementById('noakhali-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const noakhaliInput = inputFieldValueNumber('noakhali-input-field')
    const noakhaliBalance = balanceValueNumber('noakhali-balance');
    const newNoakhaliBalance = noakhaliBalance + noakhaliInput;
    const newMainBalance = mainBalance - noakhaliInput;

    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
    document.getElementById('main-balance').innerText = newMainBalance;
    my_modal_5.showModal()
})

// for feni section 
document.getElementById('feni-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const feniInput = inputFieldValueNumber('feni-input-field')
    const feniBalance = balanceValueNumber('feni-balance');
    const newFeniBalance = feniBalance + feniInput;
    const newMainBalance = mainBalance - feniInput;

    document.getElementById('feni-balance').innerText = newFeniBalance;
    document.getElementById('main-balance').innerText = newMainBalance;

    my_modal_5.showModal()
})

// for quota protest section 
document.getElementById('quota-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const quotaInput = inputFieldValueNumber('quota-input-field')
    const quotaBalance = balanceValueNumber('quota-balance');
    const newQuotaBalance = quotaBalance + quotaInput;
    const newMainBalance = mainBalance - quotaInput;

    document.getElementById('quota-balance').innerText = newQuotaBalance;
    document.getElementById('main-balance').innerText = newMainBalance;

    my_modal_5.showModal()
})



