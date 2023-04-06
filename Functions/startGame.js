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

    var player = new Player();
    player.render();
}
