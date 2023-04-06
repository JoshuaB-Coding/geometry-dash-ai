# geometry-dash-ai
Creating a fully-fledged Geometry Dash game alongside an AI which learns to beat user-created levels

# Project Description

This project involves 3 key stages: creating levels, allowing the user to play levels and generating an AI to train to beat the levels.

## Player Object

The player has only one action it can perform: `jump()`. This causes the player to perform a jump of specified height. As the player jumps, it rotates. The jump should be as high as the size of the player such that the player can jump to a block of equal height to the player. The rotation rate should be such that if the player lands on a block, it rotates 90 degrees and remains at this rotation. The player should also have a set, constant speed. In reality, the position of the player never changes and, instead, the background and level moves with the player located in the first half of the screen.

The methods contained within the `Player` object are listed below.
- `constructor(playerAsset, context)` - initialises the object setting the player image to the supplied asset and setting the context to the canvas context
- `render()` - renders the player to the canvas
- `playerState(Map)` - returns an array containing information about the distance between the player and the next obstacle it can see in the map
- `jump()` - causes the player to jump
- `deathAnimation()` - renders the player death animation to the screen

## Level Object

The `Level` class contains the canvas on which the level, obstacles and player are drawn to. It also contains information about how to move the level relative to the player.

## Map Object

The `Map` class contains information about what type and where obstacles are placed along the map. 

## Obstacle Object

An `Obstacle` can be either a block or spike.
