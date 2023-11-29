function displayCardInfo(inputId, outputId) {
    var input = document.getElementById(inputId);
    var output  = document.getElementById(outputId);

    input.addEventListener('input', function() {
        output.textContent = input.value;
    })
}

displayCardInfo('card-number', 'output-card-number');
displayCardInfo('card-holder', 'output-card-holder');
