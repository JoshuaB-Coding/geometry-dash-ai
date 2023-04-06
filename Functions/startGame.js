function startGame() {
    const gameHeight = 300;
    const gameWidth = 700;

    Assets.loadAssets();

    var container = document.createElement('div');
    container.setAttribute('id', 'container');
    Level.setDimension(gameWidth, gameHeight);
    Level.appendToParent(container);
    document.body.appendChild(container);
    
    Level.render();

    var player = new Player(Level.canvas);
    player.render();
    player.jump();

    var intervalId = setInterval(
        function() {
            // player.jump();
            player.update();
            Level.render();
            player.render();
        },
        1000 / Level.frameRate,
    );
}
