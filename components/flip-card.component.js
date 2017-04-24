var flipCard = angular.module ('flipCard', []);

flipCard.component ('flipCard', {

	templateUrl: 'components/flip-card.template.html', 

	controller: function FlipCardController(){

		var imageFront= ['img/i01.jpg', 'img/i02.jpg', 'img/i03.jpg',
			'img/i04.jpg', 'img/i05.jpg', 'img/i06.jpg',
			'img/i07.jpg','img/i08.jpg', 'img/i09.jpg',  
			'img/i10.jpg','img/i11.jpg', 'img/i12.jpg', 
			'img/i13.jpg','img/i14.jpg', 'img/i15.jpg'];

		var imageBack=['img/i01b.jpg', 'img/i02b.jpg', 'img/i03b.jpg',
			'img/i04b.jpg', 'img/i05b.jpg', 'img/i06b.jpg',
			'img/i07b.jpg','img/i08b.jpg', 'img/i09b.jpg',  
			'img/i10b.jpg','img/i11b.jpg', 'img/i12b.jpg', 
			'img/i13b.jpg','img/i14b.jpg', 'img/i15b.jpg'];


		
		this.flipImages = imageFront.map(function(value, index) {
	    	return {
		        frontImg: value,
		        backImg: imageBack[index]
		    	}
			});

		console.log('controller flip card');


		$(document).ready(function(){
		  $(".card").flip({
		  axis: 'y',
		  trigger: 'hover'
		  });   
		});



	}

});