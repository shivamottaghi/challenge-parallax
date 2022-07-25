# challenge-parallax

## My to do list
- [x] Make the folder structure
- [x] Research
  - [x] How to implement different layers in page?
  - [x] How to make an infinite loop to move the images
- [x] Add canvas to index
- [x] Define constants of canvas element, its width and height
- [x] Define const for game speed
- [x] Create image elements for each image
- [x] Define a layer class
  - x , y 
  - image (the element itself)
  - speed modifier (so that it moves with different speed)
  - x2 (for the second image)
  - width
  - height
  - update method
  - draw method
- [x] Make one image move
- [x] Make other images move
- [ ] add the player to the game
- [ ] Make it move when user press arrow keys
- [ ] try to find new backgrounds for your game


### my challenges
- When trying to make the ground move, the image's resolution got super low... I couldn't find the
problem at all. Thanks to Tim, my coach, I realized that I needed to style the css inline... 
Apparently as he said
>>  css constraints interfere with the rendering of your canvas, which is why there's an edge case that inline styling is actually more optimal than regular styling through a css file.
