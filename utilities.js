// display section when clicked 

function toggleSections(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

// display background color in button when clicked 

function changeButtonBg(id){
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]', 'border', 'border-1', 'border-gray-400', 'hover:bg-[#c2f086]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]', 'border', 'border-1', 'border-gray-400', 'hover:bg-[#c2f086]');

    document.getElementById(id).classList.remove('bg-[#B4F461]');
}

// input field data 

function inputFieldValueNumber(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)

    return inputValueNumber
}