$(document).ready(function(){

	let searchinput = document.getElementById("searchTerm");
	
	
	



	function getresult()
	{
		$.ajax({
       url:'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ searchinput.value +'&format=json&callback=?',
        type:"GET",
        asunc:false,
        dataType:"json",

       success:function(response){

     $('#output').html('');
      for(var i=0;i<response[1].length;i++)
        {
      $('#output').prepend("<li><a href="+response[3][i]+">"+response[1][i]+"</a><p>"+response[2][i]+"</p></li>");
        }
    },
    error: function(errorMessage){
      alert("Error");
    }

       	

});
	}

	$('#search').on('click',function(){

            getresult();
	});
	
});