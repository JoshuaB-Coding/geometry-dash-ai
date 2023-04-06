var Assets = {
    playerAsset: new Image(),
    backgroundAsset: new Image(),
    spikeAsset: new Image(),
    blockAsset: new Image(),
    loadAssets: function() {
        this.playerAsset.src = "./Assets/player.png";
        this.backgroundAsset.src = "./Assets/background.png";
        this.spikeAsset.src = "./Assets/spike.png";
        this.blockAsset.src = "./Assets/block.png";
    },
};
