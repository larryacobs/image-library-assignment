const IMAGE_URLS = [
    'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
    'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg'
]

$(function() {
    $(".image-checkbox").each(function(index) {
        var imageUrl = IMAGE_URLS[index % IMAGE_URLS.length];
        
        // Set background image of image-checkbox elements
        $(this).find(".image").css("background-image", "url(" + imageUrl + ")");
    });
})
    
