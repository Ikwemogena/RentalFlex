// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'YOUR_SUPABASE_URL';
// const supabaseKey = 'YOUR_SUPABASE_KEY';

// const supabase = createClient(supabaseUrl, supabaseKey);

// async function uploadListingImage(listingId, imageFile) {
//   const { data, error } = await supabase.storage
//     .from(`listings/${listingId}`) // Use the appropriate folder structure
//     .upload(`image-${Date.now()}.jpg`, imageFile);

//   if (error) {
//     console.error('Error uploading image:', error.message);
//   } else {
//     console.log('Image uploaded successfully:', data.Key);
//   }
// }

// // Example usage
// const listingId = '123'; // Replace with the actual listing ID
// const imageFile = /* Your image file object or blob */;
// uploadListingImage(listingId, imageFile);


// getimage url/
// async function getImageUrl(listingId, imageName) {
//     const { publicURL, error } = await supabase.storage
//       .from(`listings/${listingId}`)
//       .createSignedUrl(imageName, 60); // URL is valid for 60 seconds
  
//     if (error) {
//       console.error('Error generating image URL:', error.message);
//     } else {
//       console.log('Image URL:', publicURL);
//     }
//   }
  
//   // Example usage
//   const listingId = '123'; // Replace with the actual listing ID
//   const imageName = 'image-123456789.jpg'; // Replace with the actual image name
//   getImageUrl(listingId, imageName);
  