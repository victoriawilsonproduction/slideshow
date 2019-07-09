var slideshow = {
	photoList: ['images/vaporwave.png', 'images/cars.png', 'images/city.png', 'images/cyberpunk.png', 
				'images/flowers.png', 'images/mountain.jpg', 'images/space2.jpg', 'images/subway.png', 
				'images/sun.png', 'images/sun2.png', 'images/trees.png'],
	currentPhotoIndex: 0,
	nextPhoto: function(){
		if(this.currentPhotoIndex + 1 < this.photoList.length){
			this.currentPhotoIndex++;
			this.displayPhoto();
		}else{
			this.pause();
			console.log("End of Slideshow");
		}
	},
	prevPhoto: function(){
		if(this.currentPhotoIndex > 0){
			this.currentPhotoIndex--;
			this.displayPhoto();
		}else{
			console.log('Beginning of Slideshow');
		}
	},
	displayPhoto: function(){
		$('#slideshowImage').attr('src', this.getCurrentPhoto());
	},
	getCurrentPhoto: function(){
		return this.photoList[this.currentPhotoIndex];
	},

	play: function() {
		this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
	},
	
	pause: function() {
		clearInterval(this.playInterval);
	}
};

slideshow.displayPhoto();

$('#prevPhoto').click(function(){
	slideshow.prevPhoto();
});

$('#nextPhoto').click(function(){
	slideshow.nextPhoto();
});

$('#play').click(function(){
	slideshow.play();
});

$('#pause').click(function(){
	slideshow.pause();
});