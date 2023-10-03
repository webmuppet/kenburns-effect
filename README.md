# kenburns-effect
A simple javascript to enlarge then reduce a still image as it moves through the viewport - creating a sense of dynamism for otherwise static content.

Here's the step-by-step solution:

1. **CSS**: 
    - Set the initial styles for the `div` elements.
2. **JavaScript**: 
    - Get all the `div` elements with class "kenburns".
    - Add an event listener for the `scroll` event.
    - For each `div` with the "kenburns" class, calculate its position in the viewport.
    - Based on its position, adjust the scale of the background image.

To use this solution on an HTML page:
    1. Add the CSS to your styles.
    2. Add the JavaScript to your scripts.
    3. For any `div` you want to apply the effect to, just add the "kenburns" class (works as a combo class too)

Examples:
Using inline style references for the background image...
<div class="kenburns" style="background-image: url('path/to/your/image.jpg'); height: 300px;"></div>

Equally this can be achieved by added "kenburns" to your existing classes where background-images are delcared in an external stylesheet
<div class="existing-image-class kenburns"></div>

Adjust the `MIN_SCALE` and `MAX_SCALE` variables in the JavaScript to set your desired scaling percentages.