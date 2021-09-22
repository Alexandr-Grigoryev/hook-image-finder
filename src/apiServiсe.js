// export default function apiServiсe(searchQuery, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22463604-709d4d80ecefd06266ae1aa7f&image_type=photo&orientation=horizontal&per_page=12`
//   ).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(new Error("Image not found"));
//   });
// }

export default async function apiServiсe(searchQuery, page) {
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=22463604-709d4d80ecefd06266ae1aa7f&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error("Image not found"));
}
