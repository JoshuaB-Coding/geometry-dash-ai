var Level = {
    canvas: document.createElement('canvas'),
    context: null,
    isPlayMode: true,
    setDimension: function(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
    },
    appendToParent: function(parent) {
        this.context = this.canvas.getContext('2d');
        parent.appendChild(this.canvas);
    },
    context: function() {
        return this.context;
    },
    render: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const floorHeight = this.canvas.height * 2 / 3;
        const floorWidth = this.canvas.width;

        this.context.beginPath();
        this.context.moveTo(0, floorHeight);
        this.context.lineTo(floorWidth, floorHeight);
        this.context.strokeStyle = 'black 1px';
        this.context.stroke();
    },
};
