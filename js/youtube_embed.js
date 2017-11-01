function embedAllYouTube(item)
{
	item.find(".youtube").each(function() {
			var url;
			var exp = /=(\S+)/;
			var linkText = $(this).text();
			
			var videoID = exp.exec(linkText);
			if(videoID != null)
			{
				url = "https://www.youtube.com/embed/" + videoID[1];
			}
			$(this).replaceWith('<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen=""></iframe>');
	});
}
