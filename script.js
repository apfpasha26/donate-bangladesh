// event for Blog file 
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/blog.html'
})

// toggle section when clicked 

document.getElementById('donate-btn').addEventListener('click', function(){
    toggleSections('donate-section')
})
document.getElementById('history-btn').addEventListener('click', function(){
    toggleSections('history-section')
})

// change button's background color when clicked 

document.getElementById('donate-btn').addEventListener('click', function(){
    changeButtonBg('history-btn')
})
document.getElementById('history-btn').addEventListener('click', function(){
    changeButtonBg('donate-btn')
})


// input field's and button event 
// for noakhali section 

const mainBalance = parseFloat(document.getElementById('main-balance').innerText);


// document.getElementById('noakhali-input-btn').addEventListener('click', function(){
//     const noakhaliBalance = document.getElementById('noakhali-balance').innerText;
//     const noakhaliInput = inputFieldValueNumber('noakhali-input-field');
//     const newNoakhaliBalance = noakhaliBalance + noakhaliInput;
//     const newBalance = mainBalance - noakhaliInput;
//     document.getElementById('noakhali-balance').innerText = newNoakhaliBalance
//     document.getElementById('main-balance').innerText = newBalance;
// })

// for feni section 
document.getElementById('feni-input-btn').addEventListener('click', function(){
    const feniInput = inputFieldValueNumber('feni-input-field');
})

// for quota protest section 
document.getElementById('quota-input-btn').addEventListener('click', function(){
    const quotaInput = inputFieldValueNumber('quota-input-field');
})